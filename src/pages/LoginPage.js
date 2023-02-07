import React, { useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../slices/usersSlice";

const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px solid whitesmoke;
`;

const StyledLogin = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: beige;
  text-shadow: 10px 10px 10px #000;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  //padding-bottom: 30vh;
`;

const StyledLoginInput = styled.input`
  width: 250px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledLoginButton = styled.button`
  width: 200px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  color: black;
`;

const StyledRegisterButton = styled.button`
  width: 200px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
  background-color: black;
  color: beige;
`;

const LoginButton = ({ onclick: loginFunc }) => {
  return <StyledLoginButton onClick={loginFunc} />;
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const userIsAuthorized = useSelector((state) => state.usersSlice.authorized);

  return (
    <div>
      <StyledPage>
        <StyledContainer>
          <StyledLogin>Please login</StyledLogin>
          <StyledLoginInput
            type="text"
            placeholder="Enter your username"
            onChange={(event) => setEnteredLogin(event.target.value)}
          />
          <StyledLoginInput
            type="text"
            placeholder="Enter your password"
            onChange={(event) => setEnteredPassword(event.target.value)}
          />
          <LoginButton
            onClick={() => dispatch(login(enteredLogin, enteredPassword))}
          >
            Sign in!
          </LoginButton>
          <div>
            {" "}
            {userIsAuthorized && (
              <Navigate to={"/cars"} replace={true}></Navigate>
            )}
          </div>
          <StyledRegisterButton>Register</StyledRegisterButton>
          <div>
            {" "}
            {!userIsAuthorized && (
              <Navigate to={"/register"} replace={true}></Navigate>
            )}
          </div>
        </StyledContainer>
      </StyledPage>
    </div>
  );
};

export default LoginPage;

/*import React from "react";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  return <div>{2 + 2 === 4 && <Navigate to="/cars" replace={true} />}</div>;
};

export default LoginPage;
*/
