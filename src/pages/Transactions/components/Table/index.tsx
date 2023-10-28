import {
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useContext } from "react";
import { TransactionContext } from "../../../../context/transactionContext";

export const TransactionsTable = () => {
  const { transactions } = useContext(TransactionContext)!;

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
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction, index) => (
              <Tr key={index}>
                <Td>{transaction.description}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.date}</Td>
                <Td>{transaction.category}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
