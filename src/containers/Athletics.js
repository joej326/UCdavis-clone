import React, { Component } from 'react';
import $ from 'jquery';

import './../styles/athletics.css';
import ImageExpand from './ImageExpand';



export default class Athletics extends Component{

  componentDidMount(){

  }

  render(){
    return (
      <div className='athletics-main'>
        <img className='mustang-logo' src="http://i.imgur.com/5sq4CqD.png" alt="mustang logo"/>
        <img className='balloons' src="http://i.imgur.com/koxr9BT.png" alt="balloons"/>
        <div className='football'>
          <h5>Football Season kickoff party</h5>
          <p>7/27/2017</p>
        </div>
          <hr/>
        <div className='see-all-div'>
          <p>See all</p>
          <img id='arrows' src="http://i.imgur.com/YRQL7wh.png" alt="arrows"/>
        </div>
      </div>
    )
  }

}
