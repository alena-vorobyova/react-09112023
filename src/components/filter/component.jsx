import { FilterItem } from "../filter-item/component";

export const Filter = ({ name, onRestaurantSelect }) => {
  return (
    <div style={{backgroundColor: '#c6c4c2', padding: '20px'}}>
      {name.map((name) => (
        <FilterItem name={name} onClick={() => onRestaurantSelect(name)}/>
      ))}
    </div>
  );
};
