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

const Profile = () => {
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
            <TopProfile>
              <ProfileImage src="/image/images.png" />
              <SideProfile>
                <SideName>Muomaife Frederick David</SideName>
                <SideLabel>Bio:</SideLabel>
                <SideContent>I am a full generator</SideContent>
                <SideLabel>Email:</SideLabel>
                <SideContent>muomaifefrederick@gmail.com</SideContent>
                <SideGender>Male</SideGender>
              </SideProfile>
            </TopProfile>
          </Holder>
        </MainView>
      </Container>
    </>
  );
};

export default Profile;

const SideGender = styled.div`
  font-size: 12px;
  color: #a33737;
  font-style: italic;
  font-weight: 700;
`;

const SideContent = styled.div`
  margin-bottom: 10px;
`;

const SideLabel = styled.div`
  font-size: 17px;
  font-weight: 500;
  font-style: italic;
  color: rgba(0, 0, 0, 0.8);
`;

const SideName = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
`;

const SideProfile = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgb(214, 214, 214);
  /* background-color: white; */
  margin-right: 30px;
`;

const TopProfile = styled.div`
  width: 70%;
  height: 250px;
  border-bottom: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const Holder = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;

const MainView = styled.div`
  margin-left: 260px;
  width: 80%;
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
