
export const ReviewItem = ({ text }) => {

  console.log(text, 'reviews')
  return (
    <div style={{backgroundColor: '#908e8d', padding: '20px'}}>
      { text }
    </div>
  );
};
