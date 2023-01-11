import { createBrowserRouter } from 'react-router-dom';
import Public from '../layout/Public';

import {
  loaderBookDetail,
  loaderBooks,
  loaderNewBooks,
} from '../services/booksApis';

import Home from '../pages/Home';
import Books from '../pages/Books';
import NotFound from '../pages/NotFound';
// import BookDetail from '../pages/books/BookDetail';
// import Profile from '../pages/users/Profile';
import CartPage from '../pages/CartPage';
import PaymentPage from '../pages/paymentPage';
import Contact from '../pages/contact';
import Login from '../pages/login';
import RequireAuth from '../layout/RequireAuth';
// import Pendiente from '../pages/Pendiente';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />, loader: loaderBooks },
      { path: 'home', element: <Home />, loader: loaderBooks },
      { path: 'books', element: <Books /> },
      { path: 'checkout', element: <CartPage /> },
      // { path: 'books/:id', element: <BookDetail />, loader: loaderBookDetail },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      // { path: 'pendiente', element: <Pendiente /> },
    ],
  },
  {
    path: '/checkout',
    element: <RequireAuth />,
    errorElement: <NotFound />,
    children: [{ path: 'payment', element: <PaymentPage /> }],
  },
  // {
  //   path: '/users',
  //   element: <RequireAuth />,
  //   errorElement: <NotFound />,
  //   children: [
  //     { path: ':user_id', element: <Home /> },
  //     // { path: ':user_id/cart', element: <CartPage /> },
  //   ],
  // },
  // {
  //   path: '/checkout',
  //   element: <RequireAuth />,
  //   errorElement: <NotFound />,
  //   children: [
  //     { index: true, element: <CartPage /> },
  //     { path: ':user_id', element: <CartPage /> },
  //   ],
  // },
]);
