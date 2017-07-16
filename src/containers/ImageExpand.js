import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/imageExpand.css';



export default class ImageExpand extends Component{

componentDidMount(){
  $('.workout-img').on('mouseenter', function(){
    $('.orange').stop().animate({width: '7.75vw',height: '6.2vw',right: '36vw'});
    $('.orange p').stop().animate({right: '2.3vw',top:'0.5vw'});
  });
  $('.workout-img').on('mouseleave', function(){
    $('.orange').stop().animate({width: '6.75vw',height: '5.4vw',right: '37vw'});
    $('.orange p').stop().animate({right: '2.3vw',top:'0.1vw'});
  })
  $('.beer-img').on('mouseenter', function(){
    $('.pink').stop().animate({width: '7.75vw',height: '6.2vw',right: '4vw'});
    $('.pink p').stop().animate({right: '2.3vw',top:'0.5vw'});
  });
  $('.beer-img').on('mouseleave', function(){
    $('.pink').stop().animate({width: '6.75vw',height: '5.4vw',right: '5vw'});
    $('.pink p').stop().animate({left: '2vw',top:'0vw'});
  })
}



  render(){
    return (

  <div className='outer-expand'>

      <div className='image-expand-main'>
        <img className={`${this.props.imageType} expanding-img`} src={this.props.image} alt="activity"/>

      </div>

      <div className="slanted-div">
        <div className="slant-words">
          <h1></h1>
          <p>{this.props.words}</p>
        </div>
      </div>
      <div className={`${this.props.color} expanding-circle`}>
        <p className="circle-words">{this.props.circleWords}</p>
      </div>

  </div>
    )
  }

}
// .expanding-circle{
//   z-index: 9000;
//   width: 6.75vw;
//   height: 5.4vw;
//   transition: width 0.5s, height 0.5s;
//   position: absolute;
//   color: white;
//   font-size: 1.7vw;
//   padding: 1vw 0.4vw 1vw 0.4vw;
//   font-weight: bold;
//   transform: translate(-50%,-50%);
//   border-radius: 50%;
//   background: #ED8B00;
// }
//
// .expanding-circle p{
//   position: relative;
//   transition: transform 0.5s;
// }
// .image-expand-main:hover p{
//   transform: translate(9%,13%);
// }
// .expanding-circle:hover{
//   width: 7.75vw;
//   height: 6.2vw;
// }
// .orange{
//   right: 37vw;
//   top: 155vw;
//   background: #ED8B00;
// }
// .pink{
//   right: 5vw;
//   top: 155vw;
//   background: #C6007E;
// }
