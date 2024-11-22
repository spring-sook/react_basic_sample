import { useEffect, useRef, useState } from "react";

const InnerValueKeep = () => {
  const myButtonRef = useRef(null); // 특정한 DOM의 위치를 가리키기 위해서 사용
  // 특정 DOM 따라갈때 : 예를 들어, focus를 이동하거나.. 그럴때

  useEffect(() => {
    if (myButtonRef.current) {
      // myButton에 값이 있으면! current는 상태값이 있어야되기 때문에..! 없으면 값이 사라짐(?)
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);

  // 컴포넌트 내부 변수값 유지
  //const count = useRef(0); // count 초기값이 0이고, count값을 가져오려면 count.current로 해야됨
  let count = 0; // 동작은 제대로 함. 렌더링이 일어나면 count 유지가 안됨
  const [state, setState] = useState(false);

  const handleClick = () => {
    // count.current += 1;
    // // 특정한 current 필드 밑에 값을 넣어놨기 때문에 렌더링돼도 값이 사라지지 않음
    // // count말고 let을 쓰면.. 렌더링 될때마다 초기화됨(?)
    // alert(`클릭 횟수 : ${count.current}`);
    count += 1;
    alert(`클릭 횟수 : ${count}`);
    setState(!state); // 이렇게 하면 렌더링이 되니까 count값이 유지가 안됨
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        초기 상태
      </button>
    </>
  );
};
export default InnerValueKeep;
