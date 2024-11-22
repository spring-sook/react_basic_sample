import { useState } from "react";

const RadioButton = () => {
  const [selectedValue, setSelectedValue] = useState("apple");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <label htmlFor="apple">
        {/* name은 radio 버튼 그룹으로 묶어주려고, id는 htmlFor랑 상호작용 하려고 */}
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
        사과
      </label>
      <br />
      <label htmlFor="banana">
        {/* name은 radio 버튼 그룹으로 묶어주려고, id는 htmlFor랑 상호작용 하려고 */}
        <input
          type="radio"
          name="fruits"
          id="banana"
          value="banana"
          onChange={handleChange}
        />
        바나나
      </label>
      <br />
      <label htmlFor="strawberry">
        {/* name은 radio 버튼 그룹으로 묶어주려고, id는 htmlFor랑 상호작용 하려고 */}
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
        딸기
      </label>
      <br />
      <p>선택된 과일 : {selectedValue}</p>
    </>
  );
};
export default RadioButton;
