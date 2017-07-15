import React, { Component } from 'react';
import $ from 'jquery';

import './../styles/microphoneBox.css';



export default class MicrophoneBox extends Component{

  // componentDidMount(){
  //   $('.link:eq(5)').css({padding: '0vw 1vw 0vw 1vw'})
  // }



  render(){
    return (
      <div className='microphone-box-main'>
        <img className='microphone-img' src="http://i.imgur.com/kSCIR9G.png" alt="microphone"/>
        <div className='microphone-wordbox'>
          <h4>Book Project: Nomination Period for<br /> 2018-19</h4>
          <p>Ongoing through Friday, July 21</p>
        </div>
        <div className='microphone-wordbox'>
          <h4>Lunchtime Tai Chi</h4>
          <p>Friday, July 14, 12pm</p>
        </div>
        <div className='microphone-wordbox third-microphone-box'>
          <h4>Bandella: Steve Robinson and Other<br /> Musical Astronauts Perform</h4>
          <p>Friday, July 14, 8pm</p>
        </div>
        <div className='see-all-div'>
          <p>See all</p>
          <img src="http://i.imgur.com/YRQL7wh.png" alt="arrows"/>
        </div>

      </div>
    )
  }

}
