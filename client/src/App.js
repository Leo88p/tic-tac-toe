import React from "react"
import gridStore from "./gridStore.js"
import {connect } from "react"

function Component ({ value, onClick}) {
  return(
    <div>
    <button onClick = {() => {onClick}}>TEST {{value}}</button>
    </div>
  )
}

const mapStateToProps = state => {
  return { value: state.value };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick : () => {
      dispatch({type: 'INC'});
    }
}};





/*const reducers = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducers, 0);

const App = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h4>{count}</h4>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
); */