import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.error("Please, write the text for he search images", {
    duration: 4000,
    position: "top-center",
  });

const SearchBar = () => {
  return (
    <header className={style.header}>
      <form className={style.form}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.btn} type="submit" onClick={notify}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};
export default SearchBar;
