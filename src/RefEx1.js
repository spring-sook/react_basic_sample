// useRef는 면접에서도 많이 물어봄. useMemo, useRef 중요중요!

import { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null); // 참조하는 DOM요소가 없음

  const handleFocus = () => {
    inputRef.current.disabled = false; // current : 상태 값 유지
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" disabled ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};
export default CreateRef;
