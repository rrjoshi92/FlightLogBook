import React from 'react';
import cx from 'classnames';

export default class TableRow extends React.Component {
  constructor(props){
    super(props);       
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    // noTopBorder: React.PropTypes.bool,
  }

  static defaultProps = {
    noTopBorder: true,
  }

  onClick(){   
    this.props.onClick(this.props.id);
  }
  render() {
    const classes = cx({
      'no-top-border': this.props.noTopBorder,
    });

    // black-muted-background
    return (
      <tr className={classes}  id={this.props.id} onClick={this.onClick}>
        {this.props.children}
      </tr>
    );
  }
}
