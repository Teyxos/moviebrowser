import Hero from './Hero';
import Movie from './Movie';

const SearchView = (props) => {
  const title = `You are seaching for "${props.keyword}"`;

  if (!props.searchResults[0] && props.keyword) {
    return (
      <>
        <Hero text={'There is no result for ' + '"' + props.keyword + '"'} />
        <h1 className='text-center my-5'>
          There is no results with that name!
        </h1>
      </>
    );
  }

  const resultHtml = props.searchResults.map((movie, i) => {
    return <Movie data={movie} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {resultHtml && (
        <div className='container'>
          <div className='row'>{resultHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
