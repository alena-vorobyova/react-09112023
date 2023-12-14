import { useEffect } from "react";
import { RestaurantsPage } from "./component";
import { getRestaurants } from "../../redux/features/entities/restaurant/thunks/get-restaurants";
import { useDispatch } from "react-redux";

export const RestaurantsPageContainer = ({ className }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])


  return (
    <RestaurantsPage className={className}/>
  );
};
