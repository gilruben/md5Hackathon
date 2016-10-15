import React from 'react'

const MapButton = React.createClass({
  render() {
    return (
      <div>
        <button className="mapButton" onClick={this.props.viewMap}>MAP</button>
      </div>
    )
  }
})

export default MapButton
