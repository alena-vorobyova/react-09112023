import { useState } from "react";

import { Filter } from "../../components/filter/component";
import { Restaurant } from "../../components/restaurant/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container
} = styles;

export const RestaurantsPage = ({ restaurants }) => {
  const restaurantsName = restaurants.map(({ name }) => name);
  const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

  const activeRestaurant = restaurants.find(
    ({name}) => name == selectedRestaurant
  );
  
  return (
    <div className={classNames(Container)}>
      <Filter
        onRestaurantSelect={setSelectedRestaurant}
        name={restaurantsName}
      />

      {
        !selectedRestaurant ? null : (
          <Restaurant
            restaurant={activeRestaurant}
          />
        )
      }
    </div>
  );
};
