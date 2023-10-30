import { Box, Text } from "@chakra-ui/react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  Paperclip,
  PiggyBank,
} from "@phosphor-icons/react";
import { ListContainer } from "./styles";
import { useContext } from "react";
import { TransactionContext } from "../../../../../../context/transactionContext";

interface IconMap {
  [key: string]: React.ReactNode;
}

export const TransactionsList = () => {
  const { transactions } = useContext(TransactionContext);
  const lastFourTransactions = transactions.slice(-4);

  const iconBasedOnType: IconMap = {
    Income: <ArrowCircleUp size={30} />,
    Expense: <ArrowCircleDown size={30} />,
    Savings: <PiggyBank size={30} />,
    Investments: <Bank size={30} />,
  };

  return (
    <>
      {lastFourTransactions.map((transaction, index) => (
        <ListContainer
          key={index}
          className="transaction-item"
          style={{
            backgroundColor: index % 2 === 0 ? "#C9C5D3" : "#F2F2F2",
          }}
        >
          {iconBasedOnType[transaction.transactionType]}
          <Box marginLeft={14}>
            <Text fontSize={"lg"} fontWeight={"bold"} marginRight={10}>
              {transaction.description}
            </Text>
          </Box>
          <Box>
            <Text className="description">{transaction.date}</Text>
          </Box>

          <Box className="item-box">
            <Text marginLeft={2} fontWeight={"bold"}>
              {transaction.category}
            </Text>
          </Box>
          <Box className="anex-box">
            <Paperclip size={25} color="#6B6B6B" />
            <Text marginLeft={10} fontSize={18}>
              U$ {transaction.amount}
            </Text>
          </Box>
        </ListContainer>
      ))}
    </>
  );
};
