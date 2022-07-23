/* propsの利用
 * 呼び出し元のコンポーネントから値を受け取るための仕組みに、propsがある
 * 宣言したコンポーネント用の関数の引数に渡されてくる
 */
export const MessageFromProps = (props) => {
  console.log(props)

  const contentStyle = {
    color: props.color,
  };

  return (
    <>
      <h2>Props で受け取ったデータを使う</h2>
      <p style={contentStyle}>{props.message}</p>
    </>
  )
}
