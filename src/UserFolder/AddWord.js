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

const AddWord = () => {
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
            <HeadText2>Post Beta Word Make People See</HeadText2>
            <LabelHold>
              <Label>
                <LabelText>Put Word</LabelText>
                <Inputs placeholder="How Far" />
              </Label>
              <Label2>
                <LabelText>Definition</LabelText>
                <Inputs2 placeholder="How are you" />
              </Label2>
              <Label>
                <LabelText2>Use am make sentence for English</LabelText2>
                <Inputs placeholder="He asked how you where doing?..." />
              </Label>
            </LabelHold>
            {/* <HoldLink2 to="/NewsFeedDashBoard"> */}
            <Hold>
              <Submit type="submit"> Add Word</Submit>
            </Hold>
          </Holder>
        </MainView>
      </Container>
    </>
  );
};

export default AddWord;

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

const Submit = styled.button`
  width: 150px;
  height: 50px;
  background-color: #5d00ff;
  border-radius: 50px;
  border: none;
  color: white;
  margin: 20px 0px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(1.015);
    cursor: pointer;
    opacity: 0.9;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Inputs2 = styled.textarea`
  width: 79%;
  height: 200px;
  outline: none;
  border-radius: 3px;
  resize: none;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const LabelText2 = styled.label`
  width: 80%;
  /* margin-right: 10px; */
  font-size: 16px;
  color: gray;
  text-align: left;
`;
const Inputs = styled.textarea`
  width: 79%;
  height: 60px;
  outline: none;
  border-radius: 3px;
  resize: none;
  padding-left: 5px;
  border: 1px solid lightgray;

  ::placeholder {
    opacity: 0.6;
    font-size: 12px;
  }
  :focus {
    outline: 2px solid rgb(76, 216, 250);
    border: none;
  }
`;

const LabelText = styled.label`
  width: 80%;
  /* margin-right: 10px; */
  font-size: 16px;
  color: gray;
  text-align: left;
`;

const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelHold = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  width: 95%;
  height: 60px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Label2 = styled.div`
  width: 95%;
  height: 120px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeadText2 = styled.div`
  width: 100%;
  margin-bottom: 30px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
`;

const Holder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
