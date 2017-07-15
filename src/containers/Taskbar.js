import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/taskbar.css';



export default class Taskbar extends Component{


  componentDidMount(){

  $('.taskbar-list h2').on('mouseenter', function(){
    $('.taskbar-list ul li').stop();
    $('.taskbar-list ul li').delay(500);
    $('.taskbar-list ul li').stop().animate({bottom: '0vw'})
  })
  $('.taskbar-list').on('mouseleave', function(){
    $('.taskbar-list ul li').stop().animate({bottom: '20vw'})
  })




  }

  render(){
    return (
      <div className='taskbar-main'>

<div className="taskbar-list">

    <div className='about-list'>
      <h2>ABOUT US</h2>
      <ul>
        <li>Initiatives</li>
        <li>Rankings</li>
        <li>Locations</li>
        <li>Visit UC Davis</li>
        <li>UC Davis Health</li>
        <li>Administration</li>
      </ul>
    </div>

    <div className='admissions-list'>
      <h2>ADMISSIONS</h2>
      <ul>
        <li>Undergraduate</li>
        <li>Graduate</li>
        <li>Professional</li>
        <li>Cost</li>
        <li>Financial Aid</li>
        <li>Apply</li>
      </ul>
    </div>

      <div className='academics-list'>
      <h2>ACADEMICS</h2>
      <ul>
        <li>Majors</li>
        <li>Graduate Programs</li>
        <li>Professional<br /> Programs</li>
        <li>Colleges and <br />Schools</li>
        <li className='add-padding'>Study Abroad</li>
      </ul>
    </div>

      <div className='research-list'>
      <h2>RESEARCH</h2>
      <ul>
        <li>Undergraduate<br /> Research</li>
        <li>Graduate Research</li>
        <li>Library</li>
        <li>Museums and <br />Collections</li>
        <li className='add-padding'>Partnerships</li>
      </ul>
      </div>

      <div className='campus-list'>
      <h2>CAMPUS LIFE</h2>
      <ul>
        <li>Calendar</li>
        <li>Explore Campus</li>
        <li>Housing</li>
        <li>Athletics</li>
        <li>Student Clubs</li>
        <li>City of Davis</li>
      </ul>
    </div>

    <div className='news-list'>
      <h2>NEWS</h2>
      <ul>
        <li>Latest News</li>
        <li>University News</li>
        <li>Student News</li>
        <li>Blogs</li>
        <li>Social Media</li>
        <li>Updates</li>
      </ul>
    </div>




</div>

<div className="search-div">
  <p><i className="fa fa-search" aria-hidden="true"></i></p>
</div>


      </div>
    )
  }

}
