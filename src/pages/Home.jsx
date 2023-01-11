import { useLoaderData } from 'react-router-dom';

import { SliderData } from '../data/SliderData';
import Hero from '../components/Hero/Hero';
import BooksList from '../components/bookList';

const Home = () => {
  const { books } = useLoaderData();

  return (
    <section id="home" className="gap-16 mt-[80px] py-10 md:h-full md:pb-0">
      <Hero slides={SliderData} />
      <BooksList books={books} />
    </section>
  );
};

export default Home;
