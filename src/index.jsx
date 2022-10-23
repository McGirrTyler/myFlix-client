import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import { MainView } from "./componets/main-view/main-view";
import { Container } from "react-bootstrap";
import { Navigation } from "./componets/navbar/navbar-model";

// Bundle
//import "./index.scss";

//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Navigation />
        </Container>
        <Container>
          <MainView />
        </Container>
        </>
    );
  }
}

//Finds Root of App
const container = document.getElementsByClassName("app-container")[0];

//Render app in root DOM element
const root = createRoot(container);
root.render(React.createElement(MyFlixApplication));
