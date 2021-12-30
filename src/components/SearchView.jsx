import Hero from './Hero';

// Key: 9d39ef21be32363db42fda6e16991360
// Search: https://api.themoviedb.org/3/search/movie?api_key=9d39ef21be32363db42fda6e16991360&language=en-US&query=''''''&page=1&include_adult=false

const SearchView = (props) => {
  const title = `You are seaching for "${props.keyword}"`;

  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
