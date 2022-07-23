export const SetCSSStyles = () => {
  /* CSSスタイル用のオブジェクト */
  const contentStyle = {
    color: "darkgreen",
    backgroundColor: "lightgreen",
  };

  return (
    <>
      <h2>スタイル(CSS)の指定の基本 - 1</h2>
      <p>要素のstyle 属性に、JavaScriptのオブジェクトを渡すことで記載できる</p>
      <p>
        JavaScrpit のオブジェクトを渡すために、まず {}{" "}
        で囲み、そこにオブジェクトを書くので、2重ブラケットになる
      </p>
      <p>
        JavaSCript
        なので、ハイフンが使えない...ハイフンを含むCSSプロパティはキャメルケースに変えて記載する
      </p>
      <div
        style={{
          color: "#333",
          backgroundColor: "#ddd",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        style 属性を指定したdiv要素
      </div>

      <h2>スタイル(CSS)の指定の基本 - 2</h2>
      <p>
        style属性に直接オブジェクトを書くだけでなく、あらかじめ宣言したオブジェクトを渡すこともできる
      </p>
      <div style={contentStyle}>style 属性にオブジェクトを渡したdiv要素</div>
    </>
  );
};
