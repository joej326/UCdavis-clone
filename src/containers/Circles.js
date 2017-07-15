import React, { Component } from 'react';
import $ from 'jquery';

import './../styles/circles.css';



export default class Circles extends Component{

  componentDidMount(){

  }

  render(){
    return (
      <div className='circles-main'>
          <div className="paw-circle">
            <img src="http://i.imgur.com/yw7o5rL.png" alt="paw-print"/>
            <p>Ranked 1st in the world for <br /> veterinary medicine</p>
          </div>
          <div className="ten-circle">
            <img src="http://i.imgur.com/kpBnbf3.png" alt="number ten"/>
            <p>Ranked 10th Nationally Among<br /> Public Universities</p>
          </div>
          <div className="one-circle">
            <img src="http://i.imgur.com/cXEL019.png" alt="number one"/>
            <p>Ranked 1st Nationally in<br /> Agriculture</p>
          </div>
      </div>
    )
  }

}
