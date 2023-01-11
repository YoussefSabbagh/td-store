import React from 'react';
import { useDispatch } from 'react-redux';

import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from '../../features/CartSlice';

const CartItem = ({
  item: { product, title, subtitle, image, price, qty },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        product,
        title,
        subtitle,
        image,
        price,
        qty,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        product,
        title,
        subtitle,
        image,
        price,
        qty,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        product,
        title,
        subtitle,
        image,
        price,
        qty,
      })
    );
  };

  return (
    <>
      <div className="flexB px-4 md:px-8  w-full">
        <div className="flex items-center gap-4">
          <div className="relative rounded p-0 hover:scale-105 transition-all duration-75 max-w-[6rem] ease-in-out m bg-myBlack">
            <img
              src={image}
              alt={`img/cart-item/${product}`}
              className="w-full object-cover"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-myWhite text-myBlack text-xs px-1 rounded">
              ${(price * 1).toFixed(2)}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="">
              <h2 className="font-semibold text-sm  md:text-lg md:text-darkBlue">
                {title}
              </h2>
              <p className="text-sm">{subtitle}</p>
            </div>

            <div className="flexB w-full max-w-[200px]">
              <button
                type="button"
                onClick={onDecreaseItemQTY}
                className="bg-myBlack rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <FaMinus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-myBlack rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flexC">
                {qty}
              </div>
              <button
                type="button"
                onClick={onIncreaseItemQTY}
                className="bg-myBlack rounded w-6 h-6 lg:w-5 lg:h-5 flexC active:scale-90"
              >
                <FaPlus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-4">
          <div className="grid items-center justify-center">
            <p className="lg:text-lg font-medium">
              ${(price * qty).toFixed(2)}
            </p>
          </div>

          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-myBlack rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
              onClick={onRemoveItem}
            >
              <FaRegTrashAlt className="w-5 h-5 text-myWhite" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
