import MainHero from '@/components/MainHero'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import RecentTransactions from '@/components/RecentTransactions';
import DotPattern from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import { LampDemo } from '@/components/LampDemo';
import { MainSidebarComponent } from '@/components/MainSidebarComponent';
import { Landing } from '@/components/Landing';
import { NavigatingCards } from '@/components/NavigatingCards';
import { FeaturesSection } from '@/components/FeaturesSection';
// import Landing from '@/components/Landing';
// import { Landing } from '@/components/Landing';
const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  // const loggedIn = { firstName: 'Milind', lastName: 'Palaria', email: 'palaria23@gmail.com' };
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId })

  // console.log({
  //   accountsData,
  //   account
  // })

  return (
    <div>

      {/* <MainHero/> */}
      <section className="home min-h-[100vh] pb-10 relative bg-[#0D090A] md:!overflow-hidden">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(70vh_circle_at_center,white,transparent)] !z-0",
            "md:[mask-image:radial-gradient(45vh_circle_at_center,white,transparent)] !z-0"
          )}
        />
        <MainSidebarComponent />

        <div className="home-content">
          <header className="home-header">
            <LampDemo user={loggedIn?.firstName || 'Guest'} />
            {/* <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            /> */}

            {/* <TotalBalanceBox
              accounts={accountsData}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            /> */}
          </header>
          <Landing
            accountsData={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
          <NavigatingCards />
          <FeaturesSection/>
          {/* <RecentTransactions
            accounts={accountsData}
            transactions={account?.transactions}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          /> */}
        </div>
        {/* <RightSidebar
          user={loggedIn}
          transactions={accounts?.transactions}
          banks={accountsData?.slice(0, 2)}
        /> */}
      </section>
    </div>
  )
}

export default Home