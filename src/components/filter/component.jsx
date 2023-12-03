import { FilterItem } from "../filter-item/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  FilterItemStyle
} = styles;

export const Filter = ({ name, onRestaurantSelect }) => {

  return (
    <div className={classNames(Container)}>
      {name.map((name) => (
        <FilterItem name={name} className={FilterItemStyle} onClick={() => onRestaurantSelect(name)}/>
      ))}
    </div>
  );
};
