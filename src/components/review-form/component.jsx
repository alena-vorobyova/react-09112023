import { useReducer } from "react";
import { useState } from "react";
import { Counter } from "../counter/component";

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
    <div style={{ backgroundColor: "#c6c4c2", padding: "20px" }}>
      <h4>Оставить отзыв</h4>
      <div style={{ backgroundColor: "#908e8d", padding: "20px" }}>
        <label style={{ padding: "20px 20px 20px 0" }} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div style={{ backgroundColor: "#908e8d", padding: "20px" }}>
        <label style={{ padding: "20px 20px 20px 0" }} htmlFor="text">
          Text
        </label>
        <input
          id="text"
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
  );
};
