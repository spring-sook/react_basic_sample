import { useCallback, useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // const onChange = (e) => {
  //   setNumber(e.target.value); // input창으로 들어오기 때문에 문자열임
  // };
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number)); // concat 하는 이유 : 불변성
  //   setList(nextList); // 새로 만들어진 배열로 상태 변경
  //   setNumber(""); // 입력창 비우기 위해
  // };
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); // concat 하는 이유 : 불변성
    setList(nextList); // 새로 만들어진 배열로 상태 변경
    setNumber(""); // 입력창 비우기 위해
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);
  // 의존성 배열이 바뀌었을 때에만 호출해줌. 호출 안했을 땐, 이전 상태값을 유지함

  return (
    <>
      <input type="text" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list &&
          list.map(
            // 주로 중괄호쓰는데 여기 소괄호 쓰는 이유 : 소괄호가 자동 반환 기능이 있음. 중괄호는 return이 없으면 반환이 안될때가 있는듯..?
            (val, index) => <li key={index}>{val}</li>
          )}
      </ul>
      <p>평균값 : {avg}</p>
      {/* {getAverage(list)}로 넣으면 불필요하게 getAverage가 계속 실행됨 */}
    </>
  );
};

export default Average;
