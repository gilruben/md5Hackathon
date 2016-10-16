import React from 'react'

const MapButton = React.createClass({
  render() {
    return (
      <button className="mapButton" onClick={this.props.viewMap}><p>MAP</p></button>
    )
  }
})

export default MapButton
