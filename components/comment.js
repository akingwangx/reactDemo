import React from 'react';
import  './index.css';

export default class Comment extends React.Component {
  render() {
    return (
      <div >
        <div style={{margin:"10px 0"}}>
          <span className="author"><b>{this.props.author}</b></span>
          <span className="date">{this.props.date}</span>
        </div>
        <div style={{marginBottom:20}}>{this.props.children}</div>

      </div>
    )
  }
}