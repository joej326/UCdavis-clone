import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/link.css';



export default class Link extends Component{
  



  render(){
    return (
      <div className='link-main'>
        <div className={'link '+ this.props.type}>
          <img src={this.props.linkImg} alt="logo"/>
        </div>

      </div>
    )
  }

}
