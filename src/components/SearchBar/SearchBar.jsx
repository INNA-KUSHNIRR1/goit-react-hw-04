import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ submit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const textInput = form.elements.text.value.trim();

    if (textInput === "") {
      toast("Please, write the text for the search images", {
        duration: 4000,
        position: "center-center",
        style: {
          color: "rgb(189, 187, 187)",
          backgroundColor: "rgb(13 13 27 / 80%)",
          borderRadius: "0px",
        },
      });
      return;
    }

    submit(textInput);
    form.reset();
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="text"
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};
export default SearchBar;
