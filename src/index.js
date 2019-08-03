import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

// (value) the second arg from useReducer
function reducer(state, value) {
  return state + value;
}

function Counter() {
  // whatever you pass to dispatch will be passed as the second argument to the reducer (value)
  const [count, dispatch] = React.useReducer(reducer, 0);

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch(1)}>+</button>
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Counter />, rootElement);

/*

Whenever the + button is clicked, dispatch will be invoked. That will call reducer passing it two arguments, state, which will come implicitly from React, and value, which will be whatever was passed to dispatch. What we return from reducer will become our new count. Finally, because count changed, React will re-render the component, updating the UI.


*/
