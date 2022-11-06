import { useState, useEffect } from 'react';
import searchImgApi from 'utils/searchImgApi';
import { Wrapper } from './App.styled';
import Button from './Button/Button';
import ImageGallary from './ImageGallery/ImageGallary';
import Loader from './Loader/Loader';
import SearchBar from './SearchBar/SearchBar';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    searchImgApi(query, page)
      .then(r => {
        if (r.hits.length === 0) {
          throw new Error(
            `Oooops, shit happens :( We don\`t find photos on request: '${query}'`
          );
        }
        return r;
      })
      .then(data => {
        setImages(state => (page === 1 ? data.hits : [...state, ...data.hits]));
        setTotalPages(Math.ceil(data.totalHits / 12));
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page, query]);

  const searchQuery = search => {
    setQuery(search);
    setPage(1);
    setImages([]);
  };
  return (
    <Wrapper>
      {isLoading && <Loader />}
      <SearchBar setQuery={searchQuery} />
      {error && <h2>{error}</h2>}

      <ImageGallary images={images} />
      {images.length > 0 && totalPages > page && (
        <Button updatePage={() => setPage(page + 1)} />
      )}
    </Wrapper>
  );
}
