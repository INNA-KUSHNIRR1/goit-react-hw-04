import { TbFaceIdError } from "react-icons/tb";
import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <TbFaceIdError color="hsl(0, 95%, 50%)" size="40" />
      <p className={style.error}>Something went wrong... Try again later</p>
    </>
  );
};
export default ErrorMessage;
