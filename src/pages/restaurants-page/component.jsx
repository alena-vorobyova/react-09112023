import { useState } from "react";

import { Filter } from "../../components/filter/component";
import { Restaurants } from "../../components/restaurants/component";

export const RestaurantsPage = ({ restaurants }) => {
  const restaurantsName = restaurants.map(({ name }) => name);
  const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

  const filteredRestaurants = restaurants.filter(
    ({name}) => name == selectedRestaurant
  );

  return (
    <div>
      <Filter
        onRestaurantSelect={setSelectedRestaurant}
        name={restaurantsName}
      />

      {
        !selectedRestaurant ? null : (
          <Restaurants
            restaurants={filteredRestaurants}
          />
        )
      }
    </div>
  );
};
