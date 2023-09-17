import { Characters } from "@/components";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const Home = () => {
  return (
    <>
      <Title>Marvel Characters List</Title>
      <Characters />
    </>
  );
};

export default Home;
