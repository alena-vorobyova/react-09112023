import { useEffect } from "react";
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { ReviewItem } from "./component";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../redux/features/entities/review/thunks/get-reviews";

export const ReviewItemContainer = ({ reviewIds, className }) => {
  const review = useSelector((state => selectReviewById(state, reviewIds)))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [])

  return (
      <ReviewItem review={review} className={className}/>
  );
};