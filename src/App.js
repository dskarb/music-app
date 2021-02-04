import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import NewCompView from "./views/NewCompView/NewCompView";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import PageWrapper from "./templates/PageWrapper/PageWrapper";
import MainNav from "./components/molecules/MainNav/MainNav";

function App() {
  return (
    <Router>
      <Theme>
        <GlobalStyle />
        <MainNav />
        <PageWrapper>
          <Switch>
            <Route path="/add-composition" component={NewCompView}></Route>
            <Route exact path="/" component={HomeView}></Route>
          </Switch>
        </PageWrapper>
      </Theme>
    </Router>
  );
}

export default App;
