import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HardhatContext } from "./hardhat/HardhatContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreateGift } from "./components/CreateGift";
import { Layout } from "./components/Layout";
import { About } from "./components/About";
import { ViewGift } from "./components/ViewGift";
import { ChakraProvider } from "@chakra-ui/core";
import { GiftsTabs } from "./components/GiftsTabs";

function App() {
  return (
    <div className="App">
      <Router>
        <ChakraProvider>
          <HardhatContext>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <About></About>
                </Route>
                <Route path="/create-gift">
                  <CreateGift />
                </Route>
                <Route path="/gifts/">
                  <GiftsTabs />
                </Route>
                <Route path="/gift/:id">
                  <ViewGift />
                </Route>
                <Route path="/about">
                  <About></About>
                </Route>
              </Switch>
            </Layout>
          </HardhatContext>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
