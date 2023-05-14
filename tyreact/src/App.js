"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var a = "kim";
var 박스 = <div></div>;
function App() {
    var _a = (0, react_1.useState)("park"), user = _a[0], setUser = _a[1];
    return (<div className="App">
      <h4>안녕하세요</h4>
      <Profile name="me"/>
    </div>);
}
function Profile(props) {
    return <div>{props.name} 프로필입니다.</div>;
}
exports.default = App;
