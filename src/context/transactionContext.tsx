import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
export interface ITransaction {
  date: string;
  category: string;
  description: string;
  amount: number;
}

export type TransactionContextType = {
  date: string;
  setDate: (date: string) => void;
  category: string;
  setCategory: (category: string) => void;
  description: string;
  setDescription: (description: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
  transactions: ITransaction[];
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
};

const initialTransaction: ITransaction = {
  date: "",
  category: "",
  description: "",
  amount: 0,
};

export const TransactionContext = createContext<TransactionContextType>({
  date: "",
  setDate: () => {},
  category: "",
  setCategory: () => {},
  description: "",
  setDescription: () => {},
  amount: 0,
  setAmount: () => {},
  transactions: [initialTransaction],
  setTransactions: () => {},
});

type TransactionProviderProps = {
  children: React.ReactNode;
};

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const contextValue = useMemo(() => {
    return {
      date,
      setDate,
      category,
      setCategory,
      description,
      setDescription,
      amount,
      setAmount,
      transactions,
      setTransactions,
    };
  }, [date, category, description, amount, transactions]);

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
