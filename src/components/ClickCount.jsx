/* 状態を管理するためのstate を生成するuseState を読み込む */
import { useState } from "react";

/* 副作用を管理するための useEffect を読み込む */
import { useEffect } from "react";

export const ClickCount = () =>{
  /* 状態を管理するstate 
   * state は、変数とそれを変更するset関数からなる
   * props が子コンポーネントへ値を受け渡すための仕組みだったのに対して、
   * state ではコンポーネント間で変更されうる値を共有できる
   * 
   * 宣言は以下
   * const [<state変数名>, <set関数名>] = useState(<初期値>)
   */
  const [count, setCount] = useState(0);

  /* count の値をインクリメントする関数 */
  const incrementCount = () => {
    setCount((prev) => prev + 1)
  }

  /* count の値をデクリメントする */
  const decrementCount = () => {
    setCount((prev) => prev - 1)
  }

  /* ボタンクリック時のイベントハンドラ
   * set 関数を使って値を増加する
   */
  const buttonClicked = () => {
    setCount(count + 1);
  }

  /* ちなみに、上記のbuttonClicked は現在のstateの値を複数回利用する場合うまく動かない
   * レンダリング完了まで、stateの値はあくまで定数で、再描画前の値を保持しているため
   * set 関数から元の値を変化させる処理を複数回行う場合、内部関数でstate の元の値を受け取って処理する
   * setCount((prev) => prev + 1)
   * 詳細は以下
   * https://zenn.dev/stin/articles/use-appropriate-api
   */
  const tripleCountUp = () => {
    /* 内部関数でstate の値を増やす関数を3回実行する */
    incrementCount()
    incrementCount()
    incrementCount()
  }

  const tripleCountDown = () => {
    decrementCount()
    decrementCount()
    decrementCount()
  }

  /* レンダリングのたびに、以下のconsoleが実行される
   * レンダリングは初期化のときに行われるほか、いくつかのタイミングで実行される
   * state が更新されるたびに行われるのが原則なので、
   * クリックカウントのボタンを押すたびに表示される
   */
  console.log("rendering...")

  /* 副作用を制御するuseEffect
   * ある値が変わった時に限り、ある処理を実行する といったことができる
   * useEffect(<実行する関数>, [依存する値(の配列)])
   * たとえばcount の値が更新されたときだけ処理したい内容を、レンダリングのたびに実行されるのは無駄になってしまう
   * 依存する値にcount を指定しておき、count が変更されたときだけ実行されるようにすれば、レンダリング時のコストを下げられる
   */
  useEffect(() => {console.log((`count update: ${count}`))}, [count])

  return (<>
    <h2>stateを使った状態管理</h2>
    <p>ボタンクリックのイベントハンドラ内でset関数を呼び出して値を増やす</p>
    <p><button onClick={buttonClicked}>Click me</button></p>
    <p>{count} times clicked</p>
    <p>
      <button onClick={tripleCountUp} style={{marginRight: "8px"}}>triple count up</button>
      <button onClick={tripleCountDown}>triple count down</button>
    </p>
    <p>↑state 変数自身に設定されている値をset関数内で利用する場合、内部で関数を使う↑</p>
    <p>{`setCount((prev) => { prevを使った処理 }`}</p>
  </>);
}
