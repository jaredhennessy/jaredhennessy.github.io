import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import projectsArray from "./utils/projects.json";
// import PortfolioContext from "./utils/PortfolioContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import $ from "jquery";
import moment from "moment";

$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  var yearCount = moment().format("YYYY") - 2006;
  $("#yearCalc").html(yearCount);
});

function App() {
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProjects(projectsArray);
    setLoaded(true);
    // console.log(projects);
  }, [projects]);

  return (
    <Router basename="/">
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/portfolio"
            render={props => (
              <Portfolio {...props} portfolio={projects} loaded={loaded} />
            )}
          />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
