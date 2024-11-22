import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgoldenrodyellow;
`;
const InputBox = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  input {
    width: 14%;
  }
`;
const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 95%;
  margin-bottom: 30px;
  th,
  td {
    border: 1px solid #bbb;
    text-align: center;
    padding: 5px 0;
  }
  th {
    background-color: greenyellow;
  }
  button {
    border: none;
    background-color: lightgoldenrodyellow;
    cursor: pointer;
    font-size: 14px;
  }
`;

const EmployeeTable = () => {
  const [employeeInfo, setEmployeeInfo] = useState(() => {
    const storedInfo = localStorage.getItem("employeeInfo");
    return storedInfo ? JSON.parse(storedInfo) : [];
  });

  useEffect(() => {
    localStorage.setItem("employeeInfo", JSON.stringify(employeeInfo));
  }, [employeeInfo]);

  const [inputName, setInputName] = useState("");
  const [inputPosition, setInputPosition] = useState("");
  const [inputCompany, setInputCompany] = useState("");
  const [inputAddr, setInputAddr] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const onNameChange = (e) => setInputName(e.target.value);
  const onPositionChange = (e) => setInputPosition(e.target.value);
  const onCompanyChange = (e) => setInputCompany(e.target.value);
  const onAddrChange = (e) => setInputAddr(e.target.value);
  const onEmailChange = (e) => setInputEmail(e.target.value);
  const onPhoneChange = (e) => setInputPhone(e.target.value);

  const onAddClick = () => {
    const newInfo = [
      ...employeeInfo,
      {
        name: inputName,
        position: inputPosition,
        company: inputCompany,
        addr: inputAddr,
        email: inputEmail,
        phone: inputPhone,
      },
    ];
    setEmployeeInfo(newInfo);
    setInputName("");
    setInputPosition("");
    setInputCompany("");
    setInputAddr("");
    setInputEmail("");
    setInputPhone("");
  };

  const onRemoveClick = (phone) => {
    const newInfo = employeeInfo.filter((info) => info.phone !== phone);
    setEmployeeInfo(newInfo);
  };

  return (
    <Container>
      <InputBox>
        <input
          type="text"
          value={inputName}
          onChange={onNameChange}
          placeholder="이름"
        />
        <input
          type="text"
          value={inputPosition}
          onChange={onPositionChange}
          placeholder="직책"
        />
        <input
          type="text"
          value={inputCompany}
          onChange={onCompanyChange}
          placeholder="회사명"
        />
        <input
          type="text"
          value={inputAddr}
          onChange={onAddrChange}
          placeholder="회사주소"
        />
        <input
          type="text"
          value={inputEmail}
          onChange={onEmailChange}
          placeholder="이메일"
        />
        <input
          type="text"
          value={inputPhone}
          onChange={onPhoneChange}
          placeholder="전화번호"
        />

        <button onClick={onAddClick}>추가</button>
      </InputBox>

      <Table>
        <tr>
          <th>이름</th>
          <th>직책</th>
          <th>회사명</th>
          <th>회사주소</th>
          <th>이메일</th>
          <th>전화번호</th>
          <th>삭제</th>
        </tr>
        {employeeInfo &&
          employeeInfo.map((info) => (
            <tr key={info.phone}>
              <td>{info.name}</td>
              <td>{info.position}</td>
              <td>{info.company}</td>
              <td>{info.addr}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>
                <button onClick={() => onRemoveClick(info.phone)}>삭제</button>
              </td>
            </tr>
          ))}
      </Table>
    </Container>
  );
};
export default EmployeeTable;
