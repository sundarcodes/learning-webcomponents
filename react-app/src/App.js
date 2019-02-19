import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <my-component first="Stencil" last="Hello All from React"></my-component>
        <h1>Chip</h1>

        <stc-chip image="http://nodeframework.com/assets/img/js.png" text="image chip"></stc-chip>
        <stc-chip image="" text="just a chip"></stc-chip>
        <stc-chip image="" text="closeable chip" closeable></stc-chip>
        <stc-chip image="http://nodeframework.com/assets/img/js.png" text="closeable chip" closeable></stc-chip>

        <st-signature width="300" height="300" label="My Signature"></st-signature>
      </div>
    );
  }
}

export default App;
