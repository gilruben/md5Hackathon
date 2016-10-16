import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import data from './info.js';



const Questions = React.createClass({
  getInitialState() {
    return {questions: data.mandatory, currentIndx: 0}
  },
  nextQuestion() {
    this.props.dangerFunc();
    this.setState({currentIndx: this.state.currentIndx + 1})
  },
  nextQuestionOnYes() {
    this.props.dangerFunc();
    this.nextQuestion();
  },

  render() {
      let questions = this.state.questions;
      let currentQ = questions[this.state.currentIndx];

      let yes = this.props.danger ? "yes" : null
      let dangerButtons =( <div className="buttons">
          <button onClick={this.props.dangerFunc} className={"questionButton " + yes}>YES</button>
          <button onClick={this.nextQuestion} className="questionButton no">NO</button>
        </div> )
      let display;
      let answer;

      if(this.state.currentIndx === 0){
        display = this.props.danger ? <ReactCSSTransitionGroup
          transitionName="buttons"
          transitionAppear={true}
          transitionAppearTimeout={50000}
          transitionEnterTimeout={0}
          transitionLeave={false}>{dangerButtons}</ReactCSSTransitionGroup> : dangerButtons
        answer = this.props.danger ? <div className="answer">
          <button onClick={this.nextQuestion} className="answerButton">FIRE</button>
          <button onClick={this.nextQuestion} className="answerButton">WATER LEAK/ FLOODING</button>
          <button onClick={this.nextQuestion} className="answerButton">DAMAGED BUILDING</button>
          </div> : null
      } else if(this.state.currentIndx === 1) {
        display = this.props.danger ? <ReactCSSTransitionGroup
          transitionName="buttons"
          transitionAppear={true}
          transitionAppearTimeout={50000}
          transitionEnterTimeout={0}
          transitionLeave={false}>{dangerButtons}</ReactCSSTransitionGroup> : dangerButtons

        answer = this.props.danger ? <div className="answer">
          <button onClick={this.nextQuestion} className="answerButton">Serious Injury</button>
          <button onClick={this.nextQuestion} className="answerButton">Minor Injury</button>
          <button onClick={this.nextQuestion} className="answerButton">Difficulty Breathing</button>
          </div> : null
      } else if(this.state.currentIndx >= questions.length){
        display = null;
        answer = null;
      } else {
        dangerButtons =( <div className="buttons">
          <button onClick={this.nextQuestionOnYes} className={"questionButton " + yes}>YES</button>
          <button onClick={this.nextQuestion} className="questionButton no">NO</button>
        </div> )

        display = dangerButtons

        answer = null;
      }

    return (
      <div className="questionBox">
        <h3>{currentQ}</h3>
        {display}
        {answer}
      </div>
    )
  }
})

export default Questions
