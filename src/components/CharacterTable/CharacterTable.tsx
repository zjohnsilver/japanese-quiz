import React, { useState, useMemo } from 'react';
import { hiraganaAlphabet, CharacterData, SoundGroup } from '@/src/data/alphabets/hiragana';
import { katakanaAlphabet } from '@/src/data/alphabets/katakana';
import styles from './styles.module.css';
import { AlphabetType, CharacterType } from '@/src/types/alphabet';

type UnifiedAlphabetData = {
  basic: SoundGroup[];
  dakuten: SoundGroup[];
  youon: SoundGroup[];
  foreign?: SoundGroup[];
};

// Vowel order for gojūonzu layout
const vowelOrder = ['a', 'i', 'u', 'e', 'o'];

const CharacterTable = () => {
  const [selectAlphabetType, setSelectAlphabetType] = useState<AlphabetType>('hiragana');
  const [selectedType, setSelectedType] = useState<CharacterType>('basic');

  const alphabetData = useMemo((): UnifiedAlphabetData => {
    return selectAlphabetType === 'hiragana' ? hiraganaAlphabet : katakanaAlphabet;
  }, [selectAlphabetType]);

  // Create lookup map for quick character finding
  const characterMap = useMemo(() => {
    const map = new Map<string, CharacterData>();
    Object.values(alphabetData).flat().forEach(group => {
      if (group && group.characters) {
        group.characters.forEach(char => {
          map.set(char.romaji, char);
        });
      }
    });
    return map;
  }, [alphabetData]);

  const availableTypes = useMemo(() => {
    const types: CharacterType[] = [];
    if (alphabetData.basic && alphabetData.basic.length > 0) types.push('basic');
    if (alphabetData.dakuten && alphabetData.dakuten.length > 0) types.push('dakuten');
    if (alphabetData.youon && alphabetData.youon.length > 0) types.push('youon');
    if (alphabetData.foreign && alphabetData.foreign.length > 0) {
      types.push('foreign');
    }
    return types;
  }, [alphabetData]);

  const getTypeLabel = (type: CharacterType): string => {
    const labels = {
      basic: 'Basic',
      dakuten: 'Dakuten',
      youon: 'Youon',
      foreign: 'Foreign Sounds'
    };
    return labels[type];
  };

  React.useEffect(() => {
    if (!availableTypes.includes(selectedType)) {
      setSelectedType(availableTypes[0] || 'basic');
    }
  }, [availableTypes, selectedType]);

  const renderBasicTable = () => {
    const soundGroups = alphabetData.basic;
    
    return (
      <div className={styles.gojuonzuTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}></div>
          {vowelOrder.map(vowel => (
            <div key={vowel} className={styles.headerCell}>{vowel.toUpperCase()}</div>
          ))}
          <div className={styles.headerCell}>N</div>
        </div>
        
        {soundGroups.map((group, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            <div className={styles.rowHeader}>
              {group.name ? group.name.toUpperCase() : 'VOWELS'}
            </div>
            {vowelOrder.map((vowel, colIndex) => {
              let char = null;
              
              if (group.name === '') {
                // Vowels row - direct match
                char = group.characters.find(c => c.romaji === vowel);
              } else if (group.name === 'y') {
                // Y sounds - only ya, yu, yo (skip i and e)
                if (vowel === 'a' || vowel === 'u' || vowel === 'o') {
                  char = group.characters.find(c => c.romaji === `${group.name}${vowel}`);
                }
              } else if (group.name === 'w') {
                // W sounds - only wa and wo (skip i, u, e)
                if (vowel === 'a' || vowel === 'o') {
                  char = group.characters.find(c => c.romaji === `${group.name}${vowel}`);
                }
              } else {
                // Regular consonant groups - find by romaji
                char = group.characters.find(c => {
                  // Handle special cases
                  if (group.name === 's' && vowel === 'i') return c.romaji === 'shi';
                  if (group.name === 't' && vowel === 'i') return c.romaji === 'chi';
                  if (group.name === 't' && vowel === 'u') return c.romaji === 'tsu';
                  if (group.name === 'h' && vowel === 'u') return c.romaji === 'fu';
                  
                  // Regular pattern: consonant + vowel
                  return c.romaji === `${group.name}${vowel}`;
                });
              }
              
              return (
                <div key={colIndex} className={`${styles.characterCell} ${!char ? styles.emptyCell : ''}`}>
                  {char && (
                    <>
                      <div className={styles.character}>{char.character}</div>
                      <div className={styles.romaji}>{char.romaji}</div>
                    </>
                  )}
                </div>
              );
            })}
            {/* Special N column - show for vowels row (which contains n) */}
            {group.name === '' && (
              <div className={styles.characterCell}>
                {(() => {
                  const nChar = group.characters.find(c => c.romaji === 'n');
                  return nChar ? (
                    <>
                      <div className={styles.character}>{nChar.character}</div>
                      <div className={styles.romaji}>{nChar.romaji}</div>
                    </>
                  ) : null;
                })()}
              </div>
            )}
            {group.name !== '' && <div className={styles.emptyCell}></div>}
          </div>
        ))}
      </div>
    );
  };

  const renderDakutenTable = () => {
    const soundGroups = alphabetData.dakuten;
    
    return (
      <div className={styles.gojuonzuTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}></div>
          {vowelOrder.map(vowel => (
            <div key={vowel} className={styles.headerCell}>{vowel.toUpperCase()}</div>
          ))}
        </div>
        
        {soundGroups.map((group, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            <div className={styles.rowHeader}>
              {group.name.toUpperCase()}
            </div>
            {vowelOrder.map((vowel, colIndex) => {
              // Find character that matches this vowel sound
              const char = group.characters.find(c => {
                // Handle special cases for dakuten
                if (group.name === 'z' && vowel === 'i') return c.romaji === 'ji';
                if (group.name === 'z' && vowel === 'u') return c.romaji === 'zu';
                if (group.name === 'd' && vowel === 'i') return c.romaji === 'ji'; // ぢ -> ji
                if (group.name === 'd' && vowel === 'u') return c.romaji === 'zu'; // づ -> zu
                
                // Regular pattern: consonant + vowel
                return c.romaji === `${group.name}${vowel}`;
              });
              
              return (
                <div key={colIndex} className={styles.characterCell}>
                  {char && (
                    <>
                      <div className={styles.character}>{char.character}</div>
                      <div className={styles.romaji}>{char.romaji}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderYouonTable = () => {
    const soundGroups = alphabetData.youon;
    const youonVowels = ['ya', 'yu', 'yo'];
    
    return (
      <div className={styles.youonTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}></div>
          <div className={styles.headerCell}>YA</div>
          <div className={styles.headerCell}>YU</div>
          <div className={styles.headerCell}>YO</div>
        </div>
        
        {soundGroups.map((group, rowIndex) => (
          <div key={rowIndex} className={styles.tableRow}>
            <div className={styles.rowHeader}>
              {group.name.toUpperCase()}
            </div>
            {youonVowels.map((youonVowel, colIndex) => {
              // Find character that matches this youon sound
              const char = group.characters.find(c => 
                c.romaji.endsWith(youonVowel)
              );
              
              return (
                <div key={colIndex} className={styles.characterCell}>
                  {char && (
                    <>
                      <div className={styles.character}>{char.character}</div>
                      <div className={styles.romaji}>{char.romaji}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderForeignTable = () => {
    const foreignGroups = alphabetData.foreign || [];
    
    return (
      <div className={styles.foreignGrid}>
        {foreignGroups.map((group, groupIndex) => 
          group.characters.map((char, charIndex) => (
            <div key={`${groupIndex}-${charIndex}`} className={styles.characterCard}>
              <div className={styles.character}>{char.character}</div>
              <div className={styles.romaji}>{char.romaji}</div>
            </div>
          ))
        )}
      </div>
    );
  };

  const renderCurrentTable = () => {
    switch (selectedType) {
      case 'basic':
        return renderBasicTable();
      case 'dakuten':
        return renderDakutenTable();
      case 'youon':
        return renderYouonTable();
      case 'foreign':
        return renderForeignTable();
      default:
        return <div className={styles.emptyState}>No characters available for this selection.</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Japanese Character Table (Gojūonzu)</h2>
        
        <div className={styles.controls}>
          <div className={styles.scriptToggle}>
            <button
              className={`${styles.toggleButton} ${selectAlphabetType === 'hiragana' ? styles.active : ''}`}
              onClick={() => setSelectAlphabetType('hiragana')}
            >
              Hiragana
            </button>
            <button
              className={`${styles.toggleButton} ${selectAlphabetType === 'katakana' ? styles.active : ''}`}
              onClick={() => setSelectAlphabetType('katakana')}
            >
              Katakana
            </button>
          </div>

          <div className={styles.typeSelector}>
            {availableTypes.map(type => (
              <button
                key={type}
                className={`${styles.typeButton} ${selectedType === type ? styles.active : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {getTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        {renderCurrentTable()}
      </div>
    </div>
  );
};

export default CharacterTable; 