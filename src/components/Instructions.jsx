import React from 'react';

const Instructions = React.createClass({
  render(){
    let instructions = this.props.instructions.map((instruction, index) => 
      <h1 key={index}>{instruction}</h1>
    )
    return (
      <div className={this.props.pathLocation === "/questions" ? "instructions": "mainInstructions"}>
        {instructions}
      </div>
    )
  }
})

export default Instructions