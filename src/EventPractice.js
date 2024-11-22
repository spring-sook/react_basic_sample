import { useState } from "react";

const EventPractice = () => {
  // const [message, setMessage] = useState("안녕하세요");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const changeMsg = (e) => {
    // event의 e
    setMessage(e.target.value);
  };
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onClick = () => {
    alert(`${userName} : ${message}`);
    setUserName(""); // 입력창 비우기
    setMessage("");
  };
  // Enter Key가 입력되면 onClick() 호출
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        onChange={onChangeUserName}
        value={userName}
      />
      <input
        type="text"
        placeholder="아무거나 입력"
        // onChange={(e) => changeMsg(e)} // e를 명시적으로 표현하면 이렇게..!
        onChange={changeMsg} // onChange가 발생했을 때, 콜백으로 changeMsg가 실행
        value={message} // value값 안넣어도 되는데 넣어주는게 맞음.
        // value 안넣어주면 초기값이 처음에 input 안에는 출력이 안됨. 근데 h2에 입력받은 메세지에는 출력됨
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      {/* <h2>입력 받은 메세지 : {message}</h2> */}
    </>
  );
};

export default EventPractice;
