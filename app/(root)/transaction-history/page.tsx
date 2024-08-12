import HeaderBox from '@/components/HeaderBox'
import DotPattern from '@/components/magicui/dot-pattern';
import { MainSidebarComponent } from '@/components/MainSidebarComponent';
import { Pagination } from '@/components/Pagination';
import { PaymentHistoryLamp } from '@/components/PaymentHistoryLamp';

import TransactionsTable from '@/components/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { cn, formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })


  const rowsPerPage = 10;
  const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account?.transactions.slice(
    indexOfFirstTransaction, indexOfLastTransaction
  )
  return (
    // <div className="transactions">
    //   <div className="transactions-header">
    //     <HeaderBox 
    //       title="Transaction History"
    //       subtext="See your bank details and transactions."
    //     />
    //   </div>

    // <div className="space-y-6">
    //   <div className="transactions-account">
    //     <div className="flex flex-col gap-2">
    //       <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
    //       <p className="text-14 text-blue-25">
    //         {account?.data.officialName}
    //       </p>
    //       <p className="text-14 font-semibold tracking-[1.1px] text-white">
    //         ●●●● ●●●● ●●●● {account?.data.mask}
    //       </p>
    //     </div>

    //     <div className='transactions-account-balance'>
    //       <p className="text-14">Current balance</p>
    //       <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
    //     </div>
    //   </div>

    //   <section className="flex w-full flex-col gap-6">
    //     <TransactionsTable 
    //       transactions={currentTransactions}
    //     />
    //       {totalPages > 1 && (
    //         <div className="my-4 w-full">
    //           <Pagination totalPages={totalPages} page={currentPage} />
    //         </div>
    //       )}
    //   </section>
    // </div>
    // </div>
    <section className='home min-h-[100vh] relative bg-[#0D090A] max-md:px-4 !overflow-x-hidden'>
      <div className='fixed '>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(70vh_circle_at_center,white,transparent)] !z-0",
            "md:[mask-image:radial-gradient(45vh_circle_at_center,white,transparent)] !z-0"
          )}
        />
      </div>
      <MainSidebarComponent />
      <div className="home-content">
        <header className="home-header">
          <PaymentHistoryLamp user={loggedIn?.firstName || 'Guest'} />
          <div className="relative z-[2] mt-[25vh] md:mt-[32vh] mx-[3vw] pb-7 ">

            <section className=" size-full pt-5">

              {/* <AnimatedTransferForm accounts={accounts.data} /> */}
            </section>
          </div>
          <div>
            <div className="transactions-account">
              <div className="flex flex-col gap-2">
                <h2 className="text-18 font-bold text-white">{account?.data.name}</h2>
                <p className="text-14 text-blue-25">
                  {account?.data.officialName}
                </p>
                <p className="text-14 font-semibold tracking-[1.1px] text-white">
                  ●●●● ●●●● ●●●● {account?.data.mask}
                </p>
              </div>

              <div className='transactions-account-balance'>
                <p className="text-14">Current balance</p>
                <p className="text-24 text-center font-bold">{formatAmount(account?.data.currentBalance)}</p>
              </div>
            </div>

            <section className="flex w-full flex-col gap-6">
              <TransactionsTable
                transactions={currentTransactions}
              />
              {totalPages > 1 && (
                <div className="my-4 w-full">
                  <Pagination totalPages={totalPages} page={currentPage} />
                </div>
              )}
            </section>
          </div>
        </header>

      </div>
    </section>
  )
}

export default TransactionHistory