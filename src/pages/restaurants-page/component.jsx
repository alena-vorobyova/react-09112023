
import { Filter } from "../../components/filter/component";
import { Restaurants } from "../../components/restaurants/component";

export const RestaurantsPage = ({ restaurants }) => {
  const restaurantsName = Array.from(new Set(restaurants.map(({ name }) => name)));

  return (
    <div>
      <Filter
        name={restaurantsName}
      />

      <Restaurants
        restaurants={restaurants}
      />
    </div>
  );
};
