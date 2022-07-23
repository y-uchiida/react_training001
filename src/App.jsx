import {HelloFromReact} from './components/HelloFromReact'
import {FunctionInComponent} from './components/FunctionInComponent'
import {EventHandling} from './components/EventHandling'
import {SetCSSStyles} from './components/SetCSSStyles'

/* render に渡す関数を宣言、これをコンポーネントとして扱う */
/* export をつけて宣言することで、別ファイルから読み込むことができるようになる */
/* 要素を表示する関数 */
export const App = () => {

  return (
    <>
      <HelloFromReact />
      <FunctionInComponent />
      <EventHandling />
      <SetCSSStyles />
    </>
  );
};
