import React from 'react';
import Provider from './context/Provider';
import Router from './Router';

const App = () => {
  return (
    <>
      <Provider>
        <Router />
      </Provider>
    </>
  );
};

export default App;
