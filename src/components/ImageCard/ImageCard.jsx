import style from "./ImageCard.module.css";

const ImageCard = ({ srcForModal, alt, url, onImageClick }) => {
  return (
    <div className={style.card}>
      <img
        src={url}
        alt={alt}
        width="300"
        onClick={() => onImageClick(srcForModal)}
      />
    </div>
  );
};
export default ImageCard;
