// 컴포넌트 : 리액트에서 UI를 구성하는 독립적인 모듈
// UI와 상태(State)를 가짐
// 대문자로 시작해야 함. 소문자로 시작하면 html 태그로 판단해버림.
// 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달할 때는 props로 전달해야 함
// props는 키워드 아님. 변수명처럼 사용 가능.
// 구조분해 또는 비구조화 할당
// const WelcomeProps = (props) => {
//   return (
//     <>
//       <h1>안녕하세요. {props.name}님.</h1>
//       <p>직업 : {props.job}</p>
//       <p>주소 : {props.addr}</p>
//       {/* <p>성인 여부 : {props.isAdult ? "성인입니다." : "미성년자입니다."}</p> */}
//       {props.isAdult ? <p>성인입니다.</p> : <p>미성년자입니다.</p>}
//     </>
//   );
// };
// const WelcomeProps = ({ name, job, addr, isAdult, info }) => {
//   return (
//     <>
//       <h1>안녕하세요. {name}님.</h1>
//       <p>직업 : {job}</p>
//       <p>주소 : {addr}</p>
//       {/* <p>성인 여부 : {props.isAdult ? "성인입니다." : "미성년자입니다."}</p> */}
//       {isAdult ? <p>성인입니다.</p> : <p>미성년자입니다.</p>}
//       <p>
//         정보 : {info.date} {info.product}
//       </p>
//     </>
//   );
// };
const WelcomeProps = (props) => {
  const { name, job, addr, isAdult, info } = props;
  return (
    <>
      <h1>안녕하세요. {name}님.</h1>
      <p>직업 : {job}</p>
      <p>주소 : {addr}</p>
      {/* <p>성인 여부 : {props.isAdult ? "성인입니다." : "미성년자입니다."}</p> */}
      {isAdult ? <p>성인입니다.</p> : <p>미성년자입니다.</p>}
      <p>
        정보 : {info.date} {info.product}
      </p>
    </>
  );
};

export default WelcomeProps;
