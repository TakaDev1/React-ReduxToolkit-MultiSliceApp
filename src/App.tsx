import { Provider } from "react-redux";
import "./App.css";
import CounterComponent from "./features/counter/components/CounterComponent";
import store from "./app/store";
import ThemeToggle from "./features/theme/components/ThemeToggle";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <h1>React-ReduxToolkit-MultiSliceApp</h1>
        <Provider store={store}>
          <CounterComponent />
          <ThemeToggle />
        </Provider>
      </div>
    </>
  );
}

export default App;
