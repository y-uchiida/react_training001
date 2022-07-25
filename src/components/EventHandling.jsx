import React from 'react'

export const EventHandling = () => {
  /* ボタンのクリックイベント用の関数を作成  */
  const onClickButton = () => {
    console.log("button clicked");
  };
  return (
    <>
      <h2>ブラウザイベントの処理</h2>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
