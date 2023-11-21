import { useState } from "react";
import { Counter } from "../Counter/component";

export const Dish = ({ name }) => {
  const [ count, setCount ] = useState(0);

  const increaseNumberDish = () => {
    if (count === 5) {
      return null;
    }

    return setCount(count + 1);
  }

  const reduceNumberDish = () => {
    if (count === 0) {
      return null;
    }
    
    return setCount(count - 1);
  }

  return (
    <div style={{backgroundColor: '#908e8d', padding: '20px'}}>
      <span>{ name }</span>
      <Counter count={count} onRemoveClick={reduceNumberDish} onAddClick={increaseNumberDish}/>
    </div>
  );
};
