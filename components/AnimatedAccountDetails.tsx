"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import TransactionsTable from "@/components/TransactionsTable";
import { formatAmount } from "@/lib/utils";
import { Pagination } from "./Pagination";

interface AnimatedAccountDetailsProps {
  account: Account | null;
  currentTransactions: Transaction[];
  totalPages: number;
  currentPage: number;
}

const AnimatedAccountDetails: React.FC<AnimatedAccountDetailsProps> = ({
  account,
  currentTransactions,
  totalPages,
  currentPage,
}) => {
  useEffect(() => {
    console.log("Account:", account);
    console.log("Current Transactions:", currentTransactions);
  }, [account, currentTransactions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative z-[2] mt-[25vh] md:mt-[32vh] mx-[3vw] pb-7"
    >
      <div className="transactions-account max-md:w-[85vw] max-md:m-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-18 font-bold text-white">
            {account?.data?.name || "Account Details Unavailable"}
          </h2>
          <p className="text-14 text-blue-25">
            {account?.data?.officialName || "Official Name Not Available"}
          </p>
          <p className="text-14 font-semibold tracking-[1.1px] text-white">
            ●●●● ●●●● ●●●● {account?.data?.mask || "N/A"}
          </p>
        </div>

        <div className="transactions-account-balance">
          <p className="text-14">Current balance</p>
          <p className="text-24 text-center font-bold">
            {formatAmount(account?.data?.currentBalance || 0)}
          </p>
        </div>
      </div>

      <section className="flex w-[85vw] flex-col gap-6 mt-4">
        <TransactionsTable transactions={currentTransactions || []} />
        {totalPages > 1 && (
          <div className="my-4 w-full text-white">
            <Pagination totalPages={totalPages} page={currentPage} />
          </div>
        )}
      </section>
    </motion.div>
  );
};

export default AnimatedAccountDetails;
