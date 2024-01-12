import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import TopRated from './topRated/TopRated';
import Popular from './popular/Popular';
import Trending from './trending/Trending';

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
