import style from "./ImageCard.module.css";

const ImageCard = ({ srcForModal, alt, srcSmall, onImageClick }) => {
  return (
    <div className={style.card}>
      <img
        src={srcSmall}
        alt={alt}
        width="300"
        onClick={() => onImageClick(srcForModal)}
      />
    </div>
  );
};
export default ImageCard;
