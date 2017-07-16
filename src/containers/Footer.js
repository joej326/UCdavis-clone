import React, { Component } from 'react';
import $ from 'jquery';

import './../styles/footer.css';



export default class Footer extends Component{

  componentDidMount(){

  }

  render(){
    return (
<div>

      <div className='footer-main'>
        <div className="footer-list">
          <img className='footer-img' src="http://i.imgur.com/9WoePFa.png" alt="uc davis"/>
          <ul className='first-footer-list'>
            <li>UC Davis Health</li>
            <li>Veterinary Medicine</li>
            <li>UC Davis Extension</li>
            <li>UC Davis Stores</li>
            <li>Mondavi Center</li>
            <li>Museums</li>
            <li>UC Davis Mobile Apps</li>
          </ul>
        </div>

        <div className="footer-list">
          <h1>Students</h1>
          <ul>
            <li>Orientation</li>
            <li>Student Recourses</li>
            <li>Graduate Students</li>
            <li>Internship and Career<br /> Center</li>
            <li>Jobs and Internships</li>
            <li>Parents</li>
          </ul>
        </div>

        <div className="footer-list">
          <h1>Alumni</h1>
          <ul>
            <li>Cal Aggie Alumni<br /> Association</li>
            <li>Career Connections</li>
            <li>Member Benefits</li>
            <li>UC Davis Magazine</li>
            <li>Transcripts</li>
          </ul>
        </div>

        <div className="footer-list">
          <h1>Faculty</h1>
          <ul>
            <li>Resources</li>
            <li>Teaching</li>
            <li>Research</li>
            <li>Benefits</li>
            <li>Faculty Governance</li>
          </ul>
        </div>

        <div className="footer-list">
          <h1>Staff</h1>
          <ul>
            <li>Resources</li>
            <li>Benefits</li>
            <li>Training</li>
            <li>Jobs</li>
            <li>Staff Assembly</li>
          </ul>
        </div>
      </div>

      <img className='footer-line' src="http://i.imgur.com/pbTGuuQ.png" alt="logo"/>
      <p className='disclaimer'>This is an clone of www.ucdavis.edu.<br />
      I do not own any rights to anything UC Davis related.<br />
      <br />
      Cloned by Joseph Joyce
      <br />
      <br />
    </p>
    <h1 className='portfolio'><a target='_blank' href='http://josephjoyce.net/'>View My Portfolio</a></h1>
</div>
    )
  }

}
