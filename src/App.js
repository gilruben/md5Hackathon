import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from './components/Instructions'
import HelpButton from './components/HelpButton'
import MapButton from './components/MapButton'

import './App.css'

const App = React.createClass({
  getInitialState() {
    return {
      instructions: "This is an emergency app",
      helpButton: true,
      showMap: false
    }
  },
  ajaxCall(){
    var request = new XMLHttpRequest();
    request.open('GET', '10.0.2.10:80', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
      } else {
        // We reached our target server, but it returned an error
      }
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
  },
  helpButton(){

  },
  viewMap() {
    this.setState({showMap: true})
  },
  render() {
    return (
      <div className="mainBody">
        <Instructions instructions={this.state.instructions}/>
        <HelpButton />
        {!this.state.showMap ? <MapButton viewMap={this.viewMap}/> : null}
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
