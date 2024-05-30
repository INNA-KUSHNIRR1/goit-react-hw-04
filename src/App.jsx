import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImagesFromApi from "./api/api";

function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  console.log("State images", images);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await fetchImagesFromApi(query, page);
        setImage((prevImages) => [...prevImages, ...results]);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && fetchImages();
  }, [query, page]);

  const searchImages = (textInput) => {
    setImage([]);
    setPage(1);
    setQuery(textInput);
  };
  const showNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <SearchBar submit={searchImages}></SearchBar>
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={showNextPage} />
      )}
      <ImageModal />
    </>
  );
}

export default App;
