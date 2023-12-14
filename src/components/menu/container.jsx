
import { selectRestaurantDishIds } from "../../redux/features/entities/restaurant/selectors";
import { Menu } from "./component";
import { useSelector } from "react-redux";
import { getDishes } from "../../redux/features/entities/dish/thunks/get-dishes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const MenuContainer = ({ restaurantId }) => {
  const restaurantDishIds = useSelector((state) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);

  return (
      <Menu dishIds={restaurantDishIds}/>
  );
};