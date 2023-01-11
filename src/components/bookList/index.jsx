import { Link } from 'react-router-dom';
import BookCard from '../BookCard';

const BooksList = ({ books }) => {
  return (
    <div className="text-center">
      <h1 className=" mt-8 text-4xl"> Descubre las novedades que tenemos </h1>
      <h2 className=" mt-4 text-2xl animate-pulse">
        <Link to="/contact">
          <button className="bg-primary px-4 py-3 mb-8 rounded cursor-pointer hover:scale-105">
            Para mas información Contáctanos
          </button>
        </Link>
      </h2>

      <div className="p-10 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
        {books.books.map((book) => {
          return <BookCard key={book.isbn13} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BooksList;
