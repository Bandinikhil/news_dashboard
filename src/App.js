import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/Main";
import store from "./utils/newsStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
