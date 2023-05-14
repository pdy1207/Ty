"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
function App() {
    var 꺼내온거 = (0, react_redux_1.useSelector)(function (state) { return state; });
    var dispatch = (0, react_redux_1.useDispatch)();
    return (<div className="App">
      {꺼내온거.counter1.count}
      {꺼내온거.counter1.user}
      <button onClick={function () {
            dispatch({ type: "증가" });
        }}>
        버튼
      </button>
      <Profile name="kim"></Profile>
    </div>);
}
