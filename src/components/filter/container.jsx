import { useSelector } from "react-redux";
import { Filter } from "../filter/component";
import { selectRestaurantIds } from "../../redux/features/entities/restaurant/selectors";


export const FilterContainer = ({ onFilterItemClick }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
        <Filter restaurantIds={restaurantIds} onFilterItemClick={onFilterItemClick}/>
  );
};