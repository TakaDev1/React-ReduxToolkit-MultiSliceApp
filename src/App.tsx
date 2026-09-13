import { Provider } from "react-redux";
import "./App.css";
import CounterComponent from "./features/counter/components/CounterComponent";
import store from "./app/store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <CounterComponent />
        </Provider>
      </div>
    </>
  );
}

export default App;
