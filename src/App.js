import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navigator from "./navigation/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
