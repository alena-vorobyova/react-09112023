import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors";
import { Restaurant } from "./component";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant =  useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <Restaurant restaurant={restaurant}/>
  );
};
