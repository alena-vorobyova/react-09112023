
export const  FilterItem = ({ name, onClick }) => {
  return (
    <button style={{backgroundColor: '#908e8d', margin: '5px'}} onClick={onClick}>
      { name }
    </button>
  );
};
