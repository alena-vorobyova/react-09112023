import { useState, useEffect } from "react";
import { Layout } from "../../components/layout/component";
import { RestaurantContainer } from "../../components/restaurant/container";
import { ThemeProvider } from "../../components/theme/component";
import { FilterContainer } from "../../components/filter/container";

export const RestaurantsPage = ({ className }) => {
  const [activedRestaurantId, setActivedRestaurantId] = useState(undefined);

  return (
    <ThemeProvider>
      <Layout>  
        <div className={className}>
          <FilterContainer
            onFilterItemClick={setActivedRestaurantId}
          />

          {
            !activedRestaurantId ? null : (
              <RestaurantContainer
                restaurantId={activedRestaurantId}
              />
            )
          }
        </div>
      </Layout>
    </ThemeProvider>
  );
};
