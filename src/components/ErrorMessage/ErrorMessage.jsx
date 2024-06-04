import { TbFaceIdError } from "react-icons/tb";
import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <div className={style.errorBox}>
        <TbFaceIdError marginTop="150" color="hsl(0, 95%, 50%)" size="40" />
        <p className={style.error}>Something went wrong... Try again later</p>
      </div>
    </>
  );
};
export default ErrorMessage;
