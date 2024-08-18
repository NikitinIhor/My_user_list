import Modal from "react-modal";
import UserForm from "../UserForm/UserForm";

export default function AddModal({
  setEdit,
  addModalIsopen,
  closeAddModal,
  user,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "rgb(101, 121, 101)",
      borderRadius: 8,
      color: "white",
      boxShadow: "8px 8px 8px black",
    },
  };

  return (
    <Modal style={customStyles} isOpen={addModalIsopen}>
      <UserForm setEdit={setEdit} onRequestClose={closeAddModal} user={user} />
    </Modal>
  );
}
