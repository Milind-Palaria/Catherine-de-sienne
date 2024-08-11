"use client"

import { motion } from "framer-motion";
import React from "react";
import BankCard from "@/components/BankCard";

interface AnimatedBankCardsProps {
  accounts: Account[];
  userName: string;
}

const AnimatedBankCards: React.FC<AnimatedBankCardsProps> = ({ accounts, userName }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
      {accounts.map((a: Account) => (
        <motion.div
          key={a.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4}}
        >
          <BankCard
            account={a}
            userName={userName}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBankCards;
