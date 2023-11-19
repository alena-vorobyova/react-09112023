
import { Restaurant } from "../restaurant/component";

export const  Restaurants = ({ restaurants }) => {

  return (
    <div style={{backgroundColor: '#ffffff', padding: '20px'}}>
      {restaurants.map((item) => (
        <Restaurant key={item.id} restaurant={item} />
      ))}
    </div>
  );
};
