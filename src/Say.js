import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  .enterClick {
    background-color: indianred;
  }
  .leaveClick {
    background-color: mediumaquamarine;
  }
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 130px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1.4em;
  background-color: ${(props) =>
    props.color || "black"}; // color값 없으면 black
  transition: all 0.1s ease-in;
  &:hover {
    color: #aaa;
    cursor: pointer;
  }
  &:active {
    transform: translate(1px, 1px) scale(0.98);
  }
`;

const Say = () => {
  const [message, setMessage] = useState(""); // message가 바뀌면 랜더링 하겠다. 초기값""
  const [value, setValue] = useState("black"); // 초기값 "black"
  // const onClickEnter = () => setMessage("안녕하세요~~"); // 함수
  // const onClickLeave = () => setMessage("안녕히 가세요~~"); // 함수
  const onClickMessage = (msg) => setMessage(msg);

  return (
    <Container>
      {/* <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button> */}
      <ButtonContainer>
        <Button
          className="enterClick"
          onClick={() => onClickMessage("안녕하세요.")}
        >
          입장
        </Button>
        <Button
          className="leaveClick"
          onClick={() => onClickMessage("안녕히가세요.")}
        >
          퇴장
        </Button>
      </ButtonContainer>
      <h1 style={{ color: value }}>{message}</h1>
      <ButtonContainer>
        {/* <button style={{ color: "red" }} onClick={() => setValue("red")}>
          빨간색
        </button>
        <button style={{ color: "green" }} onClick={() => setValue("green")}>
          초록색
        </button>
        <button style={{ color: "blue" }} onClick={() => setValue("blue")}>
          파란색
        </button> */}
        <Button color="red" onClick={() => setValue("red")}>
          RED
        </Button>
        <Button color="green" onClick={() => setValue("green")}>
          GREEN
        </Button>
        <Button color="blue" onClick={() => setValue("blue")}>
          BLUE
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Say;
