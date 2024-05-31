import style from "./ImageModal.module.css";
import Modal from "react-modal";

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
  },
};
const ImageModal = ({ isOpen, selectedImage, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        overlayClassName={style.overlay}
        style={customStyles}
      >
        <img src={selectedImage} alt="Selected" />
      </Modal>
    </>
  );
};
export default ImageModal;
