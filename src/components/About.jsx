import Hero from './Hero';

const About = () => {
  return (
    <>
      <Hero text='About us' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className='lead'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              quaerat quia aperiam magnam, facilis commodi harum repellendus
              neque accusamus iusto est sit, culpa in dolore adipisci, aliquam
              distinctio molestiae! Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
