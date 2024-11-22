import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;

  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 12px;
  }
  th {
    background-color: blueviolet;
    color: white;
  }
`;

const responsedata = [
  {
    id: 1,
    name: "민지",
    addr: "서울시 강남구 신사동",
  },
  {
    id: 2,
    name: "하니",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 3,
    name: "해린",
    addr: "서울시 강남구 청담동",
  },
  {
    id: 4,
    name: "다니엘",
    addr: "서울시 강남구 삼성동",
  },
  {
    id: 5,
    name: "혜인",
    addr: "서울시 강남구 서초동",
  },
];

const TableMap = () => {
  const [memberData, setMemberData] = useState("");

  useEffect(() => {
    // 이때 서버와 비동기통신이 일어남
    setTimeout(() => {
      setMemberData(responsedata);
      // 여기에 map 데이터 읽어오면 없음. 비밀번호나 이런거 비교하려면 원본 데이터랑 비교해야됨(?)
    }, 2000); // 2초 뒤에 데이터가 들어옴(동작 방식 보려고..)
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData && // 이 조건부 렌더링이 없으면 데이터 없으면 죽음
        memberData.map((member) => (
          // e.id가 유일한 값으로 줘서 key값으로 렌더링을 할지말지가 정해짐
          // 유일한 값이 없으면 (member, index) => (<tr key={index}></tr>) 이렇게 인덱스로 해줘도 됨
          <tr key={member.id} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
};
export default TableMap;
