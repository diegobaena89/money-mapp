import { Box, Text } from "@chakra-ui/react";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  DotOutline,
  Paperclip,
  PiggyBank,
} from "@phosphor-icons/react";
import { ListContainer } from "./styles";

interface TransactionsListProps {
  key: number;
  name: string;
  date: string;
  price: number;
  type: string;
  category: string;
  className?: string;
}

interface IconMap {
  [key: string]: React.ReactNode;
}

export const TransactionsList = ({
  key,
  type,
  name,
  date,
  price,
  category,
  className,
}: TransactionsListProps) => {
  const iconBasedOnType: IconMap = {
    income: <ArrowCircleUp size={25} />,
    expense: <ArrowCircleDown size={25} />,
    savings: <PiggyBank size={25} />,
    investiments: <Bank size={25} />,
  };

  return (
    <ListContainer key={key} className={className}>
      <Box className="first-box">
        {iconBasedOnType[type]}
        <Box marginLeft={14}>
          <Text fontSize={"lg"} marginBottom={2} fontWeight={"bold"}>
            {name}
          </Text>
          <Text className="description">{date}</Text>
        </Box>
      </Box>
      <Box display={"flex"} className="item-box">
        <DotOutline size={32} weight="fill" />
        <Text marginLeft={2} fontWeight={"bold"}>
          {category}
        </Text>
      </Box>
      <Box className="anex-box">
        <Paperclip size={25} />
        <Text marginLeft={10}>- $ {price}</Text>
      </Box>
    </ListContainer>
  );
};
