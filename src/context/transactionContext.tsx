import React, { createContext, useMemo } from "react";

export interface ITransaction {
  date: string;
  category: string;
  description: string;
  amount: number;
  id?: string;
}

type TransactionContextType = {
  date: string;
  setDate: (date: string) => void;
  category: string;
  setCategory: (category: string) => void;
  description: string;
  setDescription: (description: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
  transaction: ITransaction;
  setTransaction: (transaction: ITransaction) => void;
};

export const TransactionContext = createContext<
  TransactionContextType | undefined
>(undefined);

type TransactionProviderProps = {
  children: React.ReactNode;
};

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [date, setDate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [transaction, setTransaction] = React.useState({} as ITransaction);

  const contextValue: TransactionContextType = useMemo(() => {
    return {
      date,
      setDate,
      category,
      setCategory,
      description,
      setDescription,
      amount,
      setAmount,
      transaction,
      setTransaction,
    };
  }, [date, category, description, amount, transaction]);

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
