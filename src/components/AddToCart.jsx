import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import { setAddItemToCart } from '../features/CartSlice';

const AddToCart = ({ book }) => {
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);

  const onAddToCart = () => {
    setProcessing(true);
    const price = parseFloat(book.price.replace('$', ''));
    const item = {
      product: book.isbn13,
      title: book.title,
      subtitle: book.subtitle,
      image: book.image,
      price: price,
    };
    dispatch(setAddItemToCart(item));
    setTimeout(() => {
      setProcessing(false);
    }, 100);
  };

  return (
    <div className="flex items-center gap-3 text-white">
      {book.price !== '$0.00' && (
        <button
          type="button"
          disabled={processing}
          className=" flex  px-3 py-1 bg-slate-900 rounded   shadow shadow-sky-200 disabled:opacity-50"
          onClick={() => {
            onAddToCart();
          }}
        >
          <MdAddShoppingCart className="icon-style" /> Cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;
