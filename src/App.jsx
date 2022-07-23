/* render に渡す関数を宣言、これをコンポーネントとして扱う */
/* export をつけて宣言することで、別ファイルから読み込むことができるようになる */
/* 要素を表示する関数 */
export const App = () => {
  return (
    <>
      <h1>hello from React App!</h1>
      <p>src/App.js から読み込まれたApp() です</p>
      <p>JSXのルール上、最上位の要素を複数return することができない</p>
      <p>ルートになる要素がひとつだけならOKなので、&lt;&gt;&lt; /&gt; で囲む</p>
    </>
  );
};
