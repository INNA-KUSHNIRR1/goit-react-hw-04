import clsx from "clsx";
import style from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ submit, isBtnDisabled, setIsBtnDisabled }) => {
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
          backgroundColor: "rgba(146, 148, 248, 0.4)",
          borderRadius: "0px",
        },
      });
      return;
    }

    submit(textInput);
    form.reset();
  };
  const handleInput = (e) => {
    const text = e.target.value;
    text !== "" && setIsBtnDisabled(false);
  };
  return (
    <header className={style.header}>
      <form
        className={style.form}
        onSubmit={handleSubmit}
        onInput={handleInput}
      >
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="text"
        />
        <button
          className={clsx(isBtnDisabled ? style.btnDisabled : style.btn)}
          type="submit"
          disabled={isBtnDisabled}
        >
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};
export default SearchBar;
