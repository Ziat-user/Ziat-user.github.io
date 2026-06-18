# 分割版メインページ

## 配置先

この zip の中身を GitHub Pages のルートに配置してください。

```text
/
├─ index.html
├─ css/
│  └─ main-page.css
└─ js/
   └─ main-page.js
```

既存の `./css/style.css` と `./js/main.js` はそのまま残して使う想定です。
不要なら `index.html` から該当の読み込み行を削除してください。

## サムネイルの貼り方

各カードの `.thumbnail` 内にあるコメントアウト済みの `<img>` を有効化して、画像パスを差し替えてください。

例：

```html
<img src="./simensoka/thumbnail.png" alt="四面楚歌のサムネイル">
```
