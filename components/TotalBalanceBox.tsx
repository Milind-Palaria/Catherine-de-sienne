"use client"
import { useEffect, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`total-balance transition-opacity duration-1000 ${isVisible ? 'opacity-80 block' : 'opacity-0 hidden'} `}>
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>

          <div className="total-balance-amount flex-center gap-2 ">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox