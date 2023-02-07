import React from "react";
import styled from "styled-components";

const StyledPageRegister = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledWrapper = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px solid whitesmoke;
`;

const StyledRegister = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: black;
  text-shadow: 10px 10px 10px #fff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  //padding-bottom: 30vh;
`;

const StyledRegisterInput = styled.input`
  width: 250px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: black;
`;

const StyledRegisterButton = styled.button`
  width: 200px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  background-color: black;
  color: beige;
`;

const StyledRegisterButtonWhite = styled.button`
  width: 200px;
  height: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
`;

function RegisterPage() {
  return (
    <div>
      <StyledPageRegister>
        <StyledWrapper>
          <StyledRegister>Please register</StyledRegister>
          <StyledRegisterInput type="text" placeholder="Enter your username" />
          <StyledRegisterInput type="text" placeholder="Enter your password" />
          <StyledRegisterButton>Register!</StyledRegisterButton>
          <StyledRegisterButtonWhite>Log in</StyledRegisterButtonWhite>
        </StyledWrapper>
      </StyledPageRegister>
    </div>
  );
}

export default RegisterPage;
