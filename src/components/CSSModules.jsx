/* CSS Module の読み込み
 * import classes from '<対応するCSSモジュールファイル>'
 * 実際にクラスを適用する場合は、classes.<クラス名>を記述する
 */
import classes from "./CSSModules.module.scss";

export const CSSModules = () => {
  return (
    <>
      <h2>CSS Modules</h2>
      <p>scss ファイルをインポートして、JSXから利用する</p>
      <p>sass パッケージをインストールする必要あり(それだけでOK)</p>
      <div className={classes.container}>
        {/* className={classes.<クラス名>} で、CSSモジュール内で
         * 記述したクラスを設定できる
         */}
        <p className={classes.title}>CSS Module です</p>
        <button className={classes.button}>ボタン</button>
      </div>
    </>
  );
};
