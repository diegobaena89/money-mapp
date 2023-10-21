import { Box, Heading, Text } from "@chakra-ui/react";
import { DashboardContent } from "./styles";
import { InfoCard } from "./components/InfoCard";
import { Header } from "./components/Header";

export const DashboardContentSection = () => {
  return (
    <DashboardContent>
      <Header />

      <Box display={"flex"} justifyContent={"space-between"} margin="20px 0">
        <InfoCard type="Incomes" />
        <InfoCard type="Expenses" />
        <InfoCard type="Savings" />
        <InfoCard type="Investiments" />
      </Box>

      <Box height={"30vh"}>
        <Heading className="heading" size="md">
          Transaction History
        </Heading>
        <Text className="paragraph">Last week</Text>
      </Box>
      <Box height={"30vh"}>
        <Heading className="heading" size="md">
          Balance
        </Heading>
      </Box>
    </DashboardContent>
  );
};
