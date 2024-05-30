import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => {
        return (
            <li className={style.card } key={image.id}>
            <ImageCard
              id={image.id}
              alt={image.alt_description}
              url={image.urls.small}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
