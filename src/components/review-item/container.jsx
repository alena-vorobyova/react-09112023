
import { selectReviewById } from "../../redux/features/entities/review/selectors";
import { ReviewItem } from "./component";
import { useSelector } from "react-redux";

export const ReviewItemContainer = ({ reviewIds, className }) => {
  const review = useSelector((state => selectReviewById(state, reviewIds)))

  return (
      <ReviewItem review={review} className={className}/>
  );
};