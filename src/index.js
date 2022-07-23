/* レンダリングの機能などを持ったDOMのライブラリ？ */
import ReactDOM from 'react-dom/client';
import './index.css';


/* render に渡す関数を宣言、これをコンポーネントとして扱う */
/* 要素を表示する関数 */
const App = () => {
  return (
    <>
      <h1>hello from React App!</h1>
      <p>JSXのルール上、最上位の要素を複数return することができない</p>
      <p>ルートになる要素がひとつだけならOKなので、&lt;&gt;&lt; /&gt; で囲む</p>
    </>
  );
};

/* null を返す(何もしない)関数の場合、画面には何も表示されない */
// const App = () => {
//   return null;
// }

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

