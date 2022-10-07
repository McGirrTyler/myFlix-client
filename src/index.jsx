import React from "react";
import ReactDOM from "react-dom";

// Bundle
import "./index.scss";

//Main Component 
class MyFlixApplication extends React.Component {
    render() {
        return (
            <div className="my-flix">
            <div> Good morning </div>
            </div>
        );
    }
}

//Finds Root of App
const container = document.getElementsByClassName('app-container')[0];

//Render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);