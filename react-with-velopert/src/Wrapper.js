import React from "react";

export default function Wrapper({ children }) {
  // 자식요소 보여주고 싶을때 칠드런 내려주기
  const style = {
    border: "2px solid black",
    padding: 16,
  };
  return <div style={style} children={children}></div>; //
}
