export const HelloFromReact = () => {
  return (
    <>
      <h1>hello from React App!</h1>
      <p>src/App.js から読み込まれたApp() です</p>
      <p>JSXのルール上、最上位の要素を複数return することができない</p>
      <p>ルートになる要素がひとつだけならOKなので、&lt;&gt;&lt; /&gt; で囲む</p>
    </>
  );
};
