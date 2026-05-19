# Claude Code 初期プロンプト

このフォルダをClaude Codeで開いて、最初に以下のプロンプトを送れば、すぐに動かして公開できます。

---

## プロンプト（コピペ用）

```
Hanauta Lab.の作業適性診断ウェブアプリのファイル一式を用意しました。
以下の手順で動作確認と公開作業をお願いします。

## やってほしいこと

### 1. ローカルで動作確認
- このフォルダでローカルサーバーを起動して、ブラウザで動作確認できる状態にしてください
- 13問すべて回答できるか、8タイプそれぞれの結果が出るかをテストしてほしいです

### 2. GitHubリポジトリへのプッシュ
- リポジトリ名: hanauta-lab-aptitude
- Public で作成
- mainブランチにプッシュしてください
- GitHub CLIを使ってよいです（gh repo create）

### 3. GitHub Pages の設定
- リポジトリのSettings → Pages で main / (root) を有効化してください
- 公開URLが確定したら、js/script.js の SITE_URL を実際のURLに更新して再プッシュ

### 4. 完了後に教えてほしいこと
- 公開URL
- QRコード生成のおすすめツール
- OGP画像（images/ogp.png）の作成依頼が必要かどうか

## ファイル構成

- index.html - メインHTML
- css/style.css - スタイル
- js/questions.js - 13問の質問データ
- js/types.js - 8タイプの定義
- js/script.js - メインロジック
- README.md, DEPLOY.md - ドキュメント

## 注意点

- LINE_URL は https://lin.ee/RCXr7yI のまま（変更不要）
- 各タイプの説明文や質問文は、本番で見て調整したい場合は後ほど依頼します
- 色や雰囲気は確認してから微調整したいので、まずはこのままデプロイしてOKです
```

---

## 公開後にやること

### A. テスト（自分のスマホ・PC両方で）
- [ ] 13問すべて回答できる
- [ ] 結果が表示される
- [ ] LINEボタンが公式LINEに飛ぶ
- [ ] X、LINEシェアが動く
- [ ] テキストコピーが動く
- [ ] 「もう一度診断する」で最初に戻る
- [ ] 結果URLを別のブラウザで開いて同じ結果が出る（シェアリンク機能）

### B. QRコード作成
- 推奨：https://www.qr-code-generator.com/
- Hanauta Lab.のブランドカラー（#7B9B7E）に変更
- パンフレット用と店頭POP用、SNS投稿用の3サイズを用意

### C. OGP画像作成（任意・推奨）
- Canvaで1200×630pxで作成
- ファイル名：ogp.png
- 配置：images/ogp.png

### D. 配布開始
- Instagram（@hanauta_lab）のプロフィール欄
- 3つ折りチラシの次回印刷時にQRコード追加
- LINE公式アカウントのリッチメニュー
- SEE SEA PARK店頭POP
- 利用説明会・見学時の手元資料

---

## 微調整したくなったら

質問やタイプ説明を変えたい場合：

1. `js/questions.js` または `js/types.js` を編集
2. Claude Codeに「これをコミット＆プッシュして」と依頼
3. 数分でサイトに反映される

色を変えたい：
- `css/style.css` の `:root` を編集

---

## トラブルシューティング

### Q: GitHub Pagesが反映されない
A: Settings → Pages でステータス確認。"Your site is live at..." と表示されればOK。
反映まで5〜10分かかることがあります。

### Q: スマホで見ると崩れる
A: index.htmlの `<meta name="viewport">` が正しく設定されているか確認。

### Q: シェアボタンが動かない
A: `js/script.js` の `SITE_URL` が正しい公開URLになっているか確認。
