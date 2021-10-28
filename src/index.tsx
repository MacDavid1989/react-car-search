import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./Styles/Themes/material";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import "./Styles/index.css";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
