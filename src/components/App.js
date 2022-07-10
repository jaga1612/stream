import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/sreamcreate";
import StreamEdit from "./streams/steamedit";
import StreamDelete from "./streams/streamdelete";
import StreamList from "./streams/streamlist";
import StreamShow from "./streams/streamshow";
import Header from "./header";
import history from "../history"
import { Switch } from "react-router-dom";
import "../App.css"

const App = () =>{
    return (
    <div>
        <Router history={history}>
        <div className="container-fluid">
            <Header/>
            <Switch>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" exact component={StreamCreate}></Route>
            <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
            <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
            <Route path="/streams/:id" exact component={StreamShow}></Route>
            </Switch>        
        </div>
        </Router>
    </div>
    )
};

export default App;