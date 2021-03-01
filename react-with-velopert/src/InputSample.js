import React, { useState, useRef } from "react";

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onClear = () => {
    setInputs({
      ...inputs,
      name: "",
      nickname: "",
    });
    // nameInput.current.focus();
  };
  const { name, nickname } = inputs;
  return (
    <div>
      <form autoComplete="off">
        <input name="name" placeholder="name" onChange={onChange} value={name} ref={nameInput}></input>
        <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname}></input>
        <button onClick={onClear}>clear</button>
      </form>
      <p>이름: {name}</p>
      <p>닉네임: {nickname}</p>
    </div>
  );
}
