// Hanauta Lab. 作業適性診断 メインロジック

// 公式LINEのリンク
const LINE_URL = 'https://lin.ee/RCXr7yI';
// シェア時の診断トップページURL（GitHub Pagesのフルパスを入れる）
const SITE_URL = 'https://kaorisatsuki.github.io/hanauta-lab-aptitude/';

// ===== 状態管理 =====
const state = {
  currentQuestion: 0,
  scores: {
    odayaka: 0, wakuwaku: 0,
    hitori: 0, minna: 0,
    katachi: 0, kimochi: 0
  }
};

// ===== 画面要素 =====
const screenIntro = document.getElementById('screen-intro');
const screenQuestion = document.getElementById('screen-question');
const screenResult = document.getElementById('screen-result');

// ===== 診断スタート =====
document.getElementById('start-btn').addEventListener('click', () => {
  state.currentQuestion = 0;
  state.scores = { odayaka: 0, wakuwaku: 0, hitori: 0, minna: 0, katachi: 0, kimochi: 0 };
  showQuestion();
});

// ===== 質問表示 =====
function showQuestion() {
  const q = QUESTIONS[state.currentQuestion];
  const progress = ((state.currentQuestion) / QUESTIONS.length) * 100;

  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('progress-text').textContent = `Question ${state.currentQuestion + 1} / ${QUESTIONS.length}`;
  document.getElementById('question-text').textContent = q.text;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.addEventListener('click', () => selectOption(opt.value));
    optionsContainer.appendChild(btn);
  });

  screenIntro.classList.remove('active');
  screenResult.classList.remove('active');
  screenQuestion.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 選択肢クリック =====
function selectOption(value) {
  state.scores[value]++;
  state.currentQuestion++;

  if (state.currentQuestion < QUESTIONS.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ===== 結果判定 =====
function calculateType() {
  const tempo = state.scores.odayaka >= state.scores.wakuwaku ? 'odayaka' : 'wakuwaku';
  const connection = state.scores.hitori >= state.scores.minna ? 'hitori' : 'minna';
  const joy = state.scores.katachi >= state.scores.kimochi ? 'katachi' : 'kimochi';
  return `${tempo}-${connection}-${joy}`;
}

// ===== 結果表示 =====
function showResult() {
  const typeId = calculateType();
  const type = TYPES[typeId];

  document.getElementById('result-emoji').textContent = type.emoji;
  document.getElementById('result-name').textContent = type.name;
  document.getElementById('result-name').style.color = type.color;
  document.getElementById('result-catchphrase').textContent = type.catchphrase;
  document.getElementById('result-description').textContent = type.description;

  const worksList = document.getElementById('result-works');
  worksList.innerHTML = '';
  type.works.forEach(w => {
    const li = document.createElement('li');
    li.textContent = w;
    worksList.appendChild(li);
  });

  document.getElementById('result-related').textContent = type.relatedWorks;
  document.getElementById('result-message').textContent = type.message;

  // シェア用テキスト
  const shareText = `Hanauta Lab.式お仕事タイプ診断、私は「${type.name}」でした🌸\n${type.catchphrase}\n\n働き方にも、似合うものがある。\nあなたも2分で診断してみませんか？`;

  // X(Twitter)シェア
  document.getElementById('share-x').href =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(SITE_URL)}&hashtags=お仕事タイプ診断,ハナウタラボ,自分のトリセツ`;

  // LINEシェア
  document.getElementById('share-line').href =
    `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(shareText)}`;

  // コピー用テキスト
  document.getElementById('copy-text').dataset.share = shareText + '\n' + SITE_URL;

  // 結果ページのURLに#typeIdを残す（共有時の参考用）
  history.replaceState(null, '', '#' + typeId);

  screenQuestion.classList.remove('active');
  screenIntro.classList.remove('active');
  screenResult.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== もう一度ボタン =====
document.getElementById('retry-btn').addEventListener('click', () => {
  history.replaceState(null, '', window.location.pathname);
  state.currentQuestion = 0;
  state.scores = { odayaka: 0, wakuwaku: 0, hitori: 0, minna: 0, katachi: 0, kimochi: 0 };
  screenResult.classList.remove('active');
  screenQuestion.classList.remove('active');
  screenIntro.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== テキストコピー =====
document.getElementById('copy-text').addEventListener('click', (e) => {
  const text = e.currentTarget.dataset.share;
  navigator.clipboard.writeText(text).then(() => {
    const btn = e.currentTarget;
    const originalText = btn.textContent;
    btn.textContent = 'コピーしました！';
    setTimeout(() => { btn.textContent = originalText; }, 2000);
  }).catch(() => {
    alert('コピーに失敗しました。手動でコピーしてください。\n\n' + text);
  });
});

// ===== LINEボタン =====
document.getElementById('line-btn').href = LINE_URL;

// ===== URL hashから直接結果表示（シェアリンク対応） =====
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.slice(1);
  if (hash && TYPES[hash]) {
    const type = TYPES[hash];
    document.getElementById('result-emoji').textContent = type.emoji;
    document.getElementById('result-name').textContent = type.name;
    document.getElementById('result-name').style.color = type.color;
    document.getElementById('result-catchphrase').textContent = type.catchphrase;
    document.getElementById('result-description').textContent = type.description;
    const worksList = document.getElementById('result-works');
    worksList.innerHTML = '';
    type.works.forEach(w => {
      const li = document.createElement('li');
      li.textContent = w;
      worksList.appendChild(li);
    });
    document.getElementById('result-related').textContent = type.relatedWorks;
    document.getElementById('result-message').textContent = type.message;

    const shareText = `Hanauta Lab.式お仕事タイプ診断、私は「${type.name}」でした🌸\n${type.catchphrase}\n\n働き方にも、似合うものがある。\nあなたも2分で診断してみませんか？`;
    document.getElementById('share-x').href =
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(SITE_URL)}&hashtags=お仕事タイプ診断,ハナウタラボ,自分のトリセツ`;
    document.getElementById('share-line').href =
      `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent(shareText)}`;
    document.getElementById('copy-text').dataset.share = shareText + '\n' + SITE_URL;

    screenIntro.classList.remove('active');
    screenResult.classList.add('active');
  }
});
