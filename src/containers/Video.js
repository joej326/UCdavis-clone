import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/video.css';



export default class Video extends Component{



  render(){
    return (
      <div className='video-main'>

        <video
          className="the-video"
          autoPlay="true"
          loop="true"
          muted="true"
          data-vscid="1xbytquty">
          <source
            src="https://player.vimeo.com/external/188745627.hd.mp4?s=d3b05aec582afe4adf83fdd0295cb870e37e27af&amp;profile_id=174"
            type="video/mp4" />

        </video>


<div className='space-creator'></div>
      </div>
    )
  }

}
