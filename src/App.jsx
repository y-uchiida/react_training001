/* render に渡す関数を宣言、これをコンポーネントとして扱う */
/* export をつけて宣言することで、別ファイルから読み込むことができるようになる */
/* 要素を表示する関数 */
export const App = () => {

  /* ボタンのクリックイベント用の関数を作成  */
  const onClickButton = () => {
    console.log("button clicked");
  }

  return (
    <>
      <h1>hello from React App!</h1>
      <p>src/App.js から読み込まれたApp() です</p>
      <p>JSXのルール上、最上位の要素を複数return することができない</p>
      <p>ルートになる要素がひとつだけならOKなので、&lt;&gt;&lt; /&gt; で囲む</p>

      {
        /* return の中では、 {} で囲むことでJavaScriptを記述することができる */
        console.log("message from App component")
        /* {} はひとつの式だけを扱うことができる。そのため、複数の式(というか、ステートメント)を
         * 記載するために使うセミコロンをつけるとエラーになる
         */
        // console.log("this is error"); /* <- セミコロンがついているので、これはエラー */
      }

      <h2>ブラウザイベントの処理</h2>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
