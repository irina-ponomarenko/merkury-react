import React  from 'react';
import './App.css';
import Main from './Main';
import TopMenu from './components/pages/Menus/TopMenu/TopMenu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Main/>
      </div>
    );
  }
}

export default App;
