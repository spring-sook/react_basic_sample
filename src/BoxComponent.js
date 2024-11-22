// yarn add styled-components
// extension중에 styled 설치
import styled from "styled-components";

const BoxStyle = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 300px;
  background-color: mediumslateblue;
  color: white;
  font-size: 1.4em;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const BoxComponent = ({ children }) => {
  return <BoxStyle>{children}</BoxStyle>;
};
export default BoxComponent;
