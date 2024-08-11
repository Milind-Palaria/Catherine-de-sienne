import HeaderBox from '@/components/HeaderBox'
import DotPattern from '@/components/magicui/dot-pattern';
import { MainSidebarComponent } from '@/components/MainSidebarComponent';
import { MyBanksLamp } from '@/components/MyBanksLamp';
import PaymentTransferForm from '@/components/PaymentTransferForm';
import { PaymentTransferLamp } from '@/components/PaymentTransferLamp';

import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { cn } from '@/lib/utils';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    // <section className="payment-transfer">
    //   <HeaderBox 
    //     title="Payment Transfer"
    //     subtext="Please provide any specific details or notes related to the payment transfer"
    //   />

    //   <section className="size-full pt-5">
    //     <PaymentTransferForm accounts={accountsData} />
    //   </section>
    // </section>
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
          <PaymentTransferLamp user={loggedIn?.firstName || 'Guest'} />
          <div className="relative z-[2] mt-[25vh] md:mt-[32vh] mx-[3vw] pb-7 ">

            <section className=" size-full pt-5">

              <PaymentTransferForm accounts={accountsData} />
            </section>
          </div>
          {/* <div className="relative z-[2] mt-[25vh] md:mt-[32vh] mx-[20vw] pb-7 ">

         <AnimatedTitle text={"Accounts"}/>
         <AnimatedBankCards accounts={accounts.data} userName={loggedIn?.firstName} />
        </div> */}
        </header>

      </div>
    </section>
  )
}

export default Transfer