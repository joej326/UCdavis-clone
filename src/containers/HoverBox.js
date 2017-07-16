import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/hoverBox.css';



export default class HoverBox extends Component{




  render(){
    return (

  <div className='hover-box-main'>
    <img src="http://i.imgur.com/U8OLh42.png" alt="logo"/>
    <img src="http://i.imgur.com/MYBSm9y.png" alt="logo"/>
    <img src="http://i.imgur.com/csCf5At.png" alt="logo"/>
    <img src="http://i.imgur.com/MeeJaRh.png" alt="logo"/>
  </div>
    )
  }

}
