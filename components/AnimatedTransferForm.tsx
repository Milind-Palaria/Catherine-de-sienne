"use client"

import { motion } from "framer-motion";

import React from "react";
import PaymentTransferForm from "@/components/PaymentTransferForm";

interface AnimatedTransferFormProps {
  accounts: Account[];
}

const AnimatedTransferForm: React.FC<AnimatedTransferFormProps> = ({ accounts }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }} 
      className="size-full pt-5"
    >
      <PaymentTransferForm accounts={accounts} />
    </motion.section>
  );
};

export default AnimatedTransferForm;
