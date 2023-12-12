import { RestaurantFilterItemContainer } from "../restaurant-filter-item/container";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
  FilterItemStyle
} = styles;

export const Filter = ({ restaurantIds, onFilterItemClick }) => {
  return (
    <div className={classNames(Container)}>
      {restaurantIds.map((id) => (
        <RestaurantFilterItemContainer key={id} restaurantId={id} onClick={() => onFilterItemClick(id)} className={FilterItemStyle}/>
      ))}
    </div>
  );
};
