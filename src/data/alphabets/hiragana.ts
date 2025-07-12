export type CharacterData = {
  character: string;
  romaji: string;
};

export type SoundGroup = {
  name: string;
  characters: CharacterData[];
};

export type AlphabetData = {
  basic: SoundGroup[];
  dakuten: SoundGroup[];
  youon: SoundGroup[];
};

export const hiraganaAlphabet: AlphabetData = {
  basic: [
    {
      name: '',
      characters: [
        { character: 'あ', romaji: 'a' },
        { character: 'い', romaji: 'i' },
        { character: 'う', romaji: 'u' },
        { character: 'え', romaji: 'e' },
        { character: 'お', romaji: 'o' },
        { character: 'ん', romaji: 'n' },
      ]
    },
    {
      name: 'k',
      characters: [
        { character: 'か', romaji: 'ka' },
        { character: 'き', romaji: 'ki' },
        { character: 'く', romaji: 'ku' },
        { character: 'け', romaji: 'ke' },
        { character: 'こ', romaji: 'ko' },
      ]
    },
    {
      name: 's',
      characters: [
        { character: 'さ', romaji: 'sa' },
        { character: 'し', romaji: 'shi' },
        { character: 'す', romaji: 'su' },
        { character: 'せ', romaji: 'se' },
        { character: 'そ', romaji: 'so' },
      ]
    },
    {
      name: 't',
      characters: [
        { character: 'た', romaji: 'ta' },
        { character: 'ち', romaji: 'chi' },
        { character: 'つ', romaji: 'tsu' },
        { character: 'て', romaji: 'te' },
        { character: 'と', romaji: 'to' },
      ]
    },
    {
      name: 'n',
      characters: [
        { character: 'な', romaji: 'na' },
        { character: 'に', romaji: 'ni' },
        { character: 'ぬ', romaji: 'nu' },
        { character: 'ね', romaji: 'ne' },
        { character: 'の', romaji: 'no' },
      ]
    },
    {
      name: 'h',
      characters: [
        { character: 'は', romaji: 'ha' },
        { character: 'ひ', romaji: 'hi' },
        { character: 'ふ', romaji: 'fu' },
        { character: 'へ', romaji: 'he' },
        { character: 'ほ', romaji: 'ho' },
      ]
    },
    {
      name: 'm',
      characters: [
        { character: 'ま', romaji: 'ma' },
        { character: 'み', romaji: 'mi' },
        { character: 'む', romaji: 'mu' },
        { character: 'め', romaji: 'me' },
        { character: 'も', romaji: 'mo' },
      ]
    },
    {
      name: 'y',
      characters: [
        { character: 'や', romaji: 'ya' },
        { character: 'ゆ', romaji: 'yu' },
        { character: 'よ', romaji: 'yo' },
      ]
    },
    {
      name: 'r',
      characters: [
        { character: 'ら', romaji: 'ra' },
        { character: 'り', romaji: 'ri' },
        { character: 'る', romaji: 'ru' },
        { character: 'れ', romaji: 're' },
        { character: 'ろ', romaji: 'ro' },
      ]
    },
    {
      name: 'w',
      characters: [
        { character: 'わ', romaji: 'wa' },
        { character: 'を', romaji: 'wo' },
      ]
    },
  ],
  
  dakuten: [
    {
      name: 'g',
      characters: [
        { character: 'が', romaji: 'ga' },
        { character: 'ぎ', romaji: 'gi' },
        { character: 'ぐ', romaji: 'gu' },
        { character: 'げ', romaji: 'ge' },
        { character: 'ご', romaji: 'go' },
      ]
    },
    {
      name: 'z',
      characters: [
        { character: 'ざ', romaji: 'za' },
        { character: 'じ', romaji: 'ji' },
        { character: 'ず', romaji: 'zu' },
        { character: 'ぜ', romaji: 'ze' },
        { character: 'ぞ', romaji: 'zo' },
      ]
    },
    {
      name: 'd',
      characters: [
        { character: 'だ', romaji: 'da' },
        { character: 'ぢ', romaji: 'ji' },
        { character: 'づ', romaji: 'zu' },
        { character: 'で', romaji: 'de' },
        { character: 'ど', romaji: 'do' },
      ]
    },
    {
      name: 'b',
      characters: [
        { character: 'ば', romaji: 'ba' },
        { character: 'び', romaji: 'bi' },
        { character: 'ぶ', romaji: 'bu' },
        { character: 'べ', romaji: 'be' },
        { character: 'ぼ', romaji: 'bo' },
      ]
    },
    {
      name: 'p',
      characters: [
        { character: 'ぱ', romaji: 'pa' },
        { character: 'ぴ', romaji: 'pi' },
        { character: 'ぷ', romaji: 'pu' },
        { character: 'ぺ', romaji: 'pe' },
        { character: 'ぽ', romaji: 'po' },
      ]
    },
  ],
  
  youon: [
    {
      name: 'ky',
      characters: [
        { character: 'きゃ', romaji: 'kya' },
        { character: 'きゅ', romaji: 'kyu' },
        { character: 'きょ', romaji: 'kyo' },
      ]
    },
    {
      name: 'gy',
      characters: [
        { character: 'ぎゃ', romaji: 'gya' },
        { character: 'ぎゅ', romaji: 'gyu' },
        { character: 'ぎょ', romaji: 'gyo' },
      ]
    },
    {
      name: 'sh',
      characters: [
        { character: 'しゃ', romaji: 'sha' },
        { character: 'しゅ', romaji: 'shu' },
        { character: 'しょ', romaji: 'sho' },
      ]
    },
    {
      name: 'j',
      characters: [
        { character: 'じゃ', romaji: 'ja' },
        { character: 'じゅ', romaji: 'ju' },
        { character: 'じょ', romaji: 'jo' },
      ]
    },
    {
      name: 'ch',
      characters: [
        { character: 'ちゃ', romaji: 'cha' },
        { character: 'ちゅ', romaji: 'chu' },
        { character: 'ちょ', romaji: 'cho' },
      ]
    },
    {
      name: 'ny',
      characters: [
        { character: 'にゃ', romaji: 'nya' },
        { character: 'にゅ', romaji: 'nyu' },
        { character: 'にょ', romaji: 'nyo' },
      ]
    },
    {
      name: 'hy',
      characters: [
        { character: 'ひゃ', romaji: 'hya' },
        { character: 'ひゅ', romaji: 'hyu' },
        { character: 'ひょ', romaji: 'hyo' },
      ]
    },
    {
      name: 'by',
      characters: [
        { character: 'びゃ', romaji: 'bya' },
        { character: 'びゅ', romaji: 'byu' },
        { character: 'びょ', romaji: 'byo' },
      ]
    },
    {
      name: 'py',
      characters: [
        { character: 'ぴゃ', romaji: 'pya' },
        { character: 'ぴゅ', romaji: 'pyu' },
        { character: 'ぴょ', romaji: 'pyo' },
      ]
    },
    {
      name: 'my',
      characters: [
        { character: 'みゃ', romaji: 'mya' },
        { character: 'みゅ', romaji: 'myu' },
        { character: 'みょ', romaji: 'myo' },
      ]
    },
    {
      name: 'ry',
      characters: [
        { character: 'りゃ', romaji: 'rya' },
        { character: 'りゅ', romaji: 'ryu' },
        { character: 'りょ', romaji: 'ryo' },
      ]
    },
  ],
}; 