import style from "./ImageCard.module.css";
const ImageCard = ({ alt, url }) => {
  return (
    <div className={style.card}>
      <img src={url} alt={alt} width="300" />
    </div>
  );
};
export default ImageCard;
