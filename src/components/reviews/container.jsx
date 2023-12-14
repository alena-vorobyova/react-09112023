
import { selectRestaurantReviewIds } from "../../redux/features/entities/restaurant/selectors";
import { Reviews } from "./component";
import { useSelector } from "react-redux";
import { getReviews } from "../../redux/features/entities/review/thunks/get-reviews";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds= useSelector((state => selectRestaurantReviewIds(state, restaurantId)))
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [dispatch, restaurantId]);

  return (
    <Reviews reviewIds={reviewIds}/>
  );
};