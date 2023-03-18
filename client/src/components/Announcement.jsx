import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 35px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing:1px;
  font-weight: 300;
  ${mobile({ height: "40px"})}

`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
