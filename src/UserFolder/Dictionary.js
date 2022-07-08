import React from "react";
import styled from "styled-components";
import DisplayHead from "../DisplayHead/DisplayHead";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Dictionary = () => {
  return (
    <>
      <Container>
        <SideBar>
          <ContentHolder>
            <NavImage src="/image/images.png" />
            <span>Frederick</span>
          </ContentHolder>
          <MiddleNav>
            <Navs>
              <span>
                <AiOutlineHome />
              </span>
              NewsFeed
            </Navs>
            <Navs>
              <span>
                <BiBookAdd />
              </span>
              AddWord
            </Navs>
            {/* <Navs>
              <span>I</span>Dictionary
            </Navs> */}
            <Navs>
              <span>
                <CgProfile />
              </span>
              Profile
            </Navs>
            <Navs>
              <span>
                <AiOutlineSetting />
              </span>
              Account Settings
            </Navs>
          </MiddleNav>
          <LogoutButton>
            <span>
              <AiOutlineLogout />
            </span>
            Logout
          </LogoutButton>
        </SideBar>
        <MainView>
          <Header>
            <DisplayHead />
          </Header>
          <Holder>
            <ContentHolder2>
              {" "}
              <MiddleHold>
                <HeadInput placeholder="Search word" />
                <Filter>
                  Filter:<span>AZ</span>
                </Filter>
              </MiddleHold>
              <MainText>How Far</MainText>
              <SmallText>
                {" "}
                Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum
                purus quam, scelerisque ut, mollis sed, nonummy id, metus. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Quisque id mi. Nulla neque dolor, sagittis eget, iaculis quis,
                molestie non, velit.
              </SmallText>
              <SmallText>
                {" "}
                Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum
                purus quam, scelerisque ut, mollis sed, nonummy id, metus. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Quisque id mi. Nulla neque dolor, sagittis eget, iaculis quis,
                molestie non, velit.
              </SmallText>
              <SmallText>
                {" "}
                Aenean massa. Praesent porttitor, nulla vitae posuere iaculis,
                arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Vestibulum
                purus quam, scelerisque ut, mollis sed, nonummy id, metus. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Quisque id mi. Nulla neque dolor, sagittis eget, iaculis quis,
                molestie non, velit.
              </SmallText>
              <CardWordSentence>She asked how you were doing</CardWordSentence>
              <CardWordSentence2>
                my gee <span>how far</span>, make I follow you
              </CardWordSentence2>
              <MoreDefinition>more definition...</MoreDefinition>
            </ContentHolder2>
          </Holder>
        </MainView>
      </Container>
    </>
  );
};

export default Dictionary;

const Header = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70px;
    padding-right: 10px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 100;
  }
`;

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

const MoreDefinition = styled.div`
  color: blue;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transition: all 350ms;
    text-decoration: underline;
  }
`;

const CardWordSentence2 = styled.div`
  font-style: italic;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.7);
  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;
const CardWordSentence = styled.div`
  font-style: italic;
  margin-top: 15px;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.7);
`;

const SmallText = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.7);
`;

const MainText = styled.div`
  font-weight: 600;
  font-size: 40px;
  color: #a33737;
`;

const ContentHolder2 = styled.div`
  width: 90%;
  height: auto;
  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }
  @media screen and (max-width: 600px) {
    padding-top: 250px;
  }
  @media screen and (max-width: 567px) {
    padding-top: 260px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 320px;
  }
  @media screen and (max-width: 425px) {
    padding-top: 390px;
  }
`;

const MiddleHold = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Holder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 15px;
  /* justify-content: center; */
  flex-direction: column;
`;

const MainView = styled.div`
  margin-left: 250px;
  width: 65%;
  height: auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
    margin-left: 0px;
  }
`;

const LogoutButton = styled.div`
  width: 100%;
  height: 55px;
  background-color: #5d00ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 20px;
    font-weight: 600;
    margin-right: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    transition: all 350ms;
  }
`;

const Navs = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(214, 214, 214);
  border-bottom: 1px solid rgb(214, 214, 214);
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;
    margin-right: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    transition: all 350ms;
  }
`;

const MiddleNav = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const NavImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgb(214, 214, 214);
  background-color: white;
`;

const ContentHolder = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 20px;
    margin-top: 5px;
  }
`;

const SideBar = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid lightgray;
  /* background-color: #f1f1f1; */
  position: fixed;
  left: 0;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background: white;
`;
