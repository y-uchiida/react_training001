export const StyledJsx = () => {
  return (
    <>
      <h2>Styled JSX</h2>
      <p>jsx ファイル内にstyle タグを直接記述する方法</p>
      <p>styled-jsx のパッケージをインストールしておく必要がある</p>
      <p>
        {"{` ... `}"}{" "}
        の間に記述するので、オブジェクト名称ではなくCSSプロパティ名をそのまま書ける
      </p>
      <p>既存のcssファイルを使いたい場合に便利そう</p>
      <div className="container">
        <p className="title">Styled JSX です</p>
        <button className="button">ボタン</button>
      </div>

      <style jsx>
        {/* <style jsx> `...` </style> の形式で、
         * jsx 内にcss スタイルを直接記述できる
         */}
        {`
				.container {
					border: solid 1px #aaa;
					border-radius: 20px;
					padding: 8px;
					margin: 8px;
					display: flex;
					justify-content: space-around;
					align-items: center;
				}
				
				.title {
					margin: 0;
					color: #aaa;
				}
				
				.button {
					background-color: #ddd;
					border: none;
					padding: 8px;
					border-radius: 8px;
				}
				button:hover{
					background-color: #aaa;
					color:#fff;
					cursor: pointer;
				}
				`}
      </style>
    </>
  );
};
