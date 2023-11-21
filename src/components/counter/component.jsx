export const Counter = ({ count, onRemoveClick, onAddClick }) => {
  return (
    <div style={{backgroundColor: '#c6c4c2', padding: '20px', display: 'inline-block'}}>
      <button onClick={onRemoveClick}>-</button>
      <span>{count}</span>
      <button onClick={onAddClick}>+</button>
    </div>
  );
};
