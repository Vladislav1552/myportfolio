import React, { Component } from 'react';
import logo from '../logo.svg';
import './SecondSlide.css';
import $ from "jquery";
import link from '../img/link.png'
import menu from '../img/menu-icon.png'
import Menu from '../Menu/Menu.js';
import Slider from '../Slider/Slider.js';
class SecondSlide extends Component {
    
    render() {

        return (
            <section className='App__2st-slide ' id='Framework'>
        
                <Menu />
                <div className='App__2st-slide_about App__2st-slide_about--color'>
                    <span className='App__2st-slide_text'><h2 data-translate-key="My favorite framework">My favorite framework is React.I work with it more than one year.Most of my projects are created by using React</h2></span>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
              <Slider />
        
            </section>
        );
    }
}

export default SecondSlide;







