import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import css from "./Search.module.css";

export default function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.search}>
      <p>find some user</p>
      <input onChange={handleSearch} type="text" placeholder="user's name" />
    </div>
  );
}
