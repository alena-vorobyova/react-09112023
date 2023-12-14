
import { selectDishById } from "../../redux/features/entities/dish/selectors";
import { Dish } from "./component";
import { useSelector } from "react-redux";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state => selectDishById(state, dishId)))

  return (
      <Dish dish={dish}/>
  );
};