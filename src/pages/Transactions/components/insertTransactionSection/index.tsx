import { Box, Card, Input, Select, Text } from "@chakra-ui/react";
import { CustomButton } from "../../styles";

export const InsertTransactionSection = () => (
  <>
    <Card className="add-transaction-section" margin="10px 0">
      <Box p="30px 4px">
        <Text className="transactions-title">Date</Text>
        <Input placeholder="Select Date and Time" size="md" type="date" />
      </Box>
      <Box>
        <Text className="transactions-title">Category</Text>
        <Select placeholder="Select Category" size="md">
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
        />
      </Box>
      <Box>
        <Text className="transactions-title">Amount</Text>
        <Input
          placeholder="Enter Amount"
          size="md"
          type="number"
          variant="flushed"
        />
      </Box>
      <Box>
        <CustomButton>Add</CustomButton>
      </Box>
    </Card>
  </>
);
