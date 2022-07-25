import React from 'react'

/* レンダリングの機能などを持ったDOMのライブラリ？ */
import ReactDOM from 'react-dom/client';

/* App 関数(コンポーネント)を、別ファイル(src/App.jsx)から読み込みする */
/* コンポーネントを切り出すことで、実装を分離することができる */
/* App.jsx では、export const App が宣言されている必要がある */
import {App} from "./App";

/* ReactDOM.createRoot(<html要素>)
 * React v18から導入された機能で、レンダリングの並行処理ができるようになる
 * v17 までと違っているので注意(v17 までの書き方もできるらしい)
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* React を画面に出力する
 * root.render(<renderするもの(コンポーネント)>)
 * Reactでは関数名を< />で囲むと、コンポーネントとして扱うことができる
 */
root.render(<App />);

