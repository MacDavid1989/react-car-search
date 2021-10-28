import ReactDOM from "react-dom";
import App from "./App";

// Styles
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./Styles/Themes/material";
import "./Styles/index.css";

// Store
import { Provider } from "react-redux";
import { store } from "./Store/store";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
