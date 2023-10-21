import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AnimationContainer,
  CustomButton,
  FormContainer,
  LoginContainer,
} from "./styles";
import { useContext, useState } from "react";
import Image from "../../assets/business.svg";
import { SignUp } from "./SignUp";
import { handleLogin, handleSIgnUp } from "../../utils/handleFirebaseAuth";
import { AuthContext } from "../../context/authenticationContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [signedUp, setSignedUp] = useState(true);
  const handleClick = () => setShow(!show);
  const { email, setEmail, password, setPassword, setIsAuthenticaded } =
    useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleSubmitLogin = (
    e: React.FormEvent<HTMLFormElement>,
    signedUp: boolean
  ): void => {
    e.preventDefault();
    if (signedUp) {
      handleLogin(email, password);
      setIsAuthenticaded!(true);
      navigate("/dashboard");
    } else {
      handleSIgnUp(email, password);
      setIsAuthenticaded!(false);
    }
  };

  const handleChangeSignIn = () => {
    setSignedUp(!signedUp);
  };

  return (
    <div>
      <LoginContainer>
        <AnimationContainer>
          <img src={Image} alt="business" />
        </AnimationContainer>
        <FormContainer onSubmit={(e) => handleSubmitLogin(e, signedUp)}>
          <Text textAlign="right">
            Not a member?{" "}
            <strong onClick={handleChangeSignIn}>Register now</strong>
          </Text>
          {signedUp ? (
            <Box w="80%" margin={"auto"}>
              <Heading
                textAlign={"center"}
                textTransform={"uppercase"}
                size="lg"
              >
                money<strong>map.</strong>
              </Heading>
              <Text textAlign={"center"} padding="5px 0 40px">
                Welcome back you've been missed!
              </Text>
              <Stack spacing={3}>
                <Input
                  value={email}
                  placeholder="Enter username"
                  size="lg"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Text padding="25px 0" textAlign={"right"} fontSize={"sm"}>
                  Recovery Password
                </Text>
                <CustomButton type="submit">Sign In</CustomButton>
              </Stack>
            </Box>
          ) : (
            <SignUp />
          )}
        </FormContainer>
      </LoginContainer>
    </div>
  );
};
