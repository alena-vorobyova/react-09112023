import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
} = styles;

export const ReviewItem = ({ text }) => {

  return (
    <div className={classNames(Container)}>
      { text }
    </div>
  );
};
