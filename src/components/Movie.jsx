import { Link } from 'react-router-dom';

const Movie = ({ data }) => {
  const posterUrl = `http://image.tmdb.org/t/p/w500/${data['poster_path']}`;

  return (
    <div className='col-lg-4 col-md-5 col-6  my-5'>
      <div className='card'>
        <img
          src={
            data['poster_path']
              ? posterUrl
              : 'https://via.placeholder.com/300x500.png'
          }
          className='card-img-top img-fluid'
          alt={data['original_title']}
        />
        <div className='card-body'>
          <h5 className='card-title'>{data['title']}</h5>
          <Link to={'/movies/' + data['id']} className='btn btn-primary'>
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
