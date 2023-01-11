import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import emptybag from '../../assets/image/pictures/emptybag.png';

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flexC flex-col h-screen px-11 text-center gap-7">
        <div className="w-3/4 h-[40vh]">
          <img
            src={emptybag}
            alt="emptybag/img"
            className="w-full h-full object-cover object-center transition-all duration-300 hover:scale-110"
          />
        </div>
        <button
          type="button"
          className=" flexB space-x-4 rounded bg-myBlack hover:bg-cta px-4 py-2"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="w-5 h-5 text-white stroke-[2]" />
          <span className="text-myWhite">Seguir Comprando</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
