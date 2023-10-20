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
import { AnimationContainer, FormContainer, LoginContainer } from "./styles";
import { useState } from "react";

export const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <LoginContainer>
        <AnimationContainer>animation</AnimationContainer>
        <FormContainer>
          <Text>Not a member? Register now</Text>
          <Box w="80%" margin={"auto"}>
            <Heading textAlign={"center"} size="lg">
              Hello Again!
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
              <Text padding="25px 0">Recovery Password</Text>
              <Button>Sign In</Button>
            </Stack>
          </Box>
        </FormContainer>
      </LoginContainer>
    </div>
  );
};
