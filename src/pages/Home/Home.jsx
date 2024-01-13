import { useState, useEffect } from 'react';
import { Title } from './Home.styled';
import { getTrending } from './../../Api/Fetch';
import  MovieListShow  from './../../components/MovieList/MovieList';
import { Loader } from './../../components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieListShow movies={trendMovies} />
      {isLoading && <Loader />}
    </main>
  );
};
export default Home;