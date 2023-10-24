import { Box, Text } from "@chakra-ui/react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  DotOutline,
  Paperclip,
  PiggyBank,
} from "@phosphor-icons/react";
import { ListContainer } from "./styles";
import { mockTransactions } from "../../../../../../mocks/mockTransactions";

interface IconMap {
  [key: string]: React.ReactNode;
}

console.log("mockTransactions", mockTransactions);

export const TransactionsList = () => {
  const iconBasedOnType: IconMap = {
    income: <ArrowCircleUp size={30} />,
    expense: <ArrowCircleDown size={30} />,
    savings: <PiggyBank size={30} />,
    investiments: <Bank size={30} />,
  };

  return (
    <>
      {mockTransactions.map((transaction, index) => (
        <ListContainer
          key={index}
          className="transaction-item"
          style={{
            backgroundColor: index % 2 === 0 ? "#C9C5D3" : "#F2F2F2",
          }}
        >
          <Box className="first-box">
            {iconBasedOnType[transaction.type]}
            <Box marginLeft={14}>
              <Text fontSize={"lg"} marginBottom={1} fontWeight={"bold"}>
                {transaction.name}
              </Text>
              <Text className="description">{transaction.date}</Text>
            </Box>
          </Box>
          <Box display={"flex"} className="item-box">
            <DotOutline size={32} weight="fill" />
            <Text marginLeft={2} fontWeight={"bold"}>
              {transaction.category}
            </Text>
          </Box>
          <Box className="anex-box">
            <Paperclip size={25} />
            <Text marginLeft={10} fontSize={18}>
              - $ {transaction.price}
            </Text>
          </Box>
        </ListContainer>
      ))}
    </>
  );
};
