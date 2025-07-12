export type CharacterData = {
  character: string;
  romaji: string;
};

export type AlphabetData = {
  basic: CharacterData[];
  dakuten: CharacterData[];
  youon: CharacterData[];
};

export const hiraganaAlphabet: AlphabetData = {
  basic: [
    // Vowels
    { character: 'あ', romaji: 'a' },
    { character: 'い', romaji: 'i' },
    { character: 'う', romaji: 'u' },
    { character: 'え', romaji: 'e' },
    { character: 'お', romaji: 'o' },
    
    // K sounds
    { character: 'か', romaji: 'ka' },
    { character: 'き', romaji: 'ki' },
    { character: 'く', romaji: 'ku' },
    { character: 'け', romaji: 'ke' },
    { character: 'こ', romaji: 'ko' },
    
    // S sounds
    { character: 'さ', romaji: 'sa' },
    { character: 'し', romaji: 'shi' },
    { character: 'す', romaji: 'su' },
    { character: 'せ', romaji: 'se' },
    { character: 'そ', romaji: 'so' },
    
    // T sounds
    { character: 'た', romaji: 'ta' },
    { character: 'ち', romaji: 'chi' },
    { character: 'つ', romaji: 'tsu' },
    { character: 'て', romaji: 'te' },
    { character: 'と', romaji: 'to' },
    
    // N sounds
    { character: 'な', romaji: 'na' },
    { character: 'に', romaji: 'ni' },
    { character: 'ぬ', romaji: 'nu' },
    { character: 'ね', romaji: 'ne' },
    { character: 'の', romaji: 'no' },
    
    // H sounds
    { character: 'は', romaji: 'ha' },
    { character: 'ひ', romaji: 'hi' },
    { character: 'ふ', romaji: 'fu' },
    { character: 'へ', romaji: 'he' },
    { character: 'ほ', romaji: 'ho' },
    
    // M sounds
    { character: 'ま', romaji: 'ma' },
    { character: 'み', romaji: 'mi' },
    { character: 'む', romaji: 'mu' },
    { character: 'め', romaji: 'me' },
    { character: 'も', romaji: 'mo' },
    
    // Y sounds
    { character: 'や', romaji: 'ya' },
    { character: 'ゆ', romaji: 'yu' },
    { character: 'よ', romaji: 'yo' },
    
    // R sounds
    { character: 'ら', romaji: 'ra' },
    { character: 'り', romaji: 'ri' },
    { character: 'る', romaji: 'ru' },
    { character: 'れ', romaji: 're' },
    { character: 'ろ', romaji: 'ro' },
    
    // W sounds and N
    { character: 'わ', romaji: 'wa' },
    { character: 'を', romaji: 'wo' },
    { character: 'ん', romaji: 'n' },
  ],
  
  dakuten: [
    // G sounds (voiced K)
    { character: 'が', romaji: 'ga' },
    { character: 'ぎ', romaji: 'gi' },
    { character: 'ぐ', romaji: 'gu' },
    { character: 'げ', romaji: 'ge' },
    { character: 'ご', romaji: 'go' },
    
    // Z sounds (voiced S)
    { character: 'ざ', romaji: 'za' },
    { character: 'じ', romaji: 'ji' },
    { character: 'ず', romaji: 'zu' },
    { character: 'ぜ', romaji: 'ze' },
    { character: 'ぞ', romaji: 'zo' },
    
    // D sounds (voiced T)
    { character: 'だ', romaji: 'da' },
    { character: 'ぢ', romaji: 'ji' },
    { character: 'づ', romaji: 'zu' },
    { character: 'で', romaji: 'de' },
    { character: 'ど', romaji: 'do' },
    
    // B sounds (voiced H)
    { character: 'ば', romaji: 'ba' },
    { character: 'び', romaji: 'bi' },
    { character: 'ぶ', romaji: 'bu' },
    { character: 'べ', romaji: 'be' },
    { character: 'ぼ', romaji: 'bo' },
    
    // P sounds (semi-voiced H)
    { character: 'ぱ', romaji: 'pa' },
    { character: 'ぴ', romaji: 'pi' },
    { character: 'ぷ', romaji: 'pu' },
    { character: 'ぺ', romaji: 'pe' },
    { character: 'ぽ', romaji: 'po' },
  ],
  
  youon: [
    // K + Y sounds
    { character: 'きゃ', romaji: 'kya' },
    { character: 'きゅ', romaji: 'kyu' },
    { character: 'きょ', romaji: 'kyo' },
    
    // G + Y sounds
    { character: 'ぎゃ', romaji: 'gya' },
    { character: 'ぎゅ', romaji: 'gyu' },
    { character: 'ぎょ', romaji: 'gyo' },
    
    // S + Y sounds
    { character: 'しゃ', romaji: 'sha' },
    { character: 'しゅ', romaji: 'shu' },
    { character: 'しょ', romaji: 'sho' },
    
    // J sounds (Z + Y)
    { character: 'じゃ', romaji: 'ja' },
    { character: 'じゅ', romaji: 'ju' },
    { character: 'じょ', romaji: 'jo' },
    
    // CH sounds (T + Y)
    { character: 'ちゃ', romaji: 'cha' },
    { character: 'ちゅ', romaji: 'chu' },
    { character: 'ちょ', romaji: 'cho' },
    
    // N + Y sounds
    { character: 'にゃ', romaji: 'nya' },
    { character: 'にゅ', romaji: 'nyu' },
    { character: 'にょ', romaji: 'nyo' },
    
    // H + Y sounds
    { character: 'ひゃ', romaji: 'hya' },
    { character: 'ひゅ', romaji: 'hyu' },
    { character: 'ひょ', romaji: 'hyo' },
    
    // B + Y sounds
    { character: 'びゃ', romaji: 'bya' },
    { character: 'びゅ', romaji: 'byu' },
    { character: 'びょ', romaji: 'byo' },
    
    // P + Y sounds
    { character: 'ぴゃ', romaji: 'pya' },
    { character: 'ぴゅ', romaji: 'pyu' },
    { character: 'ぴょ', romaji: 'pyo' },
    
    // M + Y sounds
    { character: 'みゃ', romaji: 'mya' },
    { character: 'みゅ', romaji: 'myu' },
    { character: 'みょ', romaji: 'myo' },
    
    // R + Y sounds
    { character: 'りゃ', romaji: 'rya' },
    { character: 'りゅ', romaji: 'ryu' },
    { character: 'りょ', romaji: 'ryo' },
  ],
}; 