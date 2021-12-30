import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Hero text='Best movie browser of 2021' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              pariatur eius molestiae expedita illum ad ratione fugit ullam
              harum delectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
