import {
  Box,
  Card,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { TransactionContext } from "../../../../context/transactionContext";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";

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
    <Card>
      <TableContainer>
        <Table size="md" variant="striped" colorScheme="gray">
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
                <Td>{transaction.description}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.date}</Td>
                <Td>{transaction.category}</Td>
                <Td>{transaction.transactionType}</Td>
                <Td>
                  <Box display="flex" justifyContent="center">
                    <IconButton
                      style={{
                        backgroundColor: "#574E6D",
                        color: "white",
                      }}
                      margin="0 10px 0 0"
                      aria-label="Search database"
                      icon={<PencilSimple size={20} />}
                    />
                    <IconButton
                      style={{
                        backgroundColor: "#574E6D",
                        color: "white",
                      }}
                      aria-label="Search database"
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
