import React from 'react';
import './App.css';
import './index.css';
import InputForm from './InputForm';
import Emoji from './Emoji';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p><Emoji symbol="☎️"/> SMS<a href={process.env.REACT_APP_ABOUT_ME} className=""> {process.env.REACT_APP_MY_NAME} </a><Emoji symbol="☎️"/></p>
      </header>
        <div className="App-body">
          <InputForm/>
        </div>
      <footer className="App-footer">
        <p>Forked from <a href="https://github.com/stevehind/sms-steve">SMS ©Steve Hind</a>.
           Want to deploy your own web SMS app? The <a href="https://github.com/rabbah/sms-steve">Nimbella Serverless Cloud</a> is for you. Your Cloud. Beautiful.</p>
      </footer>
    </div>
  );
}

export default App;
