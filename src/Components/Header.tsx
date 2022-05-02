import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 0 20px;
    flex-wrap: nowrap;
  }
`;
const Header: React.FC = () => {
  return (
    <Container>
      <a>
        <img src="./yamaha-logo.png" alt="" width={150} />
      </a>
      <Menu>
        <p>
          <a href="/">YZF-R1M</a>
        </p>
        <p>
          <a href="/">YZF-R1</a>
        </p>
        <p>
          <a href="/">YZF-R7</a>
        </p>
        <p>
          <a href="/">YZF-R3</a>
        </p>
      </Menu>
    </Container>
  );
};

export default Header;
