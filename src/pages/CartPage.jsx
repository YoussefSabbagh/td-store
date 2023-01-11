import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
} from '../features/CartSlice';

import CartEmpty from '../components/cartItems/CartEmpty';
import CartItem from '../components/cartItems/CartItem';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalQTY = useSelector(selectTotalQTY);
  const totalAmount = useSelector(selectTotalAmount);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <section
      id="checkout"
      className=" relative gap-16 mt-[80px] py-8 md:h-full md:pb-0"
    >
      <h1 className="p-4 mb-4 text-center text-4xl">Su carrito de compra</h1>
      <div className="grid grid-cols-1 md:gap-8 lg:grid-cols-2 px-8">
        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="w-full flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-auto h-[70vh] scroll-smooth  py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          </div>
        )}

        <div className=" relative w-full  flex flex-col justify-center items-center order-first lg:order-last">
          <div className="absolute top-0 left-20 flex space-x-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded bg-myBlack hover:bg-cta p-0.5"
            >
              <FaArrowLeft className="w-5 h-5 text-white stroke-[2]" />
            </button>
            <span className="hidden lg:block text-base font-medium text-myBlack ml-2">
              Seguir comprando
            </span>
          </div>

          <div className="absolute top-0 right-20 flex">
            <span className="hidden lg:block text-base font-medium text-slate-900 mr-2">
              Remover Todos
            </span>
            <button
              type="button"
              onClick={onClearCartItems}
              className="rounded bg-myBlack hover:bg-cta p-0.5"
            >
              <FaTrash className="w-5 h-5 text-white stroke-[2]" />
            </button>
          </div>

          <h2 className="text-2xl mt-8 mb-8 "> Resumen de la Compra</h2>

          <div className=" uppercase w-full md:w-3/4 px-5 py-2 grid items-center">
            <div className="flex items-center justify-between mb-4">
              <p className="">Cantidad Productos</p>
              <p className=" ">
                {totalQTY} {totalQTY > 1 ? 'unidades' : 'unidad'}
              </p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="">cantidad items</p>
              <p className=" ">
                {cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}
              </p>
            </div>
            <div className="flex items-center justify-between font-semibold mb-8">
              <p className="">SubTotal</p>
              <p className="">${totalAmount.toFixed(2)}</p>
            </div>
            {totalAmount > 0 && (
              <Link to="/checkout/payment">
                <div className="grid items-center gap-2">
                  <button
                    type="button"
                    className="bg-myBlack text-myWhite mb-8 p-2 rounded"
                  >
                    Pagar
                  </button>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
