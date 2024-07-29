import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import AddModal from "../AddModal/AddModal";
import css from "./User.module.css";

export default function User({ user }) {
  const [deleteModalIsopen, setDeleteModalIsopen] = useState(false);
  const [addModalIsopen, setAddModalIsopen] = useState(false);

  const openAddModal = () => {
    setAddModalIsopen(true);
  };
  const closeAddModal = () => {
    setAddModalIsopen(false);
  };

  const openDeleteModal = () => {
    setDeleteModalIsopen(true);
  };
  const closeDeleteModal = () => {
    setDeleteModalIsopen(false);
  };

  return (
    <>
      <div className={css.info}>
        <div className={css.container}>
          <p>name:</p>
          <span>{user.name}</span>
        </div>
        <div className={css.container}>
          <p>email:</p>
          <span>{user.email}</span>
        </div>
        <div className={css.container}>
          <p>website:</p>
          <span>{user.website}</span>
        </div>
        <div className={css.container}>
          <p>company name:</p>
          <span>{user.company?.name}</span>
        </div>
      </div>
      <div className={css.btns}>
        <button onClick={openAddModal} className={css.edit} type="button">
          Edit
        </button>
        <button onClick={openDeleteModal} className={css.delete} type="button">
          Delete
        </button>
      </div>
      <DeleteModal
        deleteModalIsopen={deleteModalIsopen}
        closeDeleteModal={closeDeleteModal}
        id={user.id}
        name={user.name}
      />
      <AddModal
        closeAddModal={closeAddModal}
        addModalIsopen={addModalIsopen}
        user={user}
      />
    </>
  );
}
