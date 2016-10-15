import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import HomePage from './HomePage';
import Questions from './Questions';


import Instructions from './components/Instructions';
import MapButton from './components/MapButton';


import './App.css';

const App = React.createClass({
  getInitialState() {
    return {
      instructions: null,
      helpButton: true,
      showMap: false,
      questions: null,
      HQInfo: null 

    }
  },
  componentWillMount(){
    this.ajaxCall();
    console.log(this.state.HQInfo)
    this.setQuestions(this.state.HQInfo);
  },
  ajaxCall(){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://10.0.2.10:8888/r', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        console.log(data);
        this.setState({HQInfo:data});
      }   
    };
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
  },
  setQuestions(){

  },
  helpButton(){

  },
  viewMap() {
    this.setState({showMap: true})
  },
  render() {
    let that = this
    let children = React.Children.map(this.props.children, function(child) {
        return React.cloneElement(child, Object.assign({}, that.state));
    });

    return (
      <div className="mainBody">
        <header>
          <h1>FindME</h1>
        </header>
        <Instructions instructions={this.state.instructions}/>
        {children}
        {!this.state.showMap ? <MapButton viewMap={this.viewMap}/> : null}
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

