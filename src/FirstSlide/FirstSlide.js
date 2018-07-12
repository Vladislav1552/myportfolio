import React, { Component } from 'react';
import './FirstSlide.css';
import $ from "jquery";
import link from '../img/link.png'
import menu from '../img/menu-icon.png'
class FirstSlide extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.App_1st-slide_button').click(function () {
                $('.App_1st-slide_main').toggleClass('App_1st-slide_main_click')
                $('.App_1st-slide_button').toggleClass('App_1st-slide_button_click')
            })
        })
    }
    render() {

        return (
            <section className='App__1st-slide'>
                <div className='container'>
                    <nav className='App_1st-slide_menu_nav1'>
                        <a className=' App_1st-slide_menu_nav1_item'><div className='item_content'><a data-translate-key="Main" href='#'>Main</a></div></a>
                        <a className='App_1st-slide_menu_nav1_item'><div className='item_content'><a data-translate-key="Framework" href='#Framework'>Framework</a></div></a>
                        <a className='App_1st-slide_menu_nav1_item'><div className='item_content'><a data-translate-key="Skills" href='#Skills'>Skills</a></div></a>
                        <a className='App_1st-slide_menu_nav1_item'><div className='item_content'><a data-translate-key="About me" href='#Story'> About me</a></div></a>
                        <a className='App_1st-slide_menu_nav1_item'><div className='item_content'><a data-translate-key="Feedback" href='#Feedback'>Feedback</a></div></a>
                    </nav>
                    <div className='App_1st-slide_menu'>
                        <div className='App_1st-slide_button '> </div>
                        <nav className='App_1st-slide_menu_nav'>
                            <a className='App_1st-slide_menu_link' href='https://vk.com/vlad1552333' target='blank'><span className='icon icon_vk'></span></a>
                            <a className='App_1st-slide_menu_link' href='https://github.com/Vladislav1552' target='blank'><span className='icon icon_github'></span></a>
                            <a className='App_1st-slide_menu_link' href='https://www.instagram.com/vlad_vorobei3' target='blank'><span className='icon icon_instagram'></span></a>
                            <a className='App_1st-slide_menu_link' href='https://www.facebook.com/vlad.vorobyev.359' target='blank'><span className='icon icon_facebook'></span></a>
                        </nav>
                    </div>
                    <div className='App_1st-slide_main '>
                        <div className='tree'>
                            <div className='languageButton'>
                                <button className='languageButton_ru'></button>
                                <button className='languageButton_en'></button>
                            </div>
                        </div>
                        <div className='App__1st-slide_About'><h1 data-translate-key="Vladislav Vorobyev">VLADISLAV VOROBYOV </h1><span data-translate-key="The beginner of the front-end development">The beginner of the front-end development</span>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default FirstSlide;