import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";

const AuthRegister = () => {
  const { id, token } = useParams();

  const navigate = useNavigate();

  const formSchema = yup.object().shape({});

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { email, password } = value;
    navigate("/UserSignIn");
  });

  useEffect(async () => {
    const mainURL = "https://pidgin-backend.herokuapp.com";
    const url = `${mainURL}/pidgin/user/${id}/${token}`;

    await axios.get(url);
  });

  return (
    <Container>
      <Card>
        <Form onSubmit={onSubmit}>
          <Image src={"/image/auth.svg"} />
          <Diva>
            Congratulations, your account is now verified, please click okay to
            continue🎉
          </Diva>

          <Button type="submit">Continue to Sign in</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AuthRegister;

const Diva = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #004080;
  text-transform: uppercase;
  @media screen and (max-width: 425px) {
    width: 90%;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    color: #004080;
    text-transform: uppercase;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
  object-fit: contain;
  @media screen and (max-width: 425px) {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    object-fit: contain;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 15px 35px;
  margin-top: 30px;
  height: 40px;
  font-family: Poppins;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  font-weight: 300;
  margin-bottom: 20px;
  outline: none;
  border: 0;
  background-color: #004080;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  @media screen and (max-width: 425px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
