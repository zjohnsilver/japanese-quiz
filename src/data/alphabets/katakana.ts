export type CharacterData = {
  character: string;
  romaji: string;
};

export type SoundGroup = {
  name: string;
  characters: CharacterData[];
};

export type KatakanaAlphabetData = {
  basic: SoundGroup[];
  dakuten: SoundGroup[];
  youon: SoundGroup[];
  foreign: SoundGroup[];
};

export const katakanaAlphabet: KatakanaAlphabetData = {
  basic: [
    {
      name: '',
      characters: [
        { character: 'ア', romaji: 'a' },
        { character: 'イ', romaji: 'i' },
        { character: 'ウ', romaji: 'u' },
        { character: 'エ', romaji: 'e' },
        { character: 'オ', romaji: 'o' },
        { character: 'ン', romaji: 'n' },
      ]
    },
    {
      name: 'k',
      characters: [
        { character: 'カ', romaji: 'ka' },
        { character: 'キ', romaji: 'ki' },
        { character: 'ク', romaji: 'ku' },
        { character: 'ケ', romaji: 'ke' },
        { character: 'コ', romaji: 'ko' },
      ]
    },
    {
      name: 's',
      characters: [
        { character: 'サ', romaji: 'sa' },
        { character: 'シ', romaji: 'shi' },
        { character: 'ス', romaji: 'su' },
        { character: 'セ', romaji: 'se' },
        { character: 'ソ', romaji: 'so' },
      ]
    },
    {
      name: 't',
      characters: [
        { character: 'タ', romaji: 'ta' },
        { character: 'チ', romaji: 'chi' },
        { character: 'ツ', romaji: 'tsu' },
        { character: 'テ', romaji: 'te' },
        { character: 'ト', romaji: 'to' },
      ]
    },
    {
      name: 'n',
      characters: [
        { character: 'ナ', romaji: 'na' },
        { character: 'ニ', romaji: 'ni' },
        { character: 'ヌ', romaji: 'nu' },
        { character: 'ネ', romaji: 'ne' },
        { character: 'ノ', romaji: 'no' },
      ]
    },
    {
      name: 'h',
      characters: [
        { character: 'ハ', romaji: 'ha' },
        { character: 'ヒ', romaji: 'hi' },
        { character: 'フ', romaji: 'fu' },
        { character: 'ヘ', romaji: 'he' },
        { character: 'ホ', romaji: 'ho' },
      ]
    },
    {
      name: 'm',
      characters: [
        { character: 'マ', romaji: 'ma' },
        { character: 'ミ', romaji: 'mi' },
        { character: 'ム', romaji: 'mu' },
        { character: 'メ', romaji: 'me' },
        { character: 'モ', romaji: 'mo' },
      ]
    },
    {
      name: 'y',
      characters: [
        { character: 'ヤ', romaji: 'ya' },
        { character: 'ユ', romaji: 'yu' },
        { character: 'ヨ', romaji: 'yo' },
      ]
    },
    {
      name: 'r',
      characters: [
        { character: 'ラ', romaji: 'ra' },
        { character: 'リ', romaji: 'ri' },
        { character: 'ル', romaji: 'ru' },
        { character: 'レ', romaji: 're' },
        { character: 'ロ', romaji: 'ro' },
      ]
    },
    {
      name: 'w',
      characters: [
        { character: 'ワ', romaji: 'wa' },
        { character: 'ヲ', romaji: 'wo' },
      ]
    },
  ],
  
  dakuten: [
    {
      name: 'g',
      characters: [
        { character: 'ガ', romaji: 'ga' },
        { character: 'ギ', romaji: 'gi' },
        { character: 'グ', romaji: 'gu' },
        { character: 'ゲ', romaji: 'ge' },
        { character: 'ゴ', romaji: 'go' },
      ]
    },
    {
      name: 'z',
      characters: [
        { character: 'ザ', romaji: 'za' },
        { character: 'ジ', romaji: 'ji' },
        { character: 'ズ', romaji: 'zu' },
        { character: 'ゼ', romaji: 'ze' },
        { character: 'ゾ', romaji: 'zo' },
      ]
    },
    {
      name: 'd',
      characters: [
        { character: 'ダ', romaji: 'da' },
        { character: 'ヂ', romaji: 'ji' },
        { character: 'ヅ', romaji: 'zu' },
        { character: 'デ', romaji: 'de' },
        { character: 'ド', romaji: 'do' },
      ]
    },
    {
      name: 'b',
      characters: [
        { character: 'バ', romaji: 'ba' },
        { character: 'ビ', romaji: 'bi' },
        { character: 'ブ', romaji: 'bu' },
        { character: 'ベ', romaji: 'be' },
        { character: 'ボ', romaji: 'bo' },
      ]
    },
    {
      name: 'p',
      characters: [
        { character: 'パ', romaji: 'pa' },
        { character: 'ピ', romaji: 'pi' },
        { character: 'プ', romaji: 'pu' },
        { character: 'ペ', romaji: 'pe' },
        { character: 'ポ', romaji: 'po' },
      ]
    },
  ],
  
  youon: [
    {
      name: 'ky',
      characters: [
        { character: 'キャ', romaji: 'kya' },
        { character: 'キュ', romaji: 'kyu' },
        { character: 'キョ', romaji: 'kyo' },
      ]
    },
    {
      name: 'gy',
      characters: [
        { character: 'ギャ', romaji: 'gya' },
        { character: 'ギュ', romaji: 'gyu' },
        { character: 'ギョ', romaji: 'gyo' },
      ]
    },
    {
      name: 'sh',
      characters: [
        { character: 'シャ', romaji: 'sha' },
        { character: 'シュ', romaji: 'shu' },
        { character: 'ショ', romaji: 'sho' },
      ]
    },
    {
      name: 'j',
      characters: [
        { character: 'ジャ', romaji: 'ja' },
        { character: 'ジュ', romaji: 'ju' },
        { character: 'ジョ', romaji: 'jo' },
      ]
    },
    {
      name: 'ch',
      characters: [
        { character: 'チャ', romaji: 'cha' },
        { character: 'チュ', romaji: 'chu' },
        { character: 'チョ', romaji: 'cho' },
      ]
    },
    {
      name: 'ny',
      characters: [
        { character: 'ニャ', romaji: 'nya' },
        { character: 'ニュ', romaji: 'nyu' },
        { character: 'ニョ', romaji: 'nyo' },
      ]
    },
    {
      name: 'hy',
      characters: [
        { character: 'ヒャ', romaji: 'hya' },
        { character: 'ヒュ', romaji: 'hyu' },
        { character: 'ヒョ', romaji: 'hyo' },
      ]
    },
    {
      name: 'by',
      characters: [
        { character: 'ビャ', romaji: 'bya' },
        { character: 'ビュ', romaji: 'byu' },
        { character: 'ビョ', romaji: 'byo' },
      ]
    },
    {
      name: 'py',
      characters: [
        { character: 'ピャ', romaji: 'pya' },
        { character: 'ピュ', romaji: 'pyu' },
        { character: 'ピョ', romaji: 'pyo' },
      ]
    },
    {
      name: 'my',
      characters: [
        { character: 'ミャ', romaji: 'mya' },
        { character: 'ミュ', romaji: 'myu' },
        { character: 'ミョ', romaji: 'myo' },
      ]
    },
    {
      name: 'ry',
      characters: [
        { character: 'リャ', romaji: 'rya' },
        { character: 'リュ', romaji: 'ryu' },
        { character: 'リョ', romaji: 'ryo' },
      ]
    },
  ],
  
  foreign: [
    {
      name: 'extended',
      characters: [
        { character: 'ウィ', romaji: 'wi' },
        { character: 'ウェ', romaji: 'we' },
        { character: 'ウォ', romaji: 'wo' },
        { character: 'ティ', romaji: 'ti' },
        { character: 'ディ', romaji: 'di' },
        { character: 'ツァ', romaji: 'tsa' },
        { character: 'ツェ', romaji: 'tse' },
        { character: 'ツォ', romaji: 'tso' },
        { character: 'チェ', romaji: 'che' },
        { character: 'ファ', romaji: 'fa' },
        { character: 'フィ', romaji: 'fi' },
        { character: 'フェ', romaji: 'fe' },
        { character: 'フォ', romaji: 'fo' },
        { character: 'フュ', romaji: 'fyu' },
        { character: 'ヴ', romaji: 'vu' },
        { character: 'ジェ', romaji: 'je' },
      ]
    },
  ],
}; 