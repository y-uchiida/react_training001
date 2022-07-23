import {HelloFromReact} from './components/HelloFromReact'
import {FunctionInComponent} from './components/FunctionInComponent'
import {EventHandling} from './components/EventHandling'
import {SetCSSStyles} from './components/SetCSSStyles'
import {MessageFromProps} from './components/MessageFromProps'
import {ChildrenOfProps} from './components/ChildrenOfProps'

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

      {/* MessageFromProps は、color とmessage を受け取るので、属性として渡す */}
      <MessageFromProps color="blue" message="propsに記載したmessage 属性の内容です" />

      <ChildrenOfProps fontSize="24px">
        <div>親コンポーネント側で記述したdiv要素</div>
      </ChildrenOfProps>
    </>
  );
};
