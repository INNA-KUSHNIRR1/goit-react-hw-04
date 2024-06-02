import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => {
        return (
          <li className={style.card} key={image.id}>
            <ImageCard
              likes={image.likes}
              author={image.user.name}
              id={image.id}
              srcModal={image.urls.regular}
              alt={image.alt_description}
              srcSmall={image.urls.small}
              onImageClick={onImageClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
