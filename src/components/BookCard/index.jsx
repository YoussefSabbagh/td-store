import { Link } from 'react-router-dom';

import AddToCart from '../AddToCart';
const BookCard = ({ book }) => {
  return (
    <article
      className={`relative grid items-center justify-items-center rounded-xl py-2 px-2 transition-all duration-700 ease-in-out w-full hover:scale-105 border-4 border-primary`}
    >
      <div className={`flex items-center justify-center`}>
        <img
          src={book.image}
          alt={book.title}
          className={`transitions-theme hover:-rotate-12 object-cover  `}
        />
      </div>
      <div className={`grid items-center justify-items-center text-darkBlue `}>
        <h2 className="font-bold">{book.title}</h2>
        <h2 className="">{book.subtitle}</h2>
        <div className=" flex items-center justify-between w-28 my-2">
          <span className="font-semibold mr-2">Precio:</span>
          <p className="flex items-center bg-white/80  px-1 rounded blur-effect-theme text-black">
            {book.price}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <AddToCart book={book} />
          <Link to={`/books/${book.isbn13}`}>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-3 py-2 shadow shadow-sky-200 text-sm text-black font-semibold"
            >
              Detalles
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
