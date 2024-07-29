import { useState } from "react";
import AddModal from "../AddModal/AddModal";
import css from "./AddNewUser.module.css";

export default function AddNewUser() {
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
        Add
      </button>
      <AddModal closeAddModal={closeAddModal} addModalIsopen={addModalIsopen} />
    </>
  );
}
