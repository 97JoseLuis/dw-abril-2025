import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./register";
import Login from "./login";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export default App;