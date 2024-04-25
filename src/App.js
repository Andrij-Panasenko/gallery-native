import { Provider } from "react-redux";
import {store} from "./redux/store";
import MainComponent from "./components/MainComponent/MainComponent";

export default function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}
