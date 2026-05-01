export interface Activity {
  title: string;
  label: string;
  date: string;
  url?: string;
}

export const activities: Activity[] = [
  {
    title: 'crowdworks.jp 最大の Rails アプリで YJIT を有効化した話',
    label: '記事',
    date: '2026-02-20',
    url: 'https://engineer.crowdworks.jp/entry/we-have-enabled-yjit',
  },
  {
    title: '社会人エンジニアが情報系の通信大学に通ってみた話',
    label: '記事',
    date: '2025-12-16',
    url: 'https://qiita.com/kotarou1192/items/354c55af2359fc7f132c',
  },
  {
    title:
      'インフラ専任者・チームがいない組織で開発ワークフローの継続的改善に挑戦してみた',
    label: '登壇',
    date: '2023-03-20',
    url: 'https://cloudnativedays.jp/cicd2023/talks/1780',
  },
];
