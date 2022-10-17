import React from "react";
import ReactDOM from "react-dom";
import { MainView } from "./componets/main-view/main-view";

// Bundle
//import "./index.scss";

//Main Component
class MyFlixApplication extends React.Component {
  render() {
    return <MainView />;
  }
}

//Finds Root of App
const container = document.getElementsByClassName("app-container")[0];

//Render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
