
import { DishContainer } from "../dish/container";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Title
} = styles;

export const Menu = ({ dishIds, className }) => {
  return (
    <div className={classNames(Container, className)}>
      <h4 className={classNames(Title)}>Меню:</h4>
      {
        dishIds.map((id) => (
          <DishContainer key={id} dishId={id} />
        ))
      }
    </div>
  );
};
