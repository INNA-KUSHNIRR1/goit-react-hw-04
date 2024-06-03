import style from "./ImageCard.module.css";

const ImageCard = ({
  likes,
  author,
  srcModal,
  alt,
  srcSmall,
  onImageClick,
}) => {
  return (
    <div className={style.card}>
      <img
        src={srcSmall}
        alt={alt}
        width="300"
        onClick={() => onImageClick(likes, author, srcModal)}
      />
    </div>
  );
};
export default ImageCard;
