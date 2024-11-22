import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date()); // 처음에는 현재시간 한번 들어감

  useEffect(() => {
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []); // []: 의존성 배열이라고 하며, []빈 배열이면 마운트 시점을 의미
  // setInterval(() => setDate(new Date()), 1000); // 1초마다 한번씩 setDate
  // 종료하기 전까지 setInterval이 1초마다 계속 돌아서 함수가 무한 복제되는 문제가.. 좀 있음
  // state가 아닌 생명주기 관리가 필요함(생성되고 사라지는..) => useEffect

  return (
    <>
      <h1>현재 시간을 표시합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock;
