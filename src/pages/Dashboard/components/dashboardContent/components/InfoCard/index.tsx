import { Text } from "@chakra-ui/react";
import { CardContainer } from "./styles";
import { Bank, MinusCircle, Money, PiggyBank } from "@phosphor-icons/react";
import { TransactionContext } from "../../../../../../context/transactionContext";
import { useContext } from "react";

interface InfoCardProps {
  type: "Expenses" | "Savings" | "Investments" | "Incomes";
}

export const InfoCard = ({ type }: InfoCardProps) => {
  const { totalIncomes, totalExpenses, totalSavings, totalInvestments } =
    useContext(TransactionContext)!;
  const iconsByTypes = {
    Expenses: <MinusCircle fontSize={70} weight="regular" className="icon" />,
    Incomes: <Money fontSize={70} weight="regular" className="icon" />,
    Savings: <PiggyBank fontSize={70} weight="regular" className="icon" />,
    Investments: <Bank fontSize={70} weight="regular" className="icon" />,
  };

  const renderAmountByType = {
    Expenses: totalExpenses,
    Incomes: totalIncomes,
    Savings: totalSavings,
    Investments: totalInvestments,
  };

  const icon = iconsByTypes[type];

  return (
    <CardContainer backgroundColor={type}>
      <Text className="paragraph" color={type}>
        R$ {renderAmountByType[type]}
      </Text>
      {icon}{" "}
      <Text className="operationType" fontSize={"lg"}>
        {type}
      </Text>
    </CardContainer>
  );
};
