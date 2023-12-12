import { Provider } from "react-redux";
import { RestaurantsPageContainer } from "./pages/restaurants-page/container";
import store from "./redux";

import "./styles/index.css";

export const App = () => {
  return (
    <Provider store={store}>
        <RestaurantsPageContainer className={'pageContent'}/>;
    </Provider>
    )
};
