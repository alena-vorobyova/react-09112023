import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
} = styles;

export const ReviewItem = ({ review, className }) => {

  return (
    <div className={classNames(Container, className)}>
      { review.text }
    </div>
  );
};
