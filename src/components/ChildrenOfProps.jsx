import React from 'react'

/* props children
 * 呼び出し元のコンポーネントが記述した子要素は、props のchildren プロパティに入っている
 */
export const ChildrenOfProps = (props) => {

  /* props から、分割代入で内容を受け取る 
   * いちいちprops.***と書かなくてよくなる
   * また、初期値の設定もできる
   */
  const {fontSize = "32px", children} = props

  const style = {
    fontSize /* 変数名とプロパティ名が同一の場合、省略表記が使える */
  }

	return (
		<>
      <h2>Props children</h2>
      <p>props.children を使うと、呼び出し元のコンポーネントで子要素として記述した内容が取得できる</p>
      <p>単純にテキストだけでもできるし、DOMを書くこともできる</p>
      {children}
      <div style={style}>props から受け取ったfontSizeの値を利用したdiv要素</div>
		</>
	)
}
