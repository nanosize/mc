# MC:Education 1.21 用 ひらがな拡張（ローカライズ最小デモ）

- MakeCode 拡張の **ローカライズ仕様**（`_locales/<言語>/<ext>-strings.json`）に沿って、
  エディタ言語が **日本語**（`ja` または `ja-JP`）のとき、ブロックの表示を**ひらがな**にします。

## 使い方
1. このフォルダ一式を **GitHub の Public リポ**に置く（例: `https://github.com/あなた/mcedu-hiragana-ext`）。
2. Minecraft Education → **Code Builder**（C キー）→ **New Project**。
3. 左の **Advanced → Extensions** → 上部の検索欄に **GitHub URL** を貼って Enter。
   - 例: `https://github.com/あなた/mcedu-hiragana-ext#main`
4. 右上の **歯車 → Language** を **日本語**に。ツールボックスに **「ひらがな」**カテゴリが出ます。

## トラブルシュート
- **英語のまま** → 言語が **日本語**（`ja`/`ja-JP`）になっているか確認。
- **反映されない** → `pxt.json` の `version` を上げて commit → **新規プロジェクト**で再インポート。
- **見つからない** → リポが **Public**か、URLに `#main` を付けて貼る。

MIT License
