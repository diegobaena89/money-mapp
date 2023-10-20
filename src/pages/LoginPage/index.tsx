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
import { useState } from "react";
import Image from "../../assets/business.svg";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <LoginContainer>
        <AnimationContainer>
          <img src={Image} alt="business" />
        </AnimationContainer>
        <FormContainer>
          <Text textAlign="right">Not a member? Register now</Text>
          <Box w="80%" margin={"auto"}>
            <Heading textAlign={"center"} textTransform={"uppercase"} size="lg">
              money<strong>map.</strong>
            </Heading>
            <Text textAlign={"center"} padding="5px 0 40px">
              Welcome back you've been missed!
            </Text>
            <Stack spacing={3}>
              <Input placeholder="Enter username" size="lg" />
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
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
              <CustomButton>Sign In</CustomButton>
            </Stack>
          </Box>
        </FormContainer>
      </LoginContainer>
    </div>
  );
};
