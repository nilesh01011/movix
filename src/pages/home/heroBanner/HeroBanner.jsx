import { useEffect, useState } from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

function HeroBanner() {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch('/movie/upcoming');

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data, url.backdrop]);

  // const searchQueryHandler = (event) => {
  //   if (event.key === 'Enter' && query.length > 0) {
  //     navigate(`/search/${query}`);
  //   }
  // };

  const handleSearchResult = (e) => {
    e.preventDefault();

    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <form className="searchInput" onSubmit={handleSearchResult}>
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                // onKeyUp={searchQueryHandler}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
