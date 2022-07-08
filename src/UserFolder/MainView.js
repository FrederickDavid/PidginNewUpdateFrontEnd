import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LikeComp from "./LikeComp";

const MainView = () => {
  return (
    <Container>
      <Header>
        <ImageHold>
          <Logo src="/logo.png" />
          <span>PIDGIN</span>
        </ImageHold>
        <MiddleHold>
          <HeadInput placeholder="Search word" />
          <Filter>
            Filter:<span>AZ</span>
          </Filter>
        </MiddleHold>
        <LogHold>
          <LogImage>
            <Img src="/image/images.png" />
          </LogImage>
          <Navs cl="black" to="/UserSignin">
            Logout
          </Navs>
          {/* <Navs cl="#5D00FF" to="/UserSignUp">
            Register
          </Navs> */}
        </LogHold>
      </Header>
      <Wrapper>
        <Header2>
          <MiddleHold2>
            <HeadInput placeholder="Search word" />
            <Filter>
              Filter:<span>AZ</span>
            </Filter>
          </MiddleHold2>
          <SmallAddWord>+</SmallAddWord>
        </Header2>
        <Left>
          <AddWordButton>
            <span>+</span>Add New Word
          </AddWordButton>
        </Left>
        <Right>
          <Card>
            <Top>
              <CardWord>How Far</CardWord>
              <CardPersonalDetails>
                <PersonalName>Frederick</PersonalName>
                <PersonalImage src="/image/images.png" />
              </CardPersonalDetails>
            </Top>
            <Middle>
              <CardWordDefinition>
                Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum
                purus quam, scelerisque ut, mollis sed, nonummy id, metus. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Quisque id mi. Nulla neque dolor, sagittis eget, iaculis quis,
                molestie non, velit.
              </CardWordDefinition>
              <CardWordSentence>She asked how you were doing</CardWordSentence>
              <CardWordSentence2>
                my gee <span>how far</span>, make I follow you
              </CardWordSentence2>
            </Middle>
            <Bottom>
              <LikeHolder>
                <LikeComp />
              </LikeHolder>
              <MoreOptions>dots</MoreOptions>
            </Bottom>
          </Card>
          <Card>
            <Top>
              <CardWord>Wetin</CardWord>
              <CardPersonalDetails>
                <PersonalName>David</PersonalName>
                <PersonalImage src="/image/images.png" />
              </CardPersonalDetails>
            </Top>
            <Middle>
              <CardWordDefinition>
                Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum
                purus quam, scelerisque ut, mollis sed, nonummy id, metus. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Quisque id mi. Nulla neque dolor, sagittis eget, iaculis quis,
                molestie non, velit.
              </CardWordDefinition>
              <CardWordSentence>She asked how you were doing</CardWordSentence>
              <CardWordSentence2>
                my gee <span>how far</span>, make I follow you
              </CardWordSentence2>
            </Middle>
            <Bottom>
              <LikeHolder>
                <LikeComp />
              </LikeHolder>
              <MoreOptions>dots</MoreOptions>
            </Bottom>
          </Card>
          <Card>
            <Top>
              <CardWord>Una well done</CardWord>
              <CardPersonalDetails>
                <PersonalName>Precious</PersonalName>
                <PersonalImage src="/image/images.png" />
              </CardPersonalDetails>
            </Top>
            <Middle>
              <CardWordDefinition>
                Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum
                purus quam, scelerisque ut, mollis sed, nonummy id, metus. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Quisque id mi. Nulla neque dolor, sagittis eget, iaculis quis,
                molestie non, velit.
              </CardWordDefinition>
              <CardWordSentence>She asked how you were doing</CardWordSentence>
              <CardWordSentence2>
                my gee <span>how far</span>, make I follow you
              </CardWordSentence2>
            </Middle>
            <Bottom>
              <LikeHolder>
                <LikeComp />
              </LikeHolder>
              <MoreOptions>dots</MoreOptions>
            </Bottom>
          </Card>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default MainView;

const MoreOptions = styled.div`
  color: gray;
  font-weight: 600;
  cursor: pointer;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.012);
  }
`;

const LikeHolder = styled.div`
  width: 130px;
  height: 45px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(214, 214, 214);
`;

const Bottom = styled.div`
  width: 90%;
  height: 60px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardWordSentence2 = styled.div`
  font-style: italic;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;
const CardWordSentence = styled.div`
  font-style: italic;
  margin-bottom: 10px;
`;

const CardWordDefinition = styled.div`
  width: 100%;
  text-align: left;
  margin: 15px 0px;
`;

const Middle = styled.div`
  width: 90%;
  height: auto;
  color: gray;
  font-size: 14px;
  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 13px;
  }
`;

const PersonalImage = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 50%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;

  @media screen and (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 320px) {
    width: 30px;
    height: 30px;
  }
`;

const PersonalName = styled.div`
  font-weight: 600;
  font-size: 16px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 320px) {
    font-size: 13px;
    font-weight: 600;
  }
`;

const CardPersonalDetails = styled.div`
  /* width: 150px; */
  height: 90%;
  display: flex;
  align-items: center;
`;

const CardWord = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: #a33737;
  @media screen and (max-width: 425px) {
    font-size: 22px;
    font-weight: 700;
    color: #a33737;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
    font-weight: 700;
    color: #a33737;
  }
`;

const Top = styled.div`
  width: 90%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    width: 90%;
    margin: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    margin: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Card = styled.div`
  width: 500px;
  height: auto;
  background-color: white;
  margin: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 450px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    height: auto;
    background-color: white;
    margin: 10px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(214, 214, 214);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.div`
  width: 700px;
  height: auto;
  margin-left: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 650px;
    margin-left: 170px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 85%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    margin-left: 0;
    width: 95%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const AddWordButton = styled.div`
  width: 200px;
  height: 55px;
  background-color: #5d00ff;
  margin-top: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.012);
  }

  span {
    font-weight: bold;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 48px;
    background-color: #5d00ff;
    margin-top: 30px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1);

    :hover {
      transform: scale(1.012);
    }
    span {
      font-weight: bold;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
    }
  }
`;

const Left = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// const Header = styled.div``

const Filter = styled.div`
  color: gray;
  font-size: 12px;
  span {
    color: black;
    margin-left: 3px;
    font-weight: 600;
    font-style: italic;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const HeadInput = styled.input`
  width: 85%;
  height: 80%;
  border-radius: 50px;
  outline: none;
  padding-left: 10px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 15px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
    padding: 5px;
  }
`;

const Navs = styled(NavLink)`
  margin-right: 8px;
  color: ${({ cl }) => cl};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.012);
  }

  @media screen and (max-width: 850px) {
    margin-right: 6px;
    color: ${({ cl }) => cl};
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 350ms;
    transform: scale(1);
    :hover {
      transform: scale(1.012);
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(214, 214, 214);
  border-radius: 50px;
  object-fit: cover;
`;

const SmallAddWord = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5d00ff;
  border-radius: 50px;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.025);
  }

  @media screen and (max-width: 425px) {
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: 320px) {
    width: 35px;
    height: 35px;
  }
`;
const LogImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 50px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 850px) {
    width: 35px;
    height: 35px;
    background-color: gray;
    border-radius: 50px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LogHold = styled.div`
  height: 60px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiddleHold2 = styled.div`
  @media screen and (max-width: 768px) {
    width: 550px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media screen and (max-width: 435px) {
    width: 80%;
    height: 50px;
  }
  @media screen and (max-width: 320px) {
    width: 80%;
    height: 40px;
  }
`;
const MiddleHold = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    width: 600px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (max-width: 850px) {
    width: 550px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImageHold = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  span {
    height: 60px;
    display: flex;
    align-items: flex-end;
    font-size: 15px;
    font-weight: bold;
    color: black;
  }

  @media screen and (max-width: 1024px) {
    span {
      height: 50px;
      display: flex;
      align-items: flex-end;
      font-size: 14px;
      font-weight: bold;
      color: black;
    }
  }
`;

const Logo = styled.img`
  width: 55px;
  height: 60px;
  object-fit: cover;
  margin: 20px 0px 0px 20px;

  @media screen and (max-width: 1024px) {
    width: 45px;
    height: 50px;
    object-fit: cover;
    margin: 20px 0px 0px 20px;
  }
`;

const Header2 = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgb(214, 214, 214);
  background-color: white;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
