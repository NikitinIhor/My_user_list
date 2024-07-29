import { useState } from "react";
import AddModal from "../AddModal/AddModal";
import css from "./ButtonAddUser.module.css";

export default function ButtonAddUser() {
  const [addModalIsopen, setAddModalIsopen] = useState(false);

  const openAddModal = () => {
    setAddModalIsopen(true);
  };
  const closeAddModal = () => {
    setAddModalIsopen(false);
  };
  return (
    <>
      <button onClick={openAddModal} className={css.add} type="button">
        Add new user
      </button>
      <AddModal closeAddModal={closeAddModal} addModalIsopen={addModalIsopen} />
    </>
  );
}
