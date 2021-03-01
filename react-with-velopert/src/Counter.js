import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((prevNumber) => prevNumber + 1); // 함수형 업데이트, 최적화를 위해 사용하는것
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
