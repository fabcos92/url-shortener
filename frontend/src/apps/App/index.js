import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../../components/MainPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
