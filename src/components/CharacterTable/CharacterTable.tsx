import React, { useState, useMemo } from 'react';
import { hiraganaAlphabet, CharacterData } from '@/src/data/alphabets/hiragana';
import { katakanaAlphabet } from '@/src/data/alphabets/katakana';
import styles from './styles.module.css';
import { AlphabetType, CharacterType } from '@/src/types/alphabet';

type UnifiedAlphabetData = {
  basic: CharacterData[];
  dakuten: CharacterData[];
  youon: CharacterData[];
  foreign?: CharacterData[];
};

const CharacterTable = () => {
  const [selectAlphabetType, setSelectAlphabetType] = useState<AlphabetType>('hiragana');
  const [selectedType, setSelectedType] = useState<CharacterType>('basic');

  const alphabetData = useMemo((): UnifiedAlphabetData => {
    return selectAlphabetType === 'hiragana' ? hiraganaAlphabet : katakanaAlphabet;
  }, [selectAlphabetType]);

  const currentCharacters = useMemo(() => {
    switch (selectedType) {
      case 'basic':
        return alphabetData.basic;
      case 'dakuten':
        return alphabetData.dakuten;
      case 'youon':
        return alphabetData.youon;
      case 'foreign':
        return alphabetData.foreign || [];
      default:
        return [];
    }
  }, [alphabetData, selectedType]);

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Japanese Character Table</h2>
        
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
        <div className={styles.characterGrid}>
          {currentCharacters.map((char: CharacterData, index: number) => (
            <div key={`${char.character}-${char.romaji}-${index}`} className={styles.characterCard}>
              <div className={styles.character}>{char.character}</div>
              <div className={styles.romaji}>{char.romaji}</div>
            </div>
          ))}
        </div>
        
        {currentCharacters.length === 0 && (
          <div className={styles.emptyState}>
            <p>No characters available for this selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterTable; 