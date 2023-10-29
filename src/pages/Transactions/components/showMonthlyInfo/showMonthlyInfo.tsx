import { Box, Text } from "@chakra-ui/react";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { TransactionInfoContainer } from "./styles";
import { useContext } from "react";
import { TransactionContext } from "../../../../context/transactionContext";

export const ShowMonthlyInfo = () => {
  const { totalIncomes, totalExpenses, totalBalance } =
    useContext(TransactionContext)!;
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
        <Text>$ {totalIncomes}</Text>
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Expenses</Text>
        <Text>$ {totalExpenses}</Text>
      </Box>
      <Box w={"10%"}>
        <Text className="transactions-title">Balance</Text>
        <Text>$ {totalBalance}</Text>
      </Box>
    </TransactionInfoContainer>
  );
};
