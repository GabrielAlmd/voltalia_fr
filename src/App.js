import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { AboutUs, Home, Photovoltaic } from "./Pages/index";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home-presentation">
            <Home/>
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/photovoltaic">
            <Photovoltaic />
          </Route>
        </Switch>
        

        <Footer />
      </Router>
    </>
  );
}

export default App;
