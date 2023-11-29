import { useReducer } from "react";
import { useState } from "react";
import { Counter } from "../counter/component";

import styles from "./styles.module.css";
import classNames from "classnames";

const { 
  Container, 
  Title, 
  Inner,
  InputWrap,
  Label,
  Input
} = styles;

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const MAX_RATING = 5;
const MIN_RATING = 0;
const STEP_RATING = 0.5;

// state - current state, action - {type: 'Action Type(setName)', payload: 'data(name)'}
const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const increment = () => {
    if (formValue.rating === MAX_RATING) {
      return null;
    }

    dispatch({ type: "setRating", payload: formValue.rating + STEP_RATING });
  };

  const decrement = () => {
    if (formValue.rating === MIN_RATING) {
      return null;
    }

    dispatch({ type: "setRating", payload: formValue.rating - STEP_RATING });
  };

  return (
    <div className={classNames(Container)}>
      <h4 className={classNames(Title)}>Оставить отзыв</h4>
      <div className={classNames(Inner)}>
        <div className={classNames(InputWrap)}>
          <label className={classNames(Label)} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={classNames(Input)}
            type="text"
            value={formValue.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
        <div className={classNames(InputWrap)}>
          <label className={classNames(Label)} htmlFor="text">
            Text
          </label>
          <input
            id="text"
            className={classNames(Input)}
            type="text"
            value={formValue.text}
            onChange={(event) =>
              dispatch({ type: "setText", payload: event.target.value })
            }
          />
        </div>

          <Counter
            count={formValue.rating}
            onRemoveClick={decrement}
            onAddClick={increment}
          />
      </div>
    </div>
  );
};
