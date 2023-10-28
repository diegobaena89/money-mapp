import { Box, Card, Input, Select, Text } from "@chakra-ui/react";
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

  function handleCreateTransaction() {
    const newTransaction: ITransaction = {
      date,
      category,
      description,
      amount,
    };

    setTransactions((prevTransactions: ITransaction[]) => [
      ...prevTransactions,
      newTransaction,
    ]);
  }

  return (
    <>
      <Card className="add-transaction-section" margin="10px 0">
        <Box p="30px 4px">
          <Text className="transactions-title">Date</Text>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="date"
            onChange={handleSetData}
            value={date}
          />
        </Box>
        <Box>
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
        <Box>
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
        <Box>
          <Text className="transactions-title">Amount</Text>
          <Input
            placeholder="Enter Amount"
            size="md"
            type="number"
            variant="flushed"
            onChange={handleSetAmount}
            value={amount}
          />
        </Box>
        <Box>
          <CustomButton onClick={handleCreateTransaction}>Add</CustomButton>
        </Box>
      </Card>
    </>
  );
};
