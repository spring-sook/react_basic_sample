// [JSX 문법 이해하기]
// JSX에 표현식 포함하기 {변수나 연산식}
// 감싸인 요소로 표현하기 : 컴포넌트를 반환 시 하나의 태그이어야 함. <.>, </>
// <>  <=> <Fragment>
// 조건부 렌더링 : JSX문 내부에서는 조건부 연산자 사용 가능
// 3항 연산자 사용으로 참인 경우와 거짓인 경우에 화면을 다르게 구성할 수 있음
// 인라인 스타일링 : 문자열 형태가 아니고 객체 형태로 만들어야 함

const inlineStyle = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxSyntax = () => {
  const name = "리액트";
  const member = true;
  return (
    <>
      {name === "리액트" ? (
        <h1 style={inlineStyle}>리액트를 공부하겠습니다.</h1>
      ) : (
        <h1 style={inlineStyle}>자바스크립트를 공부하겠습니다.</h1>
      )}
      {member && (
        <>
          <h1>환영합니다. 고객님~</h1>
          <p>해당 메뉴를 자유롭게 사용하시면 됩니다.</p>
        </>
      )}
    </>
  );
};
export default JsxSyntax;
