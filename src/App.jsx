import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImagesFromApi from "./api/api";
import RequestNotFound from "./components/RequestNotFound/RequestNotFound";

function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [srcModal, setSrcModal] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [likes, setLikes] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  

  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results, total_pages } = await fetchImagesFromApi(query, page);
        setImage((prevImages) => [...prevImages, ...results]);
        results.length === 0 && setIsEmpty(true);
        results.length > 0 && setIsBtnDisabled(true);

        setTotalPages(total_pages);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && fetchImages();
  }, [query, page]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  const searchImages = (textInput) => {
    setImage([]);
    setPage(1);
    setQuery(textInput);
    setIsEmpty(false);
  };

  const showNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (likes, author, srcModal) => {
    setSrcModal(srcModal);
    setAuthor(author);
    setLikes(likes);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSrcModal(null);
    setAuthor(null);
    setLikes(null);
  };

  return (
    <>
      <SearchBar
        submit={searchImages}
        isBtnDisabled={isBtnDisabled}
        setIsBtnDisabled={setIsBtnDisabled}
        
      ></SearchBar>
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isEmpty && !isLoading && <RequestNotFound />}
      <ImageModal
        likes={likes}
        srcModal={srcModal}
        author={author}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={showNextPage} />
      )}
    </>
  );
}

export default App;
