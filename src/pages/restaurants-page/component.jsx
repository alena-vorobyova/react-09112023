import { useState } from "react";

import { Filter } from "../../components/filter/component";
import { Layout } from "../../components/layout/component";

import { Restaurant } from "../../components/restaurant/component";

import { ThemeProvider } from "../../components/theme/component";

export const RestaurantsPage = ({ restaurants, className }) => {
  const restaurantsName = restaurants.map(({ name }) => name);
  const [selectedRestaurant, setSelectedRestaurant] = useState(undefined);

  const activeRestaurant = restaurants.find(
    ({name}) => name == selectedRestaurant
  );

  
  return (
    <ThemeProvider>
      <Layout>
        <div className={className}>
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
      </Layout>
    </ThemeProvider>
  );
};
