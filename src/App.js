import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//components
import HomePage from './HomePage'
import Questions from './Questions'
import Instructions from './components/Instructions'
import MapButton from './components/MapButton'

import mapImage from './images/map.jpg'


import './App.css'

const App = React.createClass({
  getInitialState() {
    return {
      instructions: ["You are connected to the Emergency Hotspot","Send GPS Location if you need immediate help!"],
      helpButton: true,
      showMap: false,
      questions: ["1","2","3"],
      danger: false,
      dangerFunc: this.questionButton
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
  questionButton(){
    this.setState({danger: true})
  },
  viewMap() {
    let mapState = this.state.showMap ? false : true
    this.setState({showMap: mapState})
  },
  render() {
    let that = this
    let children = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, Object.assign({}, that.state));
    });
    let mapButton = (
      <div className="mapBox">
        <MapButton viewMap={this.viewMap}/>
        <div className="mapImg"><img src={mapImage} /></div> 
      </div>
    )
    return (
      <div className="mainBody">
        <header>
          <h1>FINDME</h1>
        </header>
        <Instructions pathLocation={this.props.location.pathname} instructions={this.state.instructions}/>
        {children}
        {this.state.showMap ? <ReactCSSTransitionGroup 
          transitionName="map" 
          transitionAppear={true} 
          transitionAppearTimeout={500000}
          transitionEnterTimeout={0}
          transitionLeave={true}
          transitionLeaveTimeout={1000}>
           {mapButton}
          </ReactCSSTransitionGroup> : mapButton}
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/questions" component={Questions}/>
    </Route> 
  </Router>,
  document.getElementById('root')
)

// 
