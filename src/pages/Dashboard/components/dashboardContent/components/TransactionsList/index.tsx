import { Box, Tag, Text } from "@chakra-ui/react";
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
import { handleAmountIntToFloat } from "../../../../../../utils/fixAmountValue";

interface IconMap {
  [key: string]: React.ReactNode;
}

export const TransactionsList = () => {
  const { transactions } = useContext(TransactionContext);
  const lastFourTransactions = transactions.slice(-4);
  const hasAttachment = true;

  const iconBasedOnType: IconMap = {
    Income: <ArrowCircleUp size={30} color="green" />,
    Expense: <ArrowCircleDown size={30} color="red" />,
    Savings: <PiggyBank size={30} color="green" />,
    Investments: <Bank size={30} color="green" />,
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
          <Box display={"flex"}>
            <Text marginRight={2}>Date: </Text>
            <Text className="description">{transaction.date}</Text>
          </Box>

          <Box className="item-box">
            <Text marginRight={2}>Category:</Text>
            <Tag size={"md"} variant={"solid"} colorScheme="gray">
              {transaction.category}
            </Tag>
          </Box>
          <Box className="anex-box">
            {hasAttachment && (
              <Paperclip size={25} color="#6B6B6B" cursor={"pointer"} />
            )}
            <Text marginLeft={10} fontSize={18}>
              U$ {handleAmountIntToFloat(transaction.amount)}
            </Text>
          </Box>
        </ListContainer>
      ))}
    </>
  );
};
