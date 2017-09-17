import React, { Component } from 'react';
import logo from './logo.svg';
import Rnd from 'react-rnd';
import Draggable from 'react-draggable';
import './App.css';



const drag = function(data){
  console.log('drag',data);
}

const dragStop = function(data){
  console.log('dragstop',data);
}


let mainElements = [

];

class App extends Component {
  render() {
    return (
      <div>
      <div
          style={{
            width: '800px',
            height: '600px',
            background: 'red'
          }}
        >
          <Rnd
            default={{
              x: 200,
              y: 200,
              width: 320,
              height: 200,
            }}
            style={{background:'green'}}
          >
          <div>Hello</div>
          </Rnd>
        </div>
        <Rnd
          default={{
            x: 200,
            y: 10,
            width: 320,
            height: 200,
          }}
          style={{background:'green'}}
          onDragStop={dragStop}
          onDrag={drag}
        >
        <div>Hello 2</div>
        </Rnd>
        </div>
    );
  }
}

export default App;
