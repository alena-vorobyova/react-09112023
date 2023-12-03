
import { Dish } from "../dish/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  Title
} = styles;

export const Menu = ({ menu, className }) => {
  return (
    <div className={classNames(Container, className)}>
      <h4 className={classNames(Title)}>Меню:</h4>
      {
        menu.map((item) => (
          <Dish key={item.id} name={item.name} />
        ))
      }
    </div>
  );
};
