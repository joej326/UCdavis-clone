import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/trendingBlock.css';



export default class TrendingBlock extends Component{



  render(){
    return (
      <div className='trending-block-main'>
        <div className="trending-img-div">
          <img className='trending-img' src={this.props.trendingImg} alt="trending-img"/>
        </div>
        <div className="trending-words-div">
          <p className="trending-words">{this.props.words}</p>
          <p className="trending-date">{this.props.date}</p>
        </div>
      </div>
    )
  }

}
