import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Button,
} = styles;

export const  FilterItem = ({ name, onClick }) => {
  return (
    <button className={classNames(Button)} onClick={onClick}>
      { name }
    </button>
  );
};
