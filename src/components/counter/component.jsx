import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Button,
  Count
} = styles;

export const Counter = ({ count, onRemoveClick, onAddClick }) => {
  return (
    <div className={classNames(Container)}>
      <button className={classNames(Button)} onClick={onRemoveClick}>-</button>
      <span className={classNames(Count)}>{count}</span>
      <button className={classNames(Button)} onClick={onAddClick}>+</button>
    </div>
  );
};
