
import { selectRestaurantDishIds } from "../../redux/features/entities/restaurant/selectors";
import { Menu } from "./component";
import { useSelector } from "react-redux";

export const MenuContainer = ({ restaurantId }) => {
  const dishes= useSelector((state => selectRestaurantDishIds(state, restaurantId)))

  return (
      <Menu key={restaurantId} dishIds={dishes}/>
  );
};