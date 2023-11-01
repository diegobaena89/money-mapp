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
import { convertMonthPattern } from "../../../../../../utils/convertMonthPattern";

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
          key={`${transaction.description}`}
          className="transaction-item"
          style={{
            backgroundColor: index % 2 === 0 ? "#C9C5D3" : "#F2F2F2",
          }}
        >
          <Box marginLeft={14} minWidth={"32%"} display={"flex"} margin="10px">
            {iconBasedOnType[transaction.transactionType]}
            <Text fontSize={"lg"} fontWeight={"bold"} className="description">
              {transaction.description}
            </Text>
          </Box>
          <Box display={"flex"} minWidth={"15%"}>
            <Text marginRight={2}>Date: </Text>
            <Text className="description">
              {convertMonthPattern(transaction.date)}
            </Text>
          </Box>

          <Box className="item-box" minWidth={"20%"}>
            <Text marginRight={2}>Category:</Text>
            <Tag size={"md"} variant={"solid"} colorScheme="gray">
              {transaction.category}
            </Tag>
          </Box>
          <Box className="anex-box" minWidth={"15%"}>
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
