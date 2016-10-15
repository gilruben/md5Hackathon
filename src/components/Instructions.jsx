import React from 'react';

const Instructions = React.createClass({
  render(){
    return (
      <div className="instructions">
        <h1>{this.props.instructions}</h1>
      </div>
    )
  }
})

export default Instructions