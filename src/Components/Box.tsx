import React from "react";
import styled from "styled-components";
import { HomeProps } from "./Home";

interface styledProps {
  bgImage: string;
}
const Wrap = styled.div<styledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  background-image: ${(props: any) => `url("/${props.bgImage}")`};
`;
const Item = styled.div`
  padding-top: 13vh;
  text-align: center;
`;
const Buttons = styled.div``;

const Lbutton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 266px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
  margin: 20px;
`;
const Rbutton = styled(Lbutton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: Down infinite 1.5s;
`;

const OrderBtn = styled.div`
  display: flex;
  margin-bottom: 25px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
const Box: React.FC<HomeProps> = ({
  title,
  Backgroundimg,
  Lbtn,
  Rbtn,
  price,
}: {
  title: string;
  Backgroundimg: string;
  Lbtn: string;
  price: string;
  Rbtn: string;
}) => {
  return (
    <Wrap bgImage={Backgroundimg}>
      <Item>
        <h1>{title}</h1>
        <p>{price}</p>
      </Item>

      <Buttons>
        <OrderBtn>
          <Lbutton>{Lbtn}</Lbutton>
          <Rbutton>{Rbtn}</Rbutton>
        </OrderBtn>
        <DownArrow src="./down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Box;
