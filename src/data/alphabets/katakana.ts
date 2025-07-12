export type CharacterData = {
  character: string;
  romaji: string;
};

export type KatakanaAlphabetData = {
  basic: CharacterData[];
  dakuten: CharacterData[];
  youon: CharacterData[];
  foreign: CharacterData[];
};

export const katakanaAlphabet: KatakanaAlphabetData = {
  basic: [
    // Vowels
    { character: 'ア', romaji: 'a' },
    { character: 'イ', romaji: 'i' },
    { character: 'ウ', romaji: 'u' },
    { character: 'エ', romaji: 'e' },
    { character: 'オ', romaji: 'o' },
    
    // K sounds
    { character: 'カ', romaji: 'ka' },
    { character: 'キ', romaji: 'ki' },
    { character: 'ク', romaji: 'ku' },
    { character: 'ケ', romaji: 'ke' },
    { character: 'コ', romaji: 'ko' },
    
    // S sounds
    { character: 'サ', romaji: 'sa' },
    { character: 'シ', romaji: 'shi' },
    { character: 'ス', romaji: 'su' },
    { character: 'セ', romaji: 'se' },
    { character: 'ソ', romaji: 'so' },
    
    // T sounds
    { character: 'タ', romaji: 'ta' },
    { character: 'チ', romaji: 'chi' },
    { character: 'ツ', romaji: 'tsu' },
    { character: 'テ', romaji: 'te' },
    { character: 'ト', romaji: 'to' },
    
    // N sounds
    { character: 'ナ', romaji: 'na' },
    { character: 'ニ', romaji: 'ni' },
    { character: 'ヌ', romaji: 'nu' },
    { character: 'ネ', romaji: 'ne' },
    { character: 'ノ', romaji: 'no' },
    
    // H sounds
    { character: 'ハ', romaji: 'ha' },
    { character: 'ヒ', romaji: 'hi' },
    { character: 'フ', romaji: 'fu' },
    { character: 'ヘ', romaji: 'he' },
    { character: 'ホ', romaji: 'ho' },
    
    // M sounds
    { character: 'マ', romaji: 'ma' },
    { character: 'ミ', romaji: 'mi' },
    { character: 'ム', romaji: 'mu' },
    { character: 'メ', romaji: 'me' },
    { character: 'モ', romaji: 'mo' },
    
    // Y sounds
    { character: 'ヤ', romaji: 'ya' },
    { character: 'ユ', romaji: 'yu' },
    { character: 'ヨ', romaji: 'yo' },
    
    // R sounds
    { character: 'ラ', romaji: 'ra' },
    { character: 'リ', romaji: 'ri' },
    { character: 'ル', romaji: 'ru' },
    { character: 'レ', romaji: 're' },
    { character: 'ロ', romaji: 'ro' },
    
    // W sounds and N
    { character: 'ワ', romaji: 'wa' },
    { character: 'ヲ', romaji: 'wo' },
    { character: 'ン', romaji: 'n' },
  ],
  
  dakuten: [
    // G sounds (voiced K)
    { character: 'ガ', romaji: 'ga' },
    { character: 'ギ', romaji: 'gi' },
    { character: 'グ', romaji: 'gu' },
    { character: 'ゲ', romaji: 'ge' },
    { character: 'ゴ', romaji: 'go' },
    
    // Z sounds (voiced S)
    { character: 'ザ', romaji: 'za' },
    { character: 'ジ', romaji: 'ji' },
    { character: 'ズ', romaji: 'zu' },
    { character: 'ゼ', romaji: 'ze' },
    { character: 'ゾ', romaji: 'zo' },
    
    // D sounds (voiced T)
    { character: 'ダ', romaji: 'da' },
    { character: 'ヂ', romaji: 'ji' },
    { character: 'ヅ', romaji: 'zu' },
    { character: 'デ', romaji: 'de' },
    { character: 'ド', romaji: 'do' },
    
    // B sounds (voiced H)
    { character: 'バ', romaji: 'ba' },
    { character: 'ビ', romaji: 'bi' },
    { character: 'ブ', romaji: 'bu' },
    { character: 'ベ', romaji: 'be' },
    { character: 'ボ', romaji: 'bo' },
    
    // P sounds (semi-voiced H)
    { character: 'パ', romaji: 'pa' },
    { character: 'ピ', romaji: 'pi' },
    { character: 'プ', romaji: 'pu' },
    { character: 'ペ', romaji: 'pe' },
    { character: 'ポ', romaji: 'po' },
  ],
  
  youon: [
    // K + Y sounds
    { character: 'キャ', romaji: 'kya' },
    { character: 'キュ', romaji: 'kyu' },
    { character: 'キョ', romaji: 'kyo' },
    
    // G + Y sounds
    { character: 'ギャ', romaji: 'gya' },
    { character: 'ギュ', romaji: 'gyu' },
    { character: 'ギョ', romaji: 'gyo' },
    
    // S + Y sounds
    { character: 'シャ', romaji: 'sha' },
    { character: 'シュ', romaji: 'shu' },
    { character: 'ショ', romaji: 'sho' },
    
    // J sounds (Z + Y)
    { character: 'ジャ', romaji: 'ja' },
    { character: 'ジュ', romaji: 'ju' },
    { character: 'ジョ', romaji: 'jo' },
    
    // CH sounds (T + Y)
    { character: 'チャ', romaji: 'cha' },
    { character: 'チュ', romaji: 'chu' },
    { character: 'チョ', romaji: 'cho' },
    
    // N + Y sounds
    { character: 'ニャ', romaji: 'nya' },
    { character: 'ニュ', romaji: 'nyu' },
    { character: 'ニョ', romaji: 'nyo' },
    
    // H + Y sounds
    { character: 'ヒャ', romaji: 'hya' },
    { character: 'ヒュ', romaji: 'hyu' },
    { character: 'ヒョ', romaji: 'hyo' },
    
    // B + Y sounds
    { character: 'ビャ', romaji: 'bya' },
    { character: 'ビュ', romaji: 'byu' },
    { character: 'ビョ', romaji: 'byo' },
    
    // P + Y sounds
    { character: 'ピャ', romaji: 'pya' },
    { character: 'ピュ', romaji: 'pyu' },
    { character: 'ピョ', romaji: 'pyo' },
    
    // M + Y sounds
    { character: 'ミャ', romaji: 'mya' },
    { character: 'ミュ', romaji: 'myu' },
    { character: 'ミョ', romaji: 'myo' },
    
    // R + Y sounds
    { character: 'リャ', romaji: 'rya' },
    { character: 'リュ', romaji: 'ryu' },
    { character: 'リョ', romaji: 'ryo' },
  ],
  
  foreign: [
    // Extended vowels
    { character: 'ウィ', romaji: 'wi' },
    { character: 'ウェ', romaji: 'we' },
    { character: 'ウォ', romaji: 'wo' },
    
    // T sounds
    { character: 'ティ', romaji: 'ti' },
    { character: 'ディ', romaji: 'di' },
    { character: 'ツァ', romaji: 'tsa' },
    { character: 'ツェ', romaji: 'tse' },
    { character: 'ツォ', romaji: 'tso' },
    
    // CH sounds
    { character: 'チェ', romaji: 'che' },
    
    // F sounds
    { character: 'ファ', romaji: 'fa' },
    { character: 'フィ', romaji: 'fi' },
    { character: 'フェ', romaji: 'fe' },
    { character: 'フォ', romaji: 'fo' },
    { character: 'フュ', romaji: 'fyu' },
    
    // V sounds
    { character: 'ヴ', romaji: 'vu' },
    
    // J sounds
    { character: 'ジェ', romaji: 'je' },
  ],
}; 