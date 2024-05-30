import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="60"
      width="60"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
export default Loader;
