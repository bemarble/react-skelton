import React from 'react';
import Main from './Main';
import Sub from './Sub';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Sub />
      </div>
    );
  }
}
