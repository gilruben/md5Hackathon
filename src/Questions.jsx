import React from 'react'


const Questions = React.createClass({
  
  render() {
    let questions = this.props.questions.map((question, index) => 
      <button className="questionButton" key={index}>{question}</button>
    )
    return (
      <div className="questionBox">
        {questions}
      </div>
    )
  }
})

export default Questions