export type ListItem = string | {text: string; children: string[]};

export type Block =
  | {type: 'heading'; level: 1 | 2 | 3; text: string}
  | {type: 'list'; items: ListItem[]}
  | {type: 'paragraph'; text: string};

export const intro: Block[] = [
  {
    type: 'paragraph',
    text: '掲載内容は私自身の見解であり、必ずしも所属する企業や組織の立場、戦略、意見を代表するものではありません。',
  },
  {type: 'heading', level: 2, text: 'About'},
  {
    type: 'list',
    items: [
      'ソフトウェアエンジニア 2022/05/01 - 現在',
      '社会人大学生 2023/04/01 - 現在',
      '長崎出身 東京在住',
    ],
  },
  {type: 'heading', level: 2, text: 'ソシャゲ一覧'},
  {
    type: 'list',
    items: [
      {
        text: '継続中',
        children: ['エンドフィールド：ヤシロ#1095', 'NTE'],
      },
      {
        text: '休止中',
        children: [
          'アークナイツ：ヤシロ#3169',
          'トリッカル：Q800M90H',
          'NIKKE',
          'ウマ娘',
        ],
      },
    ],
  },
];
