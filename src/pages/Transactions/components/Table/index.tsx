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
    <Card padding="20px" borderRadius="5px">
      <TableContainer className="table-container">
        <Table size="md" variant="striped" colorScheme="gray" className="table">
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
                <Td
                  width={["auto", "auto", "auto", "25%"]}
                  maxW={["25%", "25%", "25%", "25%"]}
                  isTruncated
                >
                  {transaction.description}
                </Td>
                <Td
                  width={["auto", "auto", "auto", "15%"]}
                  maxW={["15%", "15%", "15%", "15%"]}
                  isTruncated
                >
                  {transaction.amount}
                </Td>
                <Td
                  width={["auto", "auto", "auto", "20%"]}
                  maxW={["20%", "20%", "20%", "20%"]}
                  isTruncated
                >
                  {transaction.date}
                </Td>
                <Td
                  width={["auto", "auto", "auto", "20%"]}
                  maxW={["20%", "20%", "20%", "20%"]}
                  isTruncated
                >
                  {transaction.category}
                </Td>
                <Td
                  width={["auto", "auto", "auto", "10%"]}
                  maxW={["10%", "10%", "10%", "10%"]}
                  isTruncated
                >
                  {transaction.transactionType}
                </Td>
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
