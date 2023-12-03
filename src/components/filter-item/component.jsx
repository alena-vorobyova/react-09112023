import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Button,
} = styles;

export const  FilterItem = ({ name, onClick, className }) => {
  return (
    <button className={classNames(Button, className)} onClick={onClick}>
      { name }
    </button>
  );
};
