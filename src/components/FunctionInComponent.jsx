import React from 'react'

export const FunctionInComponent = () => {
  return (
    <>
      {
        /* return の中では、 {} で囲むことでJavaScriptを記述することができる */
        console.log("message from App component")
        /* {} はひとつの式だけを扱うことができる。そのため、複数の式(というか、ステートメント)を
         * 記載するために使うセミコロンをつけるとエラーになる
         */
        // console.log("this is error"); /* <- セミコロンがついているので、これはエラー */
      }
    </>
  );
};
