import React from 'react';

export default class TableBody extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    );
  }
}
