
import { ReviewItem } from "../review-item/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Title,
} = styles;

export const Reviews = ({ reviews }) => {
  return (
    <div className={classNames(Container)}>
      <h4 className={classNames(Title)}>Отзывы</h4>
      {
        reviews.map((item) => (
          <ReviewItem text={item.text} />
        ))
      }
    </div>
  );
};
