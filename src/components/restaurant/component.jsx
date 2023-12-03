
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
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

        <Menu menu={menu} className={MenuStyle}/>

        <Reviews reviews={reviews} className={ReviewsStyle}/>

        <ReviewForm className={ReviewFormStyle}/>


    </div>
  );
};
