import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
      {Array.isArray(restaurants) ? (
        restaurants.map((item) => (
          <Restaurant key={item.id} restaurant={item} />
        ))
      ) : (
        <Restaurant key={restaurants.id} restaurant={restaurants} />
      )}
    </div>
  );
};
