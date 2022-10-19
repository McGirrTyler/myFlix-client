import React from "react";
import ReactDOM from "react-dom";
import { MainView } from "./componets/main-view/main-view";
import { Container } from "react-bootstrap";

// Bundle
//import "./index.scss";

//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

//Finds Root of App
const container = document.getElementsByClassName("app-container")[0];

//Render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
