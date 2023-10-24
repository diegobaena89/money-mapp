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

export const TransactionsTable = () => {
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
            <Tr>
              <Td>Transaction 1</Td>
              <Td>$100.00</Td>
              <Td>2023-10-24</Td>
              <Td>Expense</Td>
            </Tr>
            <Tr>
              <Td>Transaction 2</Td>
              <Td>$50.00</Td>
              <Td>2023-10-25</Td>
              <Td>Income</Td>
            </Tr>
            <Tr>
              <Td>Transaction 3</Td>
              <Td>$200.00</Td>
              <Td>2023-10-26</Td>
              <Td>Savings</Td>
            </Tr>
            <Tr>
              <Td>Transaction 4</Td>
              <Td>$75.00</Td>
              <Td>2023-10-27</Td>
              <Td>Expense</Td>
            </Tr>
            <Tr>
              <Td>Transaction 5</Td>
              <Td>$120.00</Td>
              <Td>2023-10-28</Td>
              <Td>Income</Td>
            </Tr>
            <Tr>
              <Td>Transaction 6</Td>
              <Td>$50.00</Td>
              <Td>2023-10-29</Td>
              <Td>Savings</Td>
            </Tr>
            <Tr>
              <Td>Transaction 7</Td>
              <Td>$90.00</Td>
              <Td>2023-10-30</Td>
              <Td>Expense</Td>
            </Tr>
            <Tr>
              <Td>Transaction 8</Td>
              <Td>$150.00</Td>
              <Td>2023-10-31</Td>
              <Td>Income</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};
