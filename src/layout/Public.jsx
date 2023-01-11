import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

const Public = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main className="bg-lightGray">
        {navigation.state === 'loading' && (
          <div className="text-xl text-red-600">Cargando</div>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Public;
