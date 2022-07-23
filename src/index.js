/* レンダリングの機能などを持ったDOMのライブラリ？ */
import ReactDOM from 'react-dom/client';
import './index.css';


/* render に渡す関数を宣言、これをコンポーネントとして扱う */
/* null を返す(何もしない)関数の場合、画面には何も表示されない */
const App = () => {
  return null;
}

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

