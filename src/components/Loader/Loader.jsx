import { Watch } from "react-loader-spinner";

export default function Loader() {
  return (
    <Watch
      visible={true}
      height="150"
      width="200"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        marginTop: "120px",
      }}
      wrapperClass=""
    />
  );
}
