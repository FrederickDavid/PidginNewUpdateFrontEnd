import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import Swal from 'sweetalert2';

const UserSignin = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const formSchema = yup.object().shape({
  //     email: yup.string().email().required("This field cannot be empty"),
  //     password: yup.string().required("This field cannot be empty"),
  //   });

  //   const {
  //     register,
  //     reset,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(formSchema),
  //   });

  //   const onSubmit = handleSubmit(async (value) => {
  //     console.log(value);
  //     const { email, password } = value;
  //     const url = "https://pidgin-backend.herokuapp.com/pidgin/user/signin";

  //     await axios.post(url, { email, password }).then((res) => {
  //       // console.log(res.data.data);
  //       dispatch(createUser(res.data.data));
  //     }).catch((err) => {
  //       if (err) {
  //         alert(err.message);
  //       } else {
  //         alert("sign in sucessfully");
  //       }
  //     });
  //     Swal.fire(
  //       'Good job!',
  //       'Clicke Ok to continue',
  //       'success'
  //     );

  //     navigate("/BioFill");
  //   });

  return (
    <Container>
      <Wrapper2>
        <CardSignin>
          <InnerCard1>
            <ImageHold>
              <Logo src="/logo.png" />
              <span>PIDGIN</span>
            </ImageHold>
            <Text>Enter Make U See Beta Pidgin Words And Wetin E Mean</Text>
            <Text2>
              Shei you neva get account at all?
              <HoldLink to="/UserSignUp">
                <span>Sign up</span>
              </HoldLink>
            </Text2>
          </InnerCard1>
        </CardSignin>

        <Card2>
          <HeadText>Enter Account Wey You Get Before</HeadText>
          <LabelHolder>
            {/* <Error>This field must not be empty</Error> */}
            <LabelText>Enter your email:</LabelText>
            <Input placeholder="test@gmail.com" type="email" />
          </LabelHolder>
          <LabelHolder>
            {/* <Error>This field must not be empty</Error> */}
            <LabelText>Enter your password:</LabelText>
            <Input placeholder="6+ characters" type="password" />
          </LabelHolder>
          <Submit type="submit">Sign in</Submit>
          <Text3>
            Abi you don get before?
            <HoldLink to="/UserSignIn">
              <span>Sign up</span>
            </HoldLink>
          </Text3>
        </Card2>
      </Wrapper2>
    </Container>
  );
};

export default UserSignin;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: auto;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text2 = styled.div`
  width: 180px;
  display: flex;
  font-weight: 250;
  flex-direction: column;
  color: white;
  font-size: 13px;
  margin: 100px 0px 0px 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: white;
  }
`;

const Text = styled.div`
  width: 250px;
  display: flex;
  font-weight: 600;
  flex-direction: column;
  color: white;
  font-size: 20px;
  margin: 15px 0px 0px 20px;
`;

const ImageHold = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  span {
    height: 70px;
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
`;

const Logo = styled.img`
  width: 65px;
  height: 70px;
  /* background-color: red; */
  object-fit: cover;
  margin: 20px 0px 0px 20px;
  border-radius: 3px;
`;

const InnerCard1 = styled.div`
  width: 300px;
  height: 70%;
  background-color: white;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CardSignin = styled.div`
  background-image: url("/image/Shadow-Fall-Background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;
  width: 375px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    display: none;
  }
`;

const Wrapper2 = styled.div`
  width: 750px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 410px;
    height: 500px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 766px) and (min-width: 300px) {
    width: 350px;
    height: 500px;
    background-color: grey;
    border-radius: 5px;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 97%;
  height: 35px;
  outline: none;
  border-radius: 3px;
  padding-left: 5px;
  border: 1px solid lightgray;
  margin-top: 3px;

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
  color: gray;
  font-weight: 400;
  font-size: 12px;
`;
const Error = styled.div`
  color: red;
  font-size: 12px;
  font-weight: bold;
`;

const Text3 = styled.div`
  display: none;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    width: 70%;
    display: flex;
    font-weight: 400;
    color: black;
    font-size: 13px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    /* margin: 20px 0px 0px 30px; */
    span {
      font-size: 13px;
      font-weight: 500;
      margin-left: 2px;
      color: blue;
      cursor: pointer;
    }
  }
`;

const HoldLink = styled(NavLink)`
  text-decoration: none;
`;

const Submit = styled.button`
  width: 90%;
  height: 40px;
  border: none;
  background-color: #0074f8;
  border-radius: 3px;
  color: white;
  margin: 30px 0px;
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
`;

const LabelHolder = styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 15px;
`;

const HeadText = styled.div`
  color: black;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Card2 = styled.form`
  width: 375px;
  height: 100%;
  background-color: white;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) and (min-width: 300px) {
    width: 360px;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }
`;
