import MainHero from '@/components/MainHero'
import HeaderBox from '@/components/HeaderBox';
import AnimatedCounter from '@/components/AnimatedCounter';

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
          <AnimatedCounter amount={12000}/>
        </header>
        RECENT TRANSACTIONS
      </div>
      </section>
    </div>
  )
}

export default Home