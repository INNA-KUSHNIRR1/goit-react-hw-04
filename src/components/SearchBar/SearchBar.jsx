import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
  const handleClick = () => {
    toast("Please, write the text for the search images", {
      duration: 4000,
      position: "bottom-center",
    });
  };
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
        <button className={style.btn} type="submit" onClick={handleClick}>
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};
export default SearchBar;
