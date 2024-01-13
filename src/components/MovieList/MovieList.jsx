import PropTypes from 'prop-types';
import { useLocation, Outlet } from 'react-router-dom';
import { MovieLink, MovieList } from './MovieList.styled';

const MoviesListShow = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieLink>
            </li>
          );
        })}
       <Outlet />
      </MovieList>
   );
};

MoviesListShow.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default MoviesListShow;