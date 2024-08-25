import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams, } from "react-router-dom";
import Menu from "./Components/Menu";
import CarTable from "./Components/Car";
import CarChart from "./Components/CarChart";
import CarList from "./Components/CarList";

function BrandRoutes() {
  const { menu } = useParams();

  return (
    <div>
      {menu === "Dashboard" && (
        <>
          <CarTable />
          <CarChart />
        </>
      )}
      {menu === "Highlighted Car" && <CarList />}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/error">
            {/* <Error /> */}
            <div>Error Page</div>
          </Route>
          <Route path="/:menu">
            <BrandRoutes />
          </Route>
          <Route path="/">
          <CarTable />
          <CarChart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
