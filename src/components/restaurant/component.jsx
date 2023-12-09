
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";
import { ReviewForm } from "../review-form/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Title,
  ReviewsStyle,
  ReviewFormStyle,
  MenuStyle
} = styles;

export const Restaurant = ({restaurant}) => {
  const {id, name, menu, reviews} = restaurant;

  return (
    <div className={classNames(Container)}>
      <h3 className={classNames(Title)}>{name}</h3>

        <MenuContainer restaurantId={id} className={MenuStyle}/>

        <ReviewsContainer restaurantId={id} className={ReviewsStyle}/>

        <ReviewForm className={ReviewFormStyle}/>


    </div>
  );
};
