import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 60vw;
  margin: 80px auto;
  border-radius: 22px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const AnimationContainer = styled.div`
  flex: 1;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.purple500};
  border-radius: 22px;
`;

export const FormContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
