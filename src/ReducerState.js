// 복잡한 로직을 가진 상태를 관리하는 데 사용

import { useReducer } from "react";

const reducer = (state, action) => {
  // state는 안넣어줘도 자동으로 들어감
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const ReducerCnt = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <p>현재 카운터 값은 {state.value}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
    </>
  );
};
export default ReducerCnt;
