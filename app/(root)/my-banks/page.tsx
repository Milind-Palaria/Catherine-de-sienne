import AnimatedBankCards from '@/components/AnimatedBankCards';
import AnimatedTitle from '@/components/AnimatedTitle';
import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { LampDemo } from '@/components/LampDemo';
import DotPattern from '@/components/magicui/dot-pattern';
import { MainSidebarComponent } from '@/components/MainSidebarComponent';
import { MyBanksLamp } from '@/components/MyBanksLamp';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { cn } from '@/lib/utils';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  return (
    // <section className='flex bg-black-2'>
    //   <div className="my-banks">
    //     <HeaderBox 
    //       title="My Bank Accounts"
    //       subtext="Effortlessly manage your banking activites."
    //     />

    //     <div className="space-y-4">
    //       <h2 className="header-2">
    //         Your cards
    //       </h2>
    //       <div className="flex flex-wrap gap-6">
    //         {accounts && accounts.data.map((a: Account) => (
    //           <BankCard 
    //             key={accounts.id}
    //             account={a}
    //             userName={loggedIn?.firstName}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
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
      <MainSidebarComponent user={loggedIn}/>
      <div className="home-content">
        <header className="home-header">
          <MyBanksLamp user={loggedIn?.firstName || 'Guest'} />

          {/* <div className="mt-[25vh] md:mt-[30vh]"> */}
          <div className="relative z-[2] mt-[22.5vh] md:mt-[32vh] mx-[20vw] pb-7 ">

           <AnimatedTitle text={"Accounts"}/>
           <AnimatedBankCards accounts={accounts.data} userName={loggedIn?.firstName} />
          </div>
        </header>

      </div>
    </section>
  )
}

export default MyBanks