
import { ReviewItem } from "../review-item/component";

export const Reviews = ({ reviews }) => {
  return (
    <div style={{backgroundColor: '#c6c4c2', padding: '20px'}}>
      <h4>Отзывы</h4>
      {
        reviews.map((item) => (
          <ReviewItem text={item.text} />
        ))
      }
    </div>
  );
};
