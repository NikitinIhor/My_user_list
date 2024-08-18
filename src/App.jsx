import ButtonAddUser from "./components/ButtonAddUser/ButtonAddUser";
import Search from "./components/Search/Search";
import UsersList from "./components/UsersList/UsersList";

export default function App() {
  return (
    <div className="container">
      <ButtonAddUser />
      <Search />
      <UsersList />
    </div>
  );
}
