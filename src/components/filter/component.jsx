import { FilterItem } from "../../components/filter-item/component";

export const Filter = ({ name }) => {
  return (
    <div style={{backgroundColor: '#c6c4c2', padding: '20px'}}>
      {name.map((name) => (
        <FilterItem name={name} />
      ))}
    </div>
  );
};
