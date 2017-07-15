import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/thingsToDo.css';



export default class ThingsToDo extends Component{

  componentDidMount(){
    $('.things-to-do-main').on('mouseenter',function(){
      $('.things-to-do-main div:nth-child(1)').stop().animate({left: '7vw'});
      $('.to-do-img p').stop().animate({right: '9vw'})
      $('.hidden-div').stop().animate({opacity: '0.75'});
    });
    $('.things-to-do-main').on('mouseleave',function(){
      $('.things-to-do-main div:nth-child(1)').stop().animate({left: '5vw'});
      $('.to-do-img p').stop().animate({right: '40vw'})
      $('.hidden-div').stop().animate({opacity: '0'});
    });
  }







  render(){
    return (
      <div className='things-to-do-main'>
        <div className='flex'>
          <h1>13</h1>
          <h2>Things to Do in Davis</h2>
        </div>
        <div className='flex to-do-img'>
          <img src="http://i.imgur.com/W7I4uZG.png" alt="things to do"/>
          <p><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></p>
          <div className='hidden-div'></div>
        </div>
      </div>
    )
  }

}
