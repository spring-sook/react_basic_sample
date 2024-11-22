// yarn add styled-components
import styled from "styled-components";

const HeadStyle = styled.h1`
  font-size: 2em;
  color: royalblue;
  text-align: center;
`;

const HeadLine = ({ title }) => {
  return (
    <>
      {/* <h2>기사 제목 : {title}</h2> */}
      <HeadStyle>기사 제목 : {title}</HeadStyle>
    </>
  );
};

const Contents = ({ description }) => {
  return (
    <>
      <p>본문 내용 : {description}</p>
    </>
  );
};

const NewsDate = ({ date }) => {
  return (
    <>
      <p>작성일 : {date}</p>
    </>
  );
};

const Article = ({ data }) => {
  return (
    <>
      {/* <h2>기사 제목 : {data.title}</h2>
      <p>내용 : {data.description}</p>
      <p>날짜 : {data.date}</p> */}
      <HeadLine title={data.title} />
      <Contents description={data.description} />
      <NewsDate date={data.date} />
    </>
  );
};
export default Article;
