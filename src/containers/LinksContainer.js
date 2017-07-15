import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

import './../styles/linksContainer.css';
import Link from './Link';



export default class LinksContainer extends Component{

  // componentDidMount(){
  //   $('.link:eq(5)').css({padding: '0vw 1vw 0vw 1vw'})
  // }



  render(){
    return (
      <div className='links-container-main'>

        <div className="flex-links">
          <Link type='ribbon' linkImg='http://i.imgur.com/aGF9N3x.png' />
          <Link type='hat' linkImg='http://i.imgur.com/rGOZPI7.png' />
          <Link type='dollar' linkImg='http://i.imgur.com/yhvHuRv.png' />
          <Link type='calendar' linkImg='http://i.imgur.com/XoSjyug.png' />
          <Link type='walking' linkImg='http://i.imgur.com/sg9LofL.png' />
          <Link type='check' linkImg='http://i.imgur.com/BQC0L3L.png' />
        </div>
      </div>
    )
  }

}
