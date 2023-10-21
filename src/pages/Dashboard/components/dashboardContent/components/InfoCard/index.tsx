import { Text } from "@chakra-ui/react";
import { CardContainer } from "./styles";
import { Bank, MinusCircle, Money, PiggyBank } from "@phosphor-icons/react";

interface InfoCardProps {
  type: "Expenses" | "Savings" | "Investiments" | "Incomes";
}

export const InfoCard = ({ type }: InfoCardProps) => {
  const iconsByTypes = {
    Expenses: <MinusCircle fontSize={70} weight="fill" className="icon" />,
    Incomes: <Money fontSize={70} weight="fill" className="icon" />,
    Savings: <PiggyBank fontSize={70} weight="fill" className="icon" />,
    Investiments: <Bank fontSize={70} weight="fill" className="icon" />,
  };

  const icon = iconsByTypes[type];

  return (
    <CardContainer backgroundColor={type}>
      <Text className="paragraph" fontSize={"lg"} color={type}>
        R$ 56,83
      </Text>
      {icon}{" "}
      <Text className="operationType" fontSize={"lg"}>
        {type}
      </Text>
    </CardContainer>
  );
};
