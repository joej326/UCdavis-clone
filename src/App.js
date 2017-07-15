import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import Header from './containers/Header';
import Taskbar from './containers/Taskbar';
import SlideOut from './containers/SlideOut';
import Video from './containers/Video';
import LinksContainer from './containers/LinksContainer';
import Events from './containers/Events';

class App extends Component {

componentDidMount(){
  let down = false;
  $(window).scroll(function(){
    if($(window).scrollTop() == 0 && down === false){
      console.log($(window).scrollTop());
      $('.flex-header svg').stop().animate({width: '21vw',bottom: '0vw'});
      $('.quick-links').stop().animate({bottom: '0vw'});
      $('.header-main').stop().animate({height: '5vw'})

      down = true;
    }

    if($(window).scrollTop() > 0 && down === true){
      if(down === true){
      $('.flex-header svg').stop().animate({width: '15vw',bottom: '1vw'});
      $('.quick-links').stop().animate({bottom: '1vw'});
      $('.header-main').stop().animate({height: '4vw'})
      console.log($(window).scrollTop());
      down = false;
      // $('.header-main').css({position: 'sticky'})
    }
  }

  });


}


  render() {
    return (
      <div className="App">
        <Header />
        <Taskbar />
        <Video />
        <LinksContainer />
        <Events />
      </div>
    );
  }
}

export default App;
