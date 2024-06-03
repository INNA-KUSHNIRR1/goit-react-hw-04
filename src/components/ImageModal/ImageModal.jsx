import style from "./ImageModal.module.css";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#232224",
    border: "2px solid rgb(122 123 131)",
    minWidth: "300px",
    maxWidth: "500px",
  },
};
const ImageModal = ({ isOpen, likes, author, srcModal, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        overlayClassName={style.overlay}
        style={customStyles}
      >
        <img src={srcModal} alt="Selected" />
        <div className={style.div}>
          <div className={style.title}>
            Author:<p className={style.text}>{author}</p>
          </div>
          <div className={style.title}>
            <FcLike />
            <p className={style.text}>{likes}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ImageModal;
