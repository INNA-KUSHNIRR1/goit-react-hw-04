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
  },
};
const ImageModal = ({ isOpen, selectedImage, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        style={customStyles}
      >
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </Modal>
    </>
  );
};
export default ImageModal;
