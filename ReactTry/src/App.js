import React from "react";
import ReactDOM from "react-dom";
import {hot} from 'react-hot-loader'
const App = () => {
  return (
    <div>
      <p>React here!</p>
        <p>这是一个测试文件！真得是动态更新啊</p>
        <div>好棒啊</div>
    </div>
  );
};
export default hot(module)(App);
ReactDOM.render(<App />, document.getElementById("app"));