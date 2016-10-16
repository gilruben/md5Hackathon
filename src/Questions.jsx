import React from 'react'


const Questions = React.createClass({
  
  render() {
    return (
      <div className="questionBox">
        <h3>Are you are immediate danger</h3>
        <div className="buttons">
          <button className="questionButton yes">YES</button>
          <button className="questionButton no">NO</button>
        </div>
      </div>
    )
  }
})

export default Questions