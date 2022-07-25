# tailwindの導入がつらかった

## エラーがたくさん
書籍の内容に沿って`create-react-app` でプロジェクトを作成したが、tailwindの導入のところで苦労した  
eslintがエラー吐いたり、`node-sass` が非推奨なので `sass`(dartの実装のほう)を導入しなきゃいけなかったり、  
React の v17, v18 での変更があったりなどなど...  

あれこれ調べて、とりあえずエラーは解消させたものの、けっきょくTailwindが適用できるようにならなかった...

## 今後はvite 使った方がいいらしい
Tailwind の公式のインストール手順をみたところ、以下のように記載されている  
> Note that for new React projects, we highly recommend using Vite, Next.js, Remix, or Parcel instead of Create React App. They provide an equivalent or better developer experience but with more flexibility, giving you more control over how Tailwind and PostCSS are configured.  

https://tailwindcss.com/docs/guides/create-react-app  
次からはvite でプロジェクト作成することにしよう...
