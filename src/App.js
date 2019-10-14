import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
/**
 * 모듈을 import 할때 {} 없이 import A로 불러온다면 해당 모듈에서 export default A로 export 했기 때문이고
 * {}안에 import {A}로 불러온다면 해당 모듈에서 export {A}로 export 했기 때문임.
 */
import Main from './component/main/Main';
class App extends React.Component{
  render(){
    return (
      <Router>
        <Main/>
      </Router>
    );
  }
}
export default App;
