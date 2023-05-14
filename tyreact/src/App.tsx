import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "./index";

function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.counter1.count}
      {꺼내온거.counter1.user}
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        버튼
      </button>
      <Profile name="kim"></Profile>
    </div>
  );
}
