
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurant}) => {
  const {id, name, menu, reviews} = restaurant;
  return (
    <div style={{backgroundColor: '#c6c4c2', padding: '20px', marginBottom: '20px'}}>
      <h3>{name}</h3>

      <Menu menu={menu} />

      <Reviews reviews={reviews} />
    </div>
  );
};
