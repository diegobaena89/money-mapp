import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <Box display={"flex"}>
      <Box flex={1}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Dashboard
        </Text>
        <Text>Payment updates</Text>
      </Box>
      <Box flex="4" display={"flex"} alignItems={"center"}>
        <InputGroup
          w="98%"
          border="#E5E5E5"
          size={"lg"}
          backgroundColor={"white"}
        >
          <InputLeftElement pointerEvents="none">
            <MagnifyingGlass color="#333333" size={32} weight="light" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </Box>
    </Box>
  );
};
