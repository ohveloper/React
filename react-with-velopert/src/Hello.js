import React from "react";

export default function Hello({ color = "aqua", name = "오늘", isSpecial }) {
  return (
    <div>
      <div style={{ color }}>
        {/* 2가지 방법이 있다 */}
        {/* {isSpecial && <b>*</b>} */}
        {isSpecial ? <b>*</b> : null}안녕하세요 {name}
      </div>
    </div>
  );
}

Hello.defaultProps = {
  // deault props 값을 정해줄수 있다.
  // name: "오늘",
};
