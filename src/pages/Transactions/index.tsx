import { Box, Text } from "@chakra-ui/react";
import { TransactionsContainer } from "./styles";
import { TransactionsTable } from "./components/Table";
import { InsertTransactionSection } from "./components/insertTransactionSection";
import { ShowMonthlyInfo } from "./components/showMonthlyInfo/showMonthlyInfo";

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Transactions
        </Text>
      </Box>
      <ShowMonthlyInfo />
      <InsertTransactionSection />
      <Box>
        <TransactionsTable />
      </Box>
    </TransactionsContainer>
  );
};
