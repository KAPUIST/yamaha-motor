import * as React from "react";
import Box from "./Box";
import styled from "styled-components";

export interface HomeProps {
  title: string;
  Backgroundimg: string;
  price: string;
  Lbtn: string;
  Rbtn: string;
}
const Container = styled.div`
  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Box
        title="YZF-R1M"
        price="31,500,000원 (VAT 포함)"
        Backgroundimg="./yamaha-R1M.jpeg"
        Lbtn="주문하기"
        Rbtn="자세히 알아보기"
      />
      <Box
        title="YZF-R1"
        price="23,800,000원 (VAT 포함)"
        Backgroundimg="./yamaha-R1.jpeg"
        Lbtn="주문하기"
        Rbtn="자세히 알아보기"
      />
      <Box
        title="YZF-R7"
        price="12,200,000원 (VAT 포함)"
        Backgroundimg="./yamaha-R7.jpeg"
        Lbtn="주문하기"
        Rbtn="자세히 알아보기"
      />
      <Box
        title="YZF-R3"
        price="6,450,000원 (VAT 포함)"
        Backgroundimg="./yamaha-R3.jpeg"
        Lbtn="주문하기"
        Rbtn="자세히 알아보기"
      />
    </Container>
  );
};

export default Home;
