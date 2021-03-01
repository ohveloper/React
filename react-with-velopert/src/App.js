import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

export default function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    { uid: 1, username: "ohvel", email: "ohvel@gmail.com", active: true },
    { uid: 2, username: "shay", email: "shay@gmail.com" },
    { uid: 3, username: "neul", email: "neul@gmail.com" },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      uid: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]); // spead 연산자 방법
    setUsers(users.concat(user)); // concat 으로
    setInputs({
      username: "",
      email: "",
    });
    console.log(nextId.current);
    nextId.current += 1;
  };
  const onRemove = (uid) => {
    setUsers(users.filter((user) => user.uid !== uid));
  };
  return (
    <>
      <Wrapper>
        <Hello isSpecial={true} />
        <Hello name="react" color="red" isSpecial={true} />
      </Wrapper>
      <Counter />
      <InputSample />
      <UserList users={users} onRemove={onRemove} />
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    </>
  );
}

//? JSX 규칙
// function App() {
//   const name = "react";
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: 24, //? 단위를 안적으면 px이 기본값
//     padding: "1rem", //? 단위를정하고 싶으면 문자열로 표현
//   };
//   return (
//     <>
//       {/* 주석을 작성하는 방법 */}
//       <div style={style}>{name}</div>
//       <div className="gray-box"></div>
//       <Hello // 주석작성가능     // 주석을 작성할수 있다
//       />
//     </>
//   );
// }

// export default App;

//? 규칙1: 테그를 꼭 닫아줘야 한다.
//? 규칙2: 2개이상의 테그는 꼭 하나의 테그로 감싸있어야 한다
//? 규칙3: JSX 내부에서 js 문법을 사용하고 싶을떈 중괄호{}로 감싸서 사용한다
//? 규칙4: css style 을 넣어주고 싶을때는 객체로 만들어서 쓴다
//? 규칙5: 주석을 작성할떈 중괄호 안에 넣어서 한다, 테그안에도 주석을 달수 있다
