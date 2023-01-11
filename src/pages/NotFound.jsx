import { useEffect } from 'react';
import { useRouteError, Link, useNavigate } from 'react-router-dom';
import Header from '../components/header';

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  // console.log(error);
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 15000);
  }, []);

  return (
    <>
      <Header />
      <section className=" relative gap-16 mt-[80px] py-10 h-[calc(100vh-80px)] md:pb-0 flexC flex-col">
        <div className="w-[400px] mx-auto bg-error/40 p-10 rounded-xl card content">
          <h1 className="text-2xl">400 Algo Malo ha pasado</h1>
          <h2 className="text-xl">Ooops! That page cannot be found :( </h2>
          <p>
            {error.status} - {error.statusText}
          </p>
          <p>
            Redirecting to the{' '}
            <Link
              to="/"
              className="bg-white p-2 hover:cursor-pointer rounded-md"
            >
              Homepage
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
