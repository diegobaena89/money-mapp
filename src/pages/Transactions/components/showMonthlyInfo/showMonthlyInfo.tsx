import { Box, Text } from "@chakra-ui/react";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { TransactionInfoContainer } from "./styles";
import { useContext } from "react";
import {
  ITransaction,
  TransactionContext,
} from "../../../../context/transactionContext";

export const ShowMonthlyInfo = () => {
  const { totalIncomes, totalExpenses, totalBalance, transactions } =
    useContext(TransactionContext)!;

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "Setember",
    10: "October",
    11: "November",
    12: "December",
  };
  const currentMonth = new Date().getMonth() + 1;
  const getCurrentMonthString = months[currentMonth];

  function showCurrentMonthTransactions(
    currentMonth: number,
    transactions: ITransaction[]
  ) {
    console.log(transactions);
    return currentMonth;
  }

  function showPreviousMonthTransactions(
    currentMonth: number,
    transactions: ITransaction[]
  ) {
    console.log(transactions);
    // const getPreviousMonthTransactions = transactions.map((transaction) => {
    //   // const getPreviousMonth = transaction.date.split("-").slice(1, 2);
    //   // const filterPreviousMonth = getPreviousMonth.filter(
    //   //   (month) => month === currentMonth.toString()
    //   // );
    //   // console.log(filterPreviousMonth);
    //   console.log(transaction.date);
    // });
    const getPreviousMonth = transactions;
    return getPreviousMonth - 1;
  }

  function showNextMonthTransactions(
    currentMonth: number,
    transactions: ITransaction[]
  ) {
    return currentMonth + 1;
  }

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
          onClick={() =>
            showPreviousMonthTransactions(currentMonth, transactions)
          }
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
        <Text>$ {totalBalance.toFixed(2)}</Text>
      </Box>
    </TransactionInfoContainer>
  );
};
