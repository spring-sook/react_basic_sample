import styled from "styled-components";

// 앱은 화면을 그려주는 리소스(버튼, 인풋 박스 등등)가 이미 핸드폰에 설치돼 있음
// 주로 시스템의 기능을 많이 사용하는 경우는 앱이 유리
// 앱은 화면을 그려주는 요소가 html, css로 구성되어 있지 않음

// 웹은 배포가 자유로움
// 웹은 운영체제가 상관없음. iOS, 안드로이드 동시 개발 시 개발 부담이 적음

const DivBox = styled.div`
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  background-color: salmon;
  color: white;
  font-size: 1.4em;
`;

const data = [
  // 배열 안에
  {
    // 객체
    id: 100,
    userName: "천지훈",
    email: "1000won@gmail.com",
  },
  {
    id: 200,
    userName: "백마리",
    email: "2000won@gmail.com",
  },
  {
    id: 300,
    userName: "서민혁",
    email: "3000won@gmail.com",
  },
];

const User = ({ user }) => {
  // ()안에 props를 주면 props.user.id 이런식으로 해줘야됨
  return (
    <DivBox>
      <p>ID : {user.id}</p>
      <p>이름 : {user.userName}</p>
      <p>이메일 : {user.email}</p>
    </DivBox>
  );
};
const UserList = () => {
  // 관례상 파일명이랑 컴포넌트 명을 맞춤
  return (
    <>
      {/* <User user={data[0]} />
      <User user={data[1]} />
      <User user={data[2]} /> */}
      {/* {data && data.map((user) => <User key={user.id} user={user} />)} */}
      {data && data.map((user, index) => <User key={index} user={user} />)}
    </>
  );
};

// const UserList = () => {
//   return (
//     <>
//       <div>
//         <p>ID : {data[0].id}</p>
//         <p>이름 : {data[0].userName}</p>
//         <p>이메일 : {data[0].email}</p>
//       </div>
//       <div>
//         <p>ID : {data[1].id}</p>
//         <p>이름 : {data[1].userName}</p>
//         <p>이메일 : {data[1].email}</p>
//       </div>
//       <div>
//         <p>ID : {data[2].id}</p>
//         <p>이름 : {data[2].userName}</p>
//         <p>이메일 : {data[2].email}</p>
//       </div>
//     </>
//   );
// };
export default UserList;
