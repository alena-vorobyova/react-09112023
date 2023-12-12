
import { ReviewItemContainer } from "../review-item/container";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Title,
  ReviewStyle
} = styles;

export const Reviews = ({ reviewIds, className }) => {
  return (
    <div className={classNames(Container, className)}>
      <h4 className={classNames(Title)}>Отзывы</h4>
      {
        reviewIds.map((id) => (
          <ReviewItemContainer reviewIds={id} className={ReviewStyle}/>
        ))
      }
    </div>
  );
};
