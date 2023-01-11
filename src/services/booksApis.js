export const loaderNewBooks = async () => {
  const response = await fetch('https://api.itbook.store/1.0/new');
  const books = await response.json();

  return { books };
};

// 'https://api.itbook.store/1.0/search/title=Algol'

export const loaderBooks = async () => {
  const initialLanguages = [
    'Python',
    'Java',
    'Rubi',
    'TypeScript',
    'HTML',
    'Bootstrap',
    'Angular',
    'Nodejs',
    'Nextjs',
  ];
  const i = Math.floor(Math.random() * initialLanguages.length);
  const find = initialLanguages[i];

  const response = await fetch(`https://api.itbook.store/1.0/search/${find}`);
  const books = await response.json();

  return { books };
};

export const loaderBookDetail = async ({ params }) => {
  const response = await fetch(
    `https://api.itbook.store/1.0/books/${params.id}`
  );

  const book = await response.json();

  return { book };
};
