import { useState } from "react";

let a: string = "kim";

let 박스: JSX.Element = <div></div>;

function App() {
  let [user, setUser] = useState("park");

  return (
    <div className="App">
      <h4>안녕하세요</h4>
      <Profile name="me" />
    </div>
  );
}

function Profile(props: { name: string }): JSX.Element {
  return <div>{props.name} 프로필입니다.</div>;
}

export default App;
