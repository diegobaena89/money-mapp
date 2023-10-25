import { Box, Text } from "@chakra-ui/react";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { TransactionInfoContainer } from "./styles";

export const ShowMonthlyInfo = () => {
  return (
    <TransactionInfoContainer
      display={"flex"}
      flexDirection={"row"}
      padding="20px 15px"
    >
      <Box className="search-engine">
        <ArrowCircleLeft
          className="search-icon"
          size={32}
          weight="fill"
          cursor={"pointer"}
        />
        <Text margin="0 10px">Month</Text>
        <ArrowCircleRight
          className="search-icon"
          size={32}
          weight="fill"
          cursor={"pointer"}
        />
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Incomes</Text>
        <Text>$ 358.36</Text>
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Expenses</Text>
        <Text>$ 358.36</Text>
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Balance</Text>
        <Text>$ 358.36</Text>
      </Box>
    </TransactionInfoContainer>
  );
};
