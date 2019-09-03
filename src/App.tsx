// import Button from 'antd/es/button';
import * as React from 'react';

// import './App.css';
import "./App.css"
import Router from "./router"


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <Button type="primary">Button</Button> */}
        <Router/>
      </div>
    );
  }
}

export default App;
