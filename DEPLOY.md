# デプロイ手順書

このサイトをGitHub Pagesで公開し、QRコードで配布する手順です。

---

## 1. ローカルで動作確認

ファイルを解凍して、`index.html` をブラウザで直接開けば動作確認できます。

Macなら以下のコマンドでも起動できます。

```bash
cd hanauta-aptitude-test
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` にアクセス。

---

## 2. GitHubリポジトリを作成

### 2-1. GitHubにログイン
https://github.com にログイン（既にアカウントがあるので大丈夫です）

### 2-2. 新しいリポジトリを作成
- 右上の「+」→「New repository」
- Repository name: `hanauta-lab-aptitude`
- Description: `Hanauta Lab. お仕事タイプ診断`
- **Public** を選択（GitHub Pagesの無料公開にはPublicが必要）
- 「Create repository」をクリック

---

## 3. ローカルからGitHubにプッシュ

ターミナルで以下を実行（プロジェクトフォルダ内で）

```bash
cd /Users/kirarela/Documents/scripts/hanauta-aptitude-test

git init
git add .
git commit -m "Initial commit: Hanauta Lab aptitude test"
git branch -M main
git remote add origin https://github.com/kaorisatsuki/hanauta-lab-aptitude.git
git push -u origin main
```

※ `kaorisatsuki` の部分は実際のGitHubユーザー名に置き換えてください。

---

## 4. GitHub Pagesを有効化

1. リポジトリのページで「Settings」タブをクリック
2. 左メニューの「Pages」をクリック
3. 「Source」で `Deploy from a branch` を選択
4. Branchで `main` / `/ (root)` を選択して「Save」
5. 数分待つと、上部に公開URLが表示されます

公開URL例：
```
https://kaorisatsuki.github.io/hanauta-lab-aptitude/
```

---

## 5. シェア用URLをコードに反映

公開URLが確定したら、`js/script.js` の3行目を更新します。

```javascript
const SITE_URL = 'https://kaorisatsuki.github.io/hanauta-lab-aptitude/';
```

変更後、再度コミット＆プッシュ。

```bash
git add js/script.js
git commit -m "Update site URL"
git push
```

---

## 6. QRコードを作成

公開URLから無料でQRコードを作成できます。

### 推奨ツール
- **QR Code Generator**: https://www.qr-code-generator.com/
- **The QR Code Generator**: https://www.the-qrcode-generator.com/

### 手順
1. 公開URL（例：`https://kaorisatsuki.github.io/hanauta-lab-aptitude/`）を入力
2. デザインを選択（色を Hanauta Lab.のブランドカラー `#7B9B7E` に変更可能）
3. 高解像度PNG（最低1000×1000px）でダウンロード

### サイズ別の用途
- **印刷用パンフレット**: 300dpi、最低3cm四方
- **SEE SEA PARK店頭POP**: 300dpi、最低5cm四方
- **Instagram投稿**: 1080×1080px PNG
- **名刺サイズ**: 300dpi、2cm四方

---

## 7. OGP画像の作成（推奨）

SNSでシェアされたときに表示される画像を作ります。

### 仕様
- サイズ：1200 × 630px
- ファイル名：`ogp.png`
- 配置先：`images/ogp.png`

### 推奨デザイン要素
- Hanauta Lab.ロゴ
- 「あなたに向いているお仕事タイプ診断」のテキスト
- 8つのタイプの絵文字（🌾🌿📦☕✨🎨🌻🌸）
- ブランドカラー（緑系）の背景

Canvaで「OGP画像 1200×630」のテンプレートから作成できます。

作成後、`images/ogp.png` として保存してプッシュ。

```bash
git add images/ogp.png
git commit -m "Add OGP image"
git push
```

---

## 8. 配布方法

### Instagram
- プロフィールのリンク欄またはストーリーズにURL掲載
- 「ハイライト」に固定すると常時アクセス可能
- リール動画でも紹介できます

### パンフレット
- QRコードを掲載（最低3cm四方を推奨）
- 「あなたに向いているお仕事タイプ診断はこちら」のキャッチコピーを添える

### LINE公式アカウント
- リッチメニューに診断ボタンを追加
- 友だち追加メッセージにURLを記載

### SEE SEA PARK店頭
- aoの店頭にQRコードPOPを設置
- 「Hanauta Lab.について知ろう」の案内とともに

---

## 9. 更新方法

質問やタイプ説明を修正したいとき：

1. 該当ファイルを編集（`js/questions.js` または `js/types.js`）
2. ターミナルで以下を実行：

```bash
cd /Users/kirarela/Documents/scripts/hanauta-aptitude-test
git add .
git commit -m "Update questions/types"
git push
```

3〜5分で公開サイトに反映されます。

---

## 10. アクセス解析（オプション）

利用状況を知りたい場合、Google Analyticsを追加できます。

### 手順
1. https://analytics.google.com でプロパティ作成
2. 測定ID（`G-XXXXXXXXXX`）を取得
3. `index.html` の `<head>` 内に以下を追加：

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

これで「どのページが何回見られたか」「どのタイプが多いか」が分かります。

---

## 困ったら

- GitHubのコマンドが分からない → Claude Codeに「このフォルダをGitHubにプッシュしたい」と相談
- 公開されない → リポジトリのSettings→Pagesでステータス確認
- 質問やタイプを増やしたい → 各JSファイルを編集すればOK

完成、お疲れさまでした🌸
