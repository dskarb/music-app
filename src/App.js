import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomeView from "./views/HomeView/HomeView";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import MainNav from "./components/molecules/MainNav/MainNav";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Theme>
          <GlobalStyle />
          <MainNav />
          <Switch>
            <Route exact path="/" component={HomeView}></Route>
            <Route path="*" component={HomeView}></Route>
          </Switch>
        </Theme>
      </Router>
    </Provider>
  );
}

export default App;
