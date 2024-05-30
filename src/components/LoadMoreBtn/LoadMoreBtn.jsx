import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="click" className={style.btn} onClick={onClick}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
