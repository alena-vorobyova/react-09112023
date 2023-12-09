import { Provider } from "react-redux";
import { RestaurantsPage } from "./pages/restaurants-page/component";
import store from "./redux";

import "./styles/index.css";

export const App = () => {
  return (
    <Provider store={store}>
        <RestaurantsPage className={'pageContent'}/>;
    </Provider>
    )
};
