import { RestaurantsPage } from "./pages/restaurants-page/component";

import "./styles/index.css";
import "./styles/general.css";

export const App = ({ restaurants }) => {
  return <RestaurantsPage restaurants={restaurants} className={'pageContent'}/>;
};
