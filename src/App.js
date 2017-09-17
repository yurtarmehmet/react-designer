import React from 'react';
import Designer from "./designer";
import './App.css';
import '../src/fonts/css/font-awesome.min.css';


import Config from './config';

class App extends React.Component {
    constructor(props){
        super(props);
        this.save = this.save.bind(this);
    }

    save(state){
        let newState = Object.assign({}, state);
        let myjson = JSON.stringify(newState, null, 2);
        let x = window.open();
        x.document.open();
        x.document.write('<html><body><pre>' + myjson + '</pre></body></html>');
        x.document.close();
    }

    render() {
        return <Designer config={Config} onSave={this.save}/>
    }
}

export default App;
