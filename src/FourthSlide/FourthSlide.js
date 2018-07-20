import React, { Component } from 'react';

import './FourthSlide.css';
import $ from "jquery";
import MePhoto from '../img/PhotoMe.jpg'
import menu from '../img/menu-icon.png'
import { dict } from '../translate.js'
import chill from '../img/YuvyXWj-bow.jpg'
class FourthSlide extends Component {
    render() {
        $(document).ready(function () {
            $.html5Translate = function (dict, lang) {
                $('[data-translate-key]').each(function () {
                    $(this).html(dict[lang][$(this).data('translateKey')]);
                });
            };
            $(".languageButton_ru").click(function () {
                $.html5Translate(dict.Dictionary, 'ru');
            })
            $(".languageButton_en").click(function () {
                $.html5Translate(dict.Dictionary, 'en');
            })
            $('.tel').hover(function () {
                $('.textIcon_icon--phone').css({ 'transform': 'rotate(20deg)' })
            }, function () {
                $('.textIcon_icon--phone').css({ 'transform': 'rotate(0deg)' })
            })
            $('.mail').hover(function () {
                $('.textIcon_icon--email').css({ 'transform': 'rotateY(360deg)' })
            }, function () {
                $('.textIcon_icon--email').css({ 'transform': 'rotateY(0deg)' })
            })
        })
        return (
            <section className='App__4st-slide' id='Story'>
                <div className='App__4st-slide_aboutMe'>
                    <div className='App__4st-slide_aboutMe_mainInfo'>
                        <img className='photo' src={MePhoto} alt='myPhoto' />
                        <h3 className="App__4st-slide_aboutMe_mainInfo-name" data-translate-key="Vladislav Vorobyev">Vladislav Vorobyev</h3>
                        <span data-translate-key="Front-end developer" >Front-end developer</span>
                    </div>
                    <div className='App__4st-slide_aboutMe_aboutBox'>
                        <h4 data-translate-key="About me"> About me</h4>
                        <span data-translate-key="AboutText">
                            When I first saw in the browser the inscription 'Hello World', from this moment it all started.
                           </span>
                        <h4 data-translate-key="My Skills" className='mySkills'>My Skills</h4>
                        <ul>
                            <li data-translate-key="Perseverance">Perseverance</li>
                            <li data-translate-key="Purposefulness">Purposefulness</li>
                            <li data-translate-key="Aresponsibility">A responsibility</li>
                            <li data-translate-key="Sociability">Sociability</li>
                            <li data-translate-key="SkillTeam">Skill to work in team</li>
                            <li data-translate-key="Adapt"> Quickly adapt in new conditions</li>
                        </ul>
                        <h4 data-translate-key="inSocial">Оn the web</h4>
                        <a className='item_content' href='https://vk.com/vlad1552333' target='blank'><span className='menu_icon icon_vk'></span><span>Vk</span></a>
                        <a className='item_content' href='https://github.com/Vladislav1552' target='blank'><span className='menu_icon icon_github'></span>Github  </a>
                        <a className='item_content' href='https://www.instagram.com/vlad_vorobei3' target='blank'><span className='menu_icon icon_instagram'></span>Instagram</a>
                        <a className='item_content' href='https://www.facebook.com/vlad.vorobyev.359' target='blank'><span className='menu_icon icon_facebook'></span>Facebook</a>

                    </div>

                </div>


                <div className='App__4st-slide_CareerWrapper'>
                    <div className='App__4st-slide_CareerType'>
                        <div></div><span data-translate-key="My story">My story</span>
                    </div>
                    <div className='App__4st-slide__tree_container App__4st-slide__tree_container--1stPosition'><h3 data-translate-key="First step" className='App__4st-slide__tree-logo'>First step</h3><span data-translate-key="First step_text" className='App__4st-slide__tree-text'>At the beginning of 2016,  I've started started to learn programming languages of web design. Markup language HTML page and the formal language of CSS.</span></div>
                    <div className='App__4st-slide__tree_container App__4st-slide__tree_container--2stPosition'  > <h3 data-translate-key="First course" className='App__4st-slide__tree-logo' >First course </h3><span data-translate-key="First course _text" className='App__4st-slide__tree-text'>In the autumn of 2017 I took courses from EPAM on Front End, during the training I had to solve different types of problems, I was also introduced to the methodology of BEM and grid layout technology. It was my first layout project.</span></div>
                    <div className='App__4st-slide__tree_container App__4st-slide__tree_container--3stPosition'>  <div className='App__4st-slide__tree_container_magicButton' onClick={this.magic}></div> <h3 data-translate-key="RS School" className='App__4st-slide__tree-logo'>RS School </h3><span data-translate-key="RS School_text" className='App__4st-slide__tree-text' >In spring of 2018 I started training at the Rolling Scopes School and got a lot of useful experience. I also completed my first marcup-1 project at these courses.</span></div>
                </div>
                <div className='App__4st-slide_CareerWrapper'>
                    <div className='App__4st-slide_CareerType'>
                        <div></div><span data-translate-key="Some of them examples works">Some of them examples works </span>
                    </div>
                    <a href='https://vladislav1552.github.io/chill/' target='_blank' className='App__4st-slide_exampleImgChill' ></a>
                    <div className='App__4st-slide_react-game-button'><a href='https://vladislav1552.github.io/game-on-react' target="_blank" className='App__4st-slide_react-game-button_text'>Game react</a></div>
                </div>
                <div className='App__4st-slide_CareerWrapper'>
                    <div className='App__4st-slide_CareerType'>

                        <div></div><span data-translate-key="Professional skill" >Professional skill</span>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>Html5</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--Html5'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>CSS</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--CSS'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>JavaScript</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--JavaScript'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>ReactJS</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--ReactJS'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>Jquery</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--Jquery'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>NodeJs</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--NodeJs'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>WebPack</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--WebPack'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>GitHub</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--GitHub'></div>
                        </div>
                    </div>
                    <div className='ProgressBar'>
                        <span className='ProgressBar_Name'>Aspiration</span>
                        <div className='ProgressBar_bar'>
                            <div className='ProgressBar_bar-progress ProgressBar_bar-progress--Aspiration'></div>
                        </div>
                    </div>
                </div>
                <div className='App__4st-slide_CareerWrapper'>
                    <div className='App__4st-slide_CareerType'>
                        <div></div><span data-translate-key="Education" >Education</span>
                    </div>
                    <div className='App__4st-slide_education'>
                        <span data-translate-key="EEC&T" className='App__4st-slide_education-icon'> The first higher education | EEC&T</span>
                        <span><span>2012</span>-<span>2016</span></span>
                        <span data-translate-key="EEC&T_text" >He graduated from the Belarusian - Russian universitstvt and received a higher education in the field of preparation of electrical equipment of cars.</span>
                        <span data-translate-key="Master's Courses" className='App__4st-slide_education-icon' >Master's Courses</span>
                        <span><span>2016</span>-<span>2018</span></span>
                        <span data-translate-key="Master's Courses_text" >In March 2018 he graduated from the magistracy and received a master's degree in the direction of Energy.</span>
                        <span data-translate-key="Master's Courses 2.0" className='App__4st-slide_education-icon'>Master's Courses 2.0</span>
                        <span><span>2018</span>-<span>2020</span></span>
                        <span data-translate-key="Master's Courses 2.0_text" >In July I enter the magistracy in the specialty: System analysis.</span>

                    </div>
                </div>

                <div className='App__4st-slide_aboutMe_mainInfo' id='Feedback'>
                    <div className='App__4st-slide_contact'>
                        <div className='textIcon'>
                            <span className='textIcon_icon textIcon_icon--info'></span>
                            <h3 className='textIcon_text ' data-translate-key="Contact information">Contact information</h3>
                        </div>
                        <div className='textIcon'>
                            <span className='textIcon_icon textIcon_icon--phone'></span>
                            <h3 className='textIcon_text'><a className='tel' href='tel:+375293081693'>+375293081693</a></h3>
                        </div>
                        <div className='textIcon'>
                            <span className='textIcon_icon textIcon_icon--email'></span>
                            <h3 className='textIcon_text'><a className='mail' href='mailto:vladiskav333@gmail.com'>vladis<b>k</b>av333@gmail.com</a></h3>

                        </div>
                        <div className='textIcon'>
                            <a href='https://yandex.by/maps/158/mogilev/?mode=search&text=%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2&sll=30.331014%2C53.894617&sspn=0.314484%2C0.094497&ll=30.350112%2C53.881573&z=11' target='_blank' className='textIcon_icon textIcon_icon--map'></a>
                            <div className='textIcon_content'><span data-translate-key="Belarus">Belarus</span><span data-translate-key="Mogilev">Mogilev</span></div>
                        </div>
                    </div>
                </div>
            </section>



        );
    }
}

export default FourthSlide;
