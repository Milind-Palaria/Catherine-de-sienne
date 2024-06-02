import MainHero from '@/components/MainHero'
import HeaderBox from '@/components/HeaderBox';

const Home = () => {
  const loggedIn = { firstName: 'Milind', lastName: 'Palaria', email: 'palaria23@gmail.com' };
  return (
      <div>
            <MainHero/>
            <div>Home</div>
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      </section>
    </div>
  )
}

export default Home