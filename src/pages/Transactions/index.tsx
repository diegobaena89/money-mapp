import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { CustomButton, TransactionsContainer } from "./styles";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { TransactionsTable } from "./components/Table";

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Transactions
        </Text>
        <CustomButton leftIcon={<Plus />} colorScheme="teal" variant="solid">
          Add Transaction
        </CustomButton>
      </Box>
      <Box margin="30px 0" display={"flex"} justifyContent={"space-between"}>
        <InputGroup
          w="65%"
          border="#574E6D"
          size={"lg"}
          backgroundColor={"#fff"}
        >
          <InputLeftElement pointerEvents="none">
            <MagnifyingGlass color="#574E6D" size={32} weight="light" />
          </InputLeftElement>
          <Input type="tel" placeholder="Search" />
        </InputGroup>
      </Box>
      <Box>
        <TransactionsTable />
      </Box>
    </TransactionsContainer>
  );
};
