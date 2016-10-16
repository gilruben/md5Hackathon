import React from 'react'

const MapButton = React.createClass({
  //<button className="mapButton" onClick={this.props.viewMap}>MAP</button>
  render() {
    return (
      <div className={this.props.className}>
        <div className="map-header">
          <h2>MAP</h2>
        </div>
      </div>
    )
  }
})

export default MapButton
