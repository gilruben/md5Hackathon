import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const QuestionComp = React.createClass({
  render() {
      let yes = this.props.danger ? "yes" : null
      let buttons =( <div className="buttons">
          <button onClick={this.props.dangerFunc} className={"questionButton " + yes}>YES</button>
          <button className="questionButton no">NO</button>
        </div> )
    return (
      <div className="questionBox">
        <h3>{'Are you in immediate danger'}</h3>
        {this.props.danger ? <ReactCSSTransitionGroup
          transitionName="buttons"
          transitionAppear={true}
          transitionAppearTimeout={50000}
          transitionEnterTimeout={0}
          transitionLeave={false}>{buttons}</ReactCSSTransitionGroup> : buttons}
        {this.props.danger ? <div className="answer">
          <button className="answerButton">FIRE</button>
          <button className="answerButton">WATER LEAK/ FLOODING</button>
          <button className="answerButton">DAMAGED BUILDING</button>
        </div> : null}
      </div>
    )
  }
})

export default QuestionComp
