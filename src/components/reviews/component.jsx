
import { ReviewItem } from "../review-item/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Title,
  ReviewStyle
} = styles;

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classNames(Container, className)}>
      <h4 className={classNames(Title)}>Отзывы</h4>
      {
        reviews.map((item) => (
          <ReviewItem text={item.text} className={ReviewStyle}/>
        ))
      }
    </div>
  );
};
