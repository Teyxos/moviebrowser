import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setmovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9d39ef21be32363db42fda6e16991360&language=en-US`
    ).then((res) =>
      res.json().then((res) => {
        setmovieDetails(res);
        setIsLoading(false);
      })
    );
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text='Loading ...' />;
    } else if (movieDetails && !isLoading) {
      const posterUrl = `http://image.tmdb.org/t/p/original/${movieDetails['poster_path']}`;
      const backdropUrl = movieDetails['backdrop_path']
        ? `http://image.tmdb.org/t/p/original/${movieDetails['backdrop_path']}`
        : 'https://via.placeholder.com/350x150';

      return (
        <>
          <Hero text={movieDetails['original_title']} backdrop={backdropUrl} />
          <div className='container my-5'>
            <div className='row'>
              <div className='col-md-3'>
                <img
                  src={
                    movieDetails['poster_path']
                      ? posterUrl
                      : 'https://via.placeholder.com/300x500.png'
                  }
                  className='img-fluid shadow rounded'
                />
              </div>
              <div className='col-md-9'>
                <h2>{movieDetails['original_title']}</h2>
                <p className='lead'>
                  {movieDetails['overview']
                    ? movieDetails['overview']
                    : 'This movie has no overview'}
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
