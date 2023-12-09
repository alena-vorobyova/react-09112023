
import { selectRestaurantReviewIds } from "../../redux/features/entities/restaurant/selectors";
import { Reviews } from "./component";
import { useSelector } from "react-redux";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds= useSelector((state => selectRestaurantReviewIds(state, restaurantId)))

  return (
    <Reviews reviewIds={reviewIds}/>
  );
};