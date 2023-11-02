import { Box, Spinner, Tag, Text } from "@chakra-ui/react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  Paperclip,
  PiggyBank,
} from "@phosphor-icons/react";
import { ListContainer, SpinnerContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { handleAmountIntToFloat } from "../../../../../../utils/fixAmountValue";
import { convertMonthPattern } from "../../../../../../utils/convertMonthPattern";
import { getAllTransactions } from "../../../../../../data/firebase";
import { AuthContext } from "../../../../../../context/authenticationContext";

interface IconMap {
  [key: string]: React.ReactNode;
}

interface TransactionData {
  newTransaction: {
    amount: number;
    category: string;
    date: string;
    description: string;
    totalBalance: number;
    totalExpenses: number;
    totalIncomes: number;
    transactionType: string;
  };
}

export const TransactionsList = () => {
  const hasAttachment = true;
  const { userId } = useContext(AuthContext)!;
  const [getTransactionsFromDb, setGetTransactionsFromDb] =
    useState<TransactionData[]>();

  const iconBasedOnType: IconMap = {
    Income: <ArrowCircleUp size={30} color="green" />,
    Expense: <ArrowCircleDown size={30} color="red" />,
    Savings: <PiggyBank size={30} color="green" />,
    Investments: <Bank size={30} color="green" />,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTransactions(userId);
        if (data) {
          const transactions = Object.values(data);
          setGetTransactionsFromDb(transactions);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("An error has occured:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (getTransactionsFromDb?.length === 0) {
    return <div>Aguardando dados...</div>;
  }

  return (
    <>
      {getTransactionsFromDb ? (
        getTransactionsFromDb.map((transactionGroup: any) => {
          return Object.values(transactionGroup).map(
            (transaction: any, index: number) => (
              <ListContainer
                key={`${transaction.newTransaction.description || index}`}
                className="transaction-item"
              >
                <Box
                  marginLeft={14}
                  minWidth={"32%"}
                  display={"flex"}
                  margin="10px"
                >
                  {iconBasedOnType[transaction.newTransaction.transactionType]}
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    className="description"
                  >
                    {transaction.newTransaction.description}
                  </Text>
                </Box>
                <Box display={"flex"} minWidth={"15%"}>
                  <Text marginRight={2}>Date: </Text>
                  <Text className="description">
                    {convertMonthPattern(transaction.newTransaction.date)}
                  </Text>
                </Box>
                <Box className="item-box" minWidth={"20%"}>
                  <Text marginRight={2}>Category:</Text>
                  <Tag size={"md"} variant={"solid"} colorScheme="gray">
                    {transaction.newTransaction.category}
                  </Tag>
                </Box>
                <Box className="anex-box" minWidth={"15%"}>
                  {hasAttachment && (
                    <Paperclip size={25} color="#6B6B6B" cursor={"pointer"} />
                  )}
                  <Text marginLeft={10} fontSize={18}>
                    U${" "}
                    {handleAmountIntToFloat(transaction.newTransaction.amount)}
                  </Text>
                </Box>
              </ListContainer>
            )
          );
        })
      ) : (
        <SpinnerContainer>
          <Spinner size={"xl"} />
        </SpinnerContainer>
      )}
    </>
  );
};
