import {
  Box,
  Card,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { TransactionContext } from "../../../../context/transactionContext";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { handleAmountIntToFloat } from "../../../../utils/fixAmountValue";

export const TransactionsTable = () => {
  const {
    transactions: contextTransactions,
    setTransactions: setContextTransactions,
  } = useContext(TransactionContext)!;

  function handleDeleteTransaction(index: number) {
    const localStorageTransactions = localStorage.getItem("transactions");
    if (localStorageTransactions) {
      const updatedTransactions = JSON.parse(localStorageTransactions);
      updatedTransactions.splice(index, 1);
      localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
      setContextTransactions(updatedTransactions);
    }
  }

  useEffect(() => {
    const localStorageTransactions = localStorage.getItem("transactions");
    if (localStorageTransactions) {
      setContextTransactions(JSON.parse(localStorageTransactions));
    }
  }, [setContextTransactions]);

  const displayTransactions = contextTransactions;

  return (
    <Card padding="20px" borderRadius="5px">
      <TableContainer className="table-container">
        <Table size="sm" variant="striped" colorScheme="gray" className="table">
          <Thead>
            <Tr>
              <Th>Transactions</Th>
              <Th>Amount</Th>
              <Th>Date</Th>
              <Th>Category</Th>
              <Th>Type</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayTransactions.map((transaction, index) => (
              <Tr key={index}>
                <Td>
                  <Text>{transaction.description}</Text>
                </Td>
                <Td>
                  <Text>U$ {handleAmountIntToFloat(transaction.amount)}</Text>
                </Td>
                <Td>{transaction.date}</Td>
                <Td>
                  <Tag size={"md"} variant={"solid"} colorScheme="gray">
                    {transaction.category}
                  </Tag>
                </Td>
                <Td>{transaction.transactionType}</Td>
                <Td>
                  <Box>
                    <IconButton
                      style={{
                        backgroundColor: "#574E6D",
                        color: "white",
                      }}
                      aria-label="Edit transaction"
                      icon={<PencilSimple size={20} />}
                      marginRight={2}
                    />
                    <IconButton
                      style={{
                        backgroundColor: "#574E6D",
                        color: "white",
                      }}
                      aria-label="Delete transaction"
                      icon={
                        <TrashSimple
                          size={20}
                          onClick={() => handleDeleteTransaction(index)}
                        />
                      }
                    />
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
