import React, { Component } from 'react';

import './Menu.css';
import $ from "jquery";
import link from '../img/link.png'
import menu from '../img/menu-icon.png'

class Menu extends Component {

  componentDidMount() {
    $(document).ready(function () {
      $('.click_menu').click(function () {

        $('.item').slice(0, 5).slideToggle(1000);
        $('.item').slice(5, 9).fadeOut(1000);
      })
      $('.click_link').click(function () {
        
        $('.item').slice(5, 9).slideToggle(1000);
        $('.item').slice(0, 5).fadeOut(100);
      })
    })
  }

  render() {

    return (

      <div className='Menu'>
        <div className='clickButton'>
          <div className='button click_menu'><img className='clickButton_img' src={menu} /></div>
          <div className='button click_link'><img className='clickButton_img' src={link} /></div>
        </div>
        <div className="Menu_сontainer">
          <a className='item'><div className='item_content'><a data-translate-key='Main' href='#'>Main</a></div></a>
          <a className='item'><div className='item_content'><a data-translate-key='Framework' href='#Framework'>Framework</a></div></a>
          <a className='item'><div className='item_content'><a data-translate-key='Skills' href='#Skills'>Skills</a></div></a>
          <a className='item'><div className='item_content'><a data-translate-key="About me" href='#Story'>About me</a></div></a>
          <a className='item'><div className='item_content'>< a data-translate-key="Feedback" href='#Feedback' >Feedback</a></div></a>
          <a className='item' href='https://vk.com/vlad1552333' target='blank'><div className='item_content'><span className='menu_icon icon_vk'></span><span>Vk</span></div></a>
          <a className='item' href='https://github.com/Vladislav1552' target='blank'><div className='item_content'><span className='menu_icon icon_github'></span><a href='https://github.com/Vladislav1552' target='blank'>Github  </a></div></a>
          <a className='item' href='https://www.instagram.com/vlad_vorobei3' target='blank'><div className='item_content'><span className='menu_icon icon_instagram'></span><a href='https://www.instagram.com/vlad_vorobei3' target='blank'>Instagram</a></div></a>
          <a className='item' href='https://www.facebook.com/vlad.vorobyev.359' target='blank'><div className='item_content'><span className='menu_icon icon_facebook'></span><a href='https://www.facebook.com/vlad.vorobyev.359' target='blank'>Facebook</a></div></a>

        </div>
      </div>


    );
  }

}

export default Menu;