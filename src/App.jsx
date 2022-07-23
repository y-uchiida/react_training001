/* render に渡す関数を宣言、これをコンポーネントとして扱う */
/* export をつけて宣言することで、別ファイルから読み込むことができるようになる */
/* 要素を表示する関数 */
export const App = () => {

  /* ボタンのクリックイベント用の関数を作成  */
  const onClickButton = () => {
    console.log("button clicked");
  }

  /* CSSスタイル用のオブジェクト */
  const contentStyle = {
    color: "darkgreen",
    backgroundColor: "lightgreen",
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

      <h2>スタイル(CSS)の指定の基本 - 1</h2>
      <p>要素のstyle 属性に、JavaScriptのオブジェクトを渡すことで記載できる</p>
      <p>JavaScrpit のオブジェクトを渡すために、まず {} で囲み、そこにオブジェクトを書くので、2重ブラケットになる</p>
      <p>JavaSCript なので、ハイフンが使えない...ハイフンを含むCSSプロパティはキャメルケースに変えて記載する</p>
      <div style={{color: "#333", backgroundColor: "#ddd", borderRadius: "8px", padding: "8px"}}>
        style 属性を指定したdiv要素
      </div>

      <h2>スタイル(CSS)の指定の基本 - 2</h2>
      <p>style属性に直接オブジェクトを書くだけでなく、あらかじめ宣言したオブジェクトを渡すこともできる</p>
      <div style={contentStyle}>
        style 属性にオブジェクトを渡したdiv要素
      </div>
    </>
  );
};
