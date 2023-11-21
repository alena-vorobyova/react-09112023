
import { Dish } from "../dish/component";

export const Menu = ({ menu }) => {
  return (
    <div style={{backgroundColor: '#c6c4c2', padding: '20px'}}>
      <h4>Меню:</h4>
      {
        menu.map((item) => (
          <Dish key={item.id} name={item.name} />
        ))
      }
    </div>
  );
};
