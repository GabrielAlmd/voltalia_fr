import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollButton from "./Components/ScrollButton";
import { AboutUs, Home, Photovoltaic } from "./Pages/index";
import { Col, Row, Container, Image} from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home-presentation">
            <Home />
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
