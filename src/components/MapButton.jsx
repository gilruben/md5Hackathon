import React from 'react'

const MapButton = React.createClass({
  render() {
    return (
      <button className="mapButton" onClick={this.props.viewMap}>MAP</button>
    )
  }
})

export default MapButton