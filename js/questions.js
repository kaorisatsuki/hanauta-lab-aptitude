// Hanauta Lab. 作業適性診断 質問データ
// 3軸 × 各4-5問 = 計13問
// axis: 'tempo' / 'connection' / 'joy'
// 各選択肢が示す傾向をvalueに記録

const QUESTIONS = [
  // ===== 軸1: tempo（おだやか⇔わくわく）4問 =====
  {
    id: 1,
    axis: 'tempo',
    text: 'お休みの日、心地よく感じるのはどちら？',
    options: [
      { text: '同じ場所で、ゆっくりお茶を飲む時間', value: 'odayaka' },
      { text: '気になっていた場所に出かけてみる時間', value: 'wakuwaku' }
    ]
  },
  {
    id: 2,
    axis: 'tempo',
    text: '新しいことを始めるとき、あなたは？',
    options: [
      { text: 'じっくり調べて、ゆっくり始めたい', value: 'odayaka' },
      { text: 'まずやってみて、走りながら覚えたい', value: 'wakuwaku' }
    ]
  },
  {
    id: 3,
    axis: 'tempo',
    text: '毎日のリズムで、しっくりくるのは？',
    options: [
      { text: 'いつもと同じ順番で、安心して過ごせる日', value: 'odayaka' },
      { text: '少しずつ違うことがある、刺激のある日', value: 'wakuwaku' }
    ]
  },
  {
    id: 4,
    axis: 'tempo',
    text: '部屋の模様替え、あなたなら？',
    options: [
      { text: 'お気に入りの配置をずっと大切にしたい', value: 'odayaka' },
      { text: '気分転換に、ときどき変えてみたい', value: 'wakuwaku' }
    ]
  },

  // ===== 軸2: connection（ひとり⇔みんな）5問 =====
  {
    id: 5,
    axis: 'connection',
    text: 'カフェに入ったとき、つい選ぶ席は？',
    options: [
      { text: '窓際や角の席で、ひとりの時間を楽しむ', value: 'hitori' },
      { text: 'にぎわいが感じられる、開けた席', value: 'minna' }
    ]
  },
  {
    id: 6,
    axis: 'connection',
    text: '疲れたとき、回復する方法は？',
    options: [
      { text: 'ひとりで静かに過ごす時間', value: 'hitori' },
      { text: '気の合う人とおしゃべりする時間', value: 'minna' }
    ]
  },
  {
    id: 7,
    axis: 'connection',
    text: '作業をするとき、心地よいのは？',
    options: [
      { text: '自分の世界に入って、集中できる空間', value: 'hitori' },
      { text: 'まわりに人がいて、気配を感じられる空間', value: 'minna' }
    ]
  },
  {
    id: 8,
    axis: 'connection',
    text: ' 初めての場所では？',
    options: [
      { text: 'まずは離れて様子を見たい', value: 'hitori' },
      { text: '誰かと一緒なら、すぐになじめる', value: 'minna' }
    ]
  },
  {
    id: 9,
    axis: 'connection',
    text: 'ランチタイム、しっくりくるのは？',
    options: [
      { text: 'ひとりで好きなものを、ゆっくり味わう', value: 'hitori' },
      { text: '誰かと一緒に、話しながら食べる', value: 'minna' }
    ]
  },

  // ===== 軸3: joy（かたち⇔きもち）4問 =====
  {
    id: 10,
    axis: 'joy',
    text: 'うれしい瞬間として、より心が動くのは？',
    options: [
      { text: '「できた！」と達成感を味わったとき', value: 'katachi' },
      { text: '「ありがとう」と言ってもらえたとき', value: 'kimochi' }
    ]
  },
  {
    id: 11,
    axis: 'joy',
    text: 'プレゼントを選ぶとき、大切にするのは？',
    options: [
      { text: 'モノとしての品質や、見た目の美しさ', value: 'katachi' },
      { text: '相手の気持ちに寄り添う、メッセージや想い', value: 'kimochi' }
    ]
  },
  {
    id: 12,
    axis: 'joy',
    text: '仕事で誇らしく感じるのは？',
    options: [
      { text: '形に残るものを、きちんと作り上げたとき', value: 'katachi' },
      { text: '誰かの役に立てた、と感じられたとき', value: 'kimochi' }
    ]
  },
  {
    id: 13,
    axis: 'joy',
    text: '一日の終わりに、心が満たされるのは？',
    options: [
      { text: '今日できたことを、振り返って数えるとき', value: 'katachi' },
      { text: '今日出会えた人の顔を、思い出すとき', value: 'kimochi' }
    ]
  }
];
