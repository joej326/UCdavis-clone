import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import TrendingBlock from './TrendingBlock';
import './../styles/trending.css';



export default class Trending extends Component{



  render(){
    return (
      <div className='trending-main'>
        <img className='trending-arrow' src="http://i.imgur.com/uAveUk9.png" alt="blue arrow"/>
        <TrendingBlock trendingImg='http://i.imgur.com/Xh05Sne.png' date='July 11, 2017' words='Firefighters Aid Researcher in Wildlife Rescue at Stebbins' />
        <TrendingBlock trendingImg='http://i.imgur.com/2W1MgZG.png' date='July 7, 2017' words='Design Competition for UC Davis Chancellor’s Residence Gets Makeover' />
        <TrendingBlock trendingImg='http://i.imgur.com/3Zl0O52.png' date='July 3, 2017' words='Brain Changes Accompany Development of Metamemory from Childhood to Adolescence' />
        <TrendingBlock trendingImg='http://i.imgur.com/SStM675.png' date='June 27, 2017' words='Post-Election Positions and Resources' />
      </div>
    )
  }

}
