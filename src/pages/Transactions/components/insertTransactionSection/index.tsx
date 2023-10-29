import {
  Box,
  Card,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { CustomButton } from "../../styles";
import { useContext } from "react";
import {
  ITransaction,
  TransactionContext,
} from "../../../../context/transactionContext";

export const InsertTransactionSection = () => {
  const {
    date,
    setDate,
    category,
    setCategory,
    description,
    setDescription,
    amount,
    setAmount,
    setTransactions,
    transactionType,
    setTransactionType,
  } = useContext(TransactionContext)!;

  function handleSetData(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value);
  }

  function handleSetCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(event.target.value);
  }

  function handleSetDescription(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handleSetAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
  }

  function handleTransactionType(event: React.ChangeEvent<HTMLSelectElement>) {
    setTransactionType(event.target.value);
  }

  function handleCreateTransaction() {
    const newTransaction: ITransaction = {
      date,
      category,
      description,
      amount,
      transactionType,
      totalExpenses: 0,
      totalIncomes: 0,
      totalBalance: 0,
    };

    setTransactions((prevTransactions: ITransaction[]) => [
      ...prevTransactions,
      newTransaction,
    ]);

    const localStorageTransactions = localStorage.getItem("transactions");
    let updatedTransactions = [];

    if (localStorageTransactions) {
      updatedTransactions = JSON.parse(localStorageTransactions);
    }

    updatedTransactions.push(newTransaction);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  }

  return (
    <>
      <Card className="add-transaction-section" margin="10px 0">
        <Box display={"flex"} justifyContent={"space-between"} width="100%">
          <Box w="33%">
            <Text className="transactions-title">Date</Text>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="date"
              onChange={handleSetData}
              value={date}
              w="100%"
            />
          </Box>
          <Box w="33%">
            <Text className="transactions-title">Category</Text>
            <Select
              placeholder="Select Category"
              size="md"
              onChange={handleSetCategory}
              value={category}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
          </Box>
          <Box w="33%">
            <Text className="transactions-title">Type</Text>
            <Select
              placeholder="Select a Type"
              size="md"
              onChange={handleTransactionType}
              value={transactionType}
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Savings">Savings</option>
              <option value="Investment">Investment</option>
            </Select>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
          margin="20px 0"
        >
          <Box w="50%">
            <Text className="transactions-title">Description</Text>
            <Input
              placeholder="Enter Description"
              size="md"
              type="text"
              variant="flushed"
              onChange={handleSetDescription}
              value={description}
            />
          </Box>
          <Box w="35%">
            <Text className="transactions-title">Amount</Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="#574E6D"
                fontSize="1.2em"
                children="$"
              />
              <Input
                placeholder="Enter Amount"
                size="md"
                type="number"
                variant="flushed"
                onChange={handleSetAmount}
                value={amount}
              />
            </InputGroup>
          </Box>
          <Box w="15%" display={"flex"} justifyContent={"end"}>
            <CustomButton onClick={handleCreateTransaction}>Add</CustomButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};
