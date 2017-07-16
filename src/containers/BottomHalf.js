import React, { Component } from 'react';
import $ from 'jquery';

import './../styles/bottomHalf.css';
import ImageExpand from './ImageExpand';
import Athletics from './Athletics';
import HoverBox from './HoverBox';
import Follow from './Follow';
import Footer from './Footer';



export default class BottomHalf extends Component{

  componentDidMount(){

  }

  render(){
    return (
      <div className='bottom-half-main'>
        <img className='picture-uc-davis-img' src="http://i.imgur.com/mcaqcvE.png" alt=""/>
        <div className="image-expand-flex">
          <ImageExpand
            imageType='workout-img'
            image='http://i.imgur.com/Dsvva6n.jpg'
            circleWords={['Hot',<br />,'Spot']}
            circle=''
            color='orange'
            words={['Use your unlimited access to the Activities and Recreation ', 'Center by keeping fit in group classes, dancing, martial arts, personal training, racketball...']} />
          <ImageExpand
            imageType='beer-img'
            image='http://i.imgur.com/PFsnMD3.jpg'
            circleWords={['Fast',<br />,'Fact']}
            circle=''
            color='pink'
            words={['Be the envy of your friends. Take Charlie',<br />, 'Bamforth’s beer-making classes. Brewing companies worldwide will be calling.']} />
        </div>
        <Athletics />
        <HoverBox />
        <Follow />
        <Footer />
      </div>
    )
  }

}
