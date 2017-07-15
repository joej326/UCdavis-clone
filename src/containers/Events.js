import React, { Component } from 'react';
import $ from 'jquery';

import './../styles/events.css';
import ThingsToDo from './ThingsToDo';
import Trending from './Trending';
import Circles from './Circles';
import MicrophoneBox from './MicrophoneBox';


export default class Events extends Component{

  componentDidMount(){

  }

  render(){
    return (
      <div className='events-main'>
        <ThingsToDo />
        <Trending />
        <Circles />
        <MicrophoneBox />
      </div>
    )
  }

}
