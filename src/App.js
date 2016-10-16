import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import HomePage from './HomePage';
import Questions from './Questions';


import Instructions from './components/Instructions';
import MapButton from './components/MapButton';


import './App.css';

import data from './info';

const App = React.createClass({
  getInitialState() {
    return {
      instructions: ["You are connected to the Emergency Hotspot","Send GPS Location if you need immediate help!"],
      helpButton: true,
      showMap: false,
      questions: null,
      questionsIndex: 0,
      HQInfo: null,
      danger: false,
      dangerFunc: this.questionButton
    }
  },
  componentWillMount(){
    this.ajaxCall();
    setTimeout(()=>this.setQuestions(this.state.HQInfo), 2);

  },
  ajaxCall(){
    this.setState({HQInfo:"aa"});
    // var request = new XMLHttpRequest();
    // request.open('GET', 'http://10.0.2.10:8888/r', true);

    // request.onload = function() {
    //   if (request.status >= 200 && request.status < 400) {
    //     // Success!
    //     var data = JSON.parse(request.responseText);
    //     console.log(data);
    //     this.setState({HQInfo:data});
    //   }
    // };
    // request.onerror = function() {
    //   // There was a connection error of some sort
    // };

    // request.send();
  },
  setQuestions(hqInfo){
    var output = [];
    // console.log(hqInfo)
    var range = [];
    if(hqInfo.length === 5){
      var startRange = hqInfo[1].charCodeAt(0);
      var endRange = hqInfo[2].charCodeAt(0);

      for (var i = startRange+1; i < endRange-1; i++) {
        range.push(i);
      }
      range = [startRange, ...range, endRange];
      range = String.fromCharCode(...range);
    }

    output.push(...data.mandatory);
    for(var inf in data){
      if(hqInfo[0] === "a" && hqInfo[hqInfo.length-1] === "a"){
        if (inf === "huricane") {
          for(var info in data.huricane){
            if (range.includes(info)){
              output=[...output,data.huricane[info]];
            }
          }
        }
      }
    }

    this.setState({questions: output});

  },
  questionButton(){
    let dangerState = this.state.danger ? false : true
    this.setState({danger: dangerState})
  },
  viewMap() {
    this.setState({showMap: true})
  },
  render() {
    return (
      <div className="mainBody">
        <header>
          <h1>FINDME</h1>
        </header>
        <Instructions pathLocation={this.props.location.pathname} instructions={this.state.instructions}/>
        {React.cloneElement(this.props.children , Object.assign({}, this.state))}
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
