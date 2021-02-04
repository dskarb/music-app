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
import PageWrapper from "./templates/PageWrapper/PageWrapper";
import MainNav from "./components/molecules/MainNav/MainNav";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainNav />
      <PageWrapper>
        <Switch>
          <Route path="/about">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route path="/add-composition" component={NewCompView}></Route>
          <Route exact path="/" component={HomeView}></Route>
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
