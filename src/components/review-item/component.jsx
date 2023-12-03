import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
} = styles;

export const ReviewItem = ({ text, className }) => {

  return (
    <div className={classNames(Container, className)}>
      { text }
    </div>
  );
};
