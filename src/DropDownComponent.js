import { useState } from "react";

// select 요소와 option 요소를 사용하여 드롭다운 메뉴 구현
const DropDownComponent = () => {
  const [selectValue, setSelectValue] = useState("");
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  const fruits = [
    {
      value: "apple",
      text: "사과",
    },
    {
      value: "banana",
      text: "바나나",
    },
    {
      value: "grape",
      text: "포도",
    },
    {
      value: "watermelon",
      text: "수박",
    },
  ];

  return (
    <>
      <h1>드롭다운 예제</h1>
      <select value={selectValue} onChange={handleChange}>
        {/* value값을 넣는것은 상태 관리를 useState한테 위임하겠다는 것 */}
        {/* value값을 안넣으면 이벤트 핸들링을 HTML이 함 */}
        <option value="" disabled>
          과일을 선택하세요
        </option>
        {/*value값이 apple로 바뀌면서 select에 value값으로 apple이 들어가고 handleChange*/}
        {/* <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option> */}
        <option value={fruits[0].value}>{fruits[0].text}</option>
        <option value={fruits[1].value}>{fruits[1].text}</option>
        <option value={fruits[2].value}>{fruits[2].text}</option>
        <option value={fruits[3].value}>{fruits[3].text}</option>
      </select>
      <p>선택된 과일 : {selectValue}</p>
    </>
  );
};
export default DropDownComponent;
