import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFiltredUsers,
  selectLoading,
} from "../../redux/usersSlice";
import { fetchUsers } from "../../redux/usersOpt";
import { useEffect } from "react";
import User from "../User/User";
import Loader from "../Loader/Loader";
import css from "./UsersList.module.css";

export default function UsersList() {
  const dispatch = useDispatch();

  const usersList = useSelector(selectFiltredUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p className={css.error}>something went wrong :(</p>;
  if (usersList.length === 0) return <p className={css.noUsers}>no users...</p>;

  return (
    <ul className={css.list}>
      {usersList.map((user) => (
        <li className={css.item} key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}
