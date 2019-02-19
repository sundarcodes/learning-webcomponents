import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi from React</h1>
        <h3>A simple component</h3>
        <my-component first="Stencil" last="from React"></my-component>
        <h3>A Chip component</h3>
        <stc-chip image="http://nodeframework.com/assets/img/js.png" text="image chip"></stc-chip>
        <stc-chip image="" text="just a chip"></stc-chip>
        <stc-chip image="" text="closeable chip" closeable></stc-chip>
        <stc-chip image="http://nodeframework.com/assets/img/js.png" text="closeable chip" closeable></stc-chip>
        <h3>A Signature capture component</h3>
        <st-signature width="300" height="300" label="My Signature"></st-signature>
      </div>
    );
  }
}

export default App;
