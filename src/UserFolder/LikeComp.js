import React from "react";
import styled from "styled-components";

const LikeComp = () => {
  return (
    <Container>
      <Like>
        <span>L</span>1,000
      </Like>
      {/* <Mid></Mid> */}
      <DisLike>
        <span>R</span>200
      </DisLike>
    </Container>
  );
};

export default LikeComp;

const DisLike = styled.div`
  width: 65px;
  height: 100%;
  border-left: 1px solid rgb(214, 214, 214);
  border-radius: 0px 50px 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: rgba(0, 0, 0, 0.8);
  span {
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5px;
  }
  :hover {
    background-color: rgb(214, 214, 214);
  }
`;
const Like = styled.div`
  width: 65px;
  height: 100%;
  border-right: 1px solid rgb(214, 214, 214);
  border-radius: 50px 0px 0px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: rgba(0, 0, 0, 0.8);
  span {
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 5px;
  }
  :hover {
    background-color: rgb(214, 214, 214);
  }
`;

const Container = styled.div`
  width: 130;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
