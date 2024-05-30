import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css"

const ImageGallery = ({ images }) => {
  console.log("ImageGallery", images);
  return (
    <ul className={style.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard id={image.id} alt={image.alt_description} url={image.urls.full}  />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
