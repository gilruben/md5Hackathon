import React from 'react'
import {Link} from 'react-router'

const HelpButton = React.createClass({
  render(){
    return (
      <Link to="/questions"><button className="helpButton">SEND GPS LOCATION</button></Link>
    )
  }
})

export default HelpButton