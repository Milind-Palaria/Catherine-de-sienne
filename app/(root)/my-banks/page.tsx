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
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(70vh_circle_at_center,white,transparent)] !z-0",
          "md:[mask-image:radial-gradient(45vh_circle_at_center,white,transparent)] !z-0"
        )}
      />
      <MainSidebarComponent />
      <div className="home-content">
        <header className="home-header">
          <MyBanksLamp user={loggedIn?.firstName || 'Guest'} />

          {/* <div className="mt-[25vh] md:mt-[30vh]"> */}
          <div className="relative z-[2] mt-[25vh] md:mt-[32vh] mx-[20vw] pb-7 ">

            <h2 className="bg-[#000]/30 backdrop-blur-md border border-white/30 rounded-md max-w-[35vw] md:max-w-[20vw] xl:max-w-[15vw] p-[2vw] md:p-[1vw] text-xl md:text-3xl text-[rgba(0,255,255,0.45)] font-medium font-secondary text-center m-auto mb-[2vh] md:mb-[4vh]">
              Accounts
            </h2>
            <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
              {accounts && accounts.data.map((a: Account) => (
                <>
                  <BankCard
                    key={accounts.id}
                    account={a}
                    userName={loggedIn?.firstName}
                  />
                 
                </>

              ))}
            </div>
          </div>
        </header>

      </div>
    </section>
  )
}

export default MyBanks