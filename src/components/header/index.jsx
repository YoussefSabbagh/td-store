import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setLogin, setLogout } from '../../features/AuthSlice';
import { selectTotalQTY } from '../../features/CartSlice';

import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';

import logo from '../../assets/image/logos/td-trans.png';

const Header = () => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);
  const user = useSelector(selectUser);
  const totalQTY = useSelector(selectTotalQTY);

  const dispatch = useDispatch();

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  const handleLogin = () => {
    const user = {
      name: 'pedro',
      token: '123',
      email: 'pedro@correo.com',
      avatar: 'https://i.pravatar.cc/150?=pedro',
      roles: ['USER'],
    };
    dispatch(setLogin(user));
  };

  const handleLogout = async () => {
    dispatch(setLogout());
  };

  return (
    <header className="flexB fixed top-0 z-20 h-[80px] w-full bg-primary-100 py-0 px-8 md:px-20 ">
      <div className="flexB w-full">
        <div className="w-[80px]">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flexB mr-4 space-x-4 md:mr-0">
          <nav className="flexB mr-0 md:mr-8">
            <ul
              className={`list-none flex justify-center items-center text-center ease-in-out duration-300 uppercase mobileMenu md:desktopMenu ${
                showMobileMenu ? 'opacity-100 left-0' : 'md:left-0'
              }`}
            >
              <li
                className="mt-8 text-center text-3xl md:mt-0 md:text-base "
                onClick={handleShowToggleMenu}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-cta' : ' text-myDark hover:text-cta'
                  }
                >
                  Home
                </NavLink>
              </li>

              <li
                className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                onClick={handleShowToggleMenu}
              >
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? 'text-cta' : ' text-myDark hover:text-cta'
                  }
                >
                  Books
                </NavLink>
              </li>

              <li
                className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                onClick={handleShowToggleMenu}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'text-cta' : ' text-myDark hover:text-cta'
                  }
                >
                  Contacto
                </NavLink>
              </li>

              {!user && (
                <li
                  className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                  onClick={handleShowToggleMenu}
                >
                  <button
                    type="button"
                    className="rounded-md bg-myBlack px-8 py-2 text-myWhite hover:bg-cta hover:text-myWhite"
                    onClick={handleLogin}
                  >
                    Ingresar
                  </button>
                </li>
              )}

              {user && (
                <li
                  className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                  onClick={handleShowToggleMenu}
                >
                  <button
                    type="button"
                    className="rounded-md bg-myBlack px-8 py-2 text-myWhite hover:bg-cta hover:text-myWhite"
                    onClick={handleLogout}
                  >
                    Salir
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center mx-4 md:mr-0">
        <div className="flexB space-x-5 cursor-pointer">
          <div className="relative">
            <NavLink
              to={`/checkout`}
              className={({ isActive }) =>
                isActive ? 'text-cta' : ' text-myDark hover:text-cta'
              }
            >
              <FaShoppingCart />
              <span className="text-xs w-4 h-4 rounded-full bg-cta text-myWhite absolute -right-[10px] -top-2 flex justify-center items-center">
                {totalQTY}
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flexB">
        {user && (
          <div className="flex items-center mx-4 md:mr-0">
            <div className="flexB space-x-5 cursor-pointer">
              <NavLink to={`/users/${user.name}`}>
                <div className="h-8 w-8">
                  <img
                    className="w-full h-full rounded-full"
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                  />
                </div>
              </NavLink>
            </div>
          </div>
        )}

        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={handleShowToggleMenu}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
