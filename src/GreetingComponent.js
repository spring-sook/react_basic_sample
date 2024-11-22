import "./App.css";

const member = {
  name: "곰돌이사육사",
  job: "Developer",
  addr: "경기도 수원시",
  gender: "남성",
};

const getGreeting = (user) => {
  return user ? <h1>환영합니다. {user}님.</h1> : <h1>환영합니다. 방문자님.</h1>;
};

// class 선택자는 class가 아니고 className으로 변경됨
// 태그는 닫힘 태그여야 함
const GreetingComponent = () => {
  return (
    // javascript에 이미 class라는 예약어가 있기 때문에 className이라고 써야됨
    <div className="App">
      <p className="title-name">제 이름은 {member.name}</p>
      <p className="title-name">직업은 {member.job}</p>
      <p className="title-name">주소는 {member.addr}</p>
      <p className="title-name">성별은 {member.gender}</p>
      <p>{getGreeting(member.name)}</p>
      <hr />
    </div>
  );
};

export default GreetingComponent;
