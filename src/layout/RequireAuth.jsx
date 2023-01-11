import { useLocation, Navigate, Outlet, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/AuthSlice';

import Header from '../components/header';
import Footer from '../components/footer';

const RequireAuth = () => {
  const user = useSelector(selectUser);

  const navigation = useNavigation();
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="bg-primary-100">
        {navigation.state === 'loading' && (
          <div className="text-xl text-red-600">Cargando</div>
        )}
        {user ? (
          <Outlet />
        ) : (
          <Navigate to="/login" state={{ from: location }} replace />
        )}
      </main>
      <Footer />
    </>
  );
};
export default RequireAuth;
