import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));

const firstate = {
    msg: "A message from state"
};
const reducer = (state = firstate, action) => {
    switch (action.type) {
        case "ACTION_ONE": {
            return state;
        }
        case "ACTION_TWO": {
            return state;
        }
        case "ACTION_THREE": {
            return state;
        }

        default: {
            return state;
        }
    }
};

const handleMultipleActions = store => next => action => {
    if (Array.isArray(action)) {
        action.map(element => store.dispatch({ type: { element } }));
    } else {
        next(action);
    }
};

const middleware = applyMiddleware(handleMultipleActions);
const store = createStore(reducer, middleware);

store.subscribe(() => {
    console.log("Store has ", store.getState());
});

store.dispatch([
    { type: "ACTION_ONE" },
    { type: "ACTION_TWO" },
    { type: "ACTION_THREE" }
]);
