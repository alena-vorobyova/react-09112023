import { useSelector } from "react-redux";
import { FilterItem } from "../filter-item/component";
import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors";


export const RestaurantFilterItemContainer = ({ restaurantId, onClick, className }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state,restaurantId));
  const restaurantName = restaurant?.name;
  return (
      <FilterItem name={restaurantName} className={className} onClick={onClick}/>
  );
};