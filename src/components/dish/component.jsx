import { useState } from "react";
import { Counter } from "../counter/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const {
  Container,
} = styles;

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
    <div className={classNames(Container)}>
      <span>{ name }</span>
      <Counter count={count} onRemoveClick={reduceNumberDish} onAddClick={increaseNumberDish}/>
    </div>
  );
};
