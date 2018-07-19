import React, { Component } from 'react';
import './ThirdSlide.css';
import $ from "jquery";
import videoWebm from '../video/videoplayback.webm'
import videoMp4 from '../video/videoplayback.mp4'
import team from '../img/team.jpg';
import bem from '../img/bem.png';
import tree from '../img/workflow-illustration.png';
import adaptiv from '../img/adaptiv.gif';
import aboutpicture from '../img/aboutpicture.png';
class ThirdSlide extends Component {

    render() {

        return (
            <section className='App__3st-slide' id='Skills'>
                <video autoPlay loop>
                    <source src={videoWebm} type="video/webm" />
                </video>
                <div className='App__3st-slide_skills'>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--HTML5 `} ><span className='App__3st-slide_skill-text'> HTML5 </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--CSS3 `} > <span className='App__3st-slide_skill-text'>CSS3 </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--JS `} ><span className='App__3st-slide_skill-text'> JS </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--NPM `} ><span className='App__3st-slide_skill-text'>NPM </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--WebPack `} ><span className='App__3st-slide_skill-text'>WebPack </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--ReactJs `} ><span className='App__3st-slide_skill-text'>ReactJs </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--Babel `} ><span className='App__3st-slide_skill-text'>Babel </span></div>
                    <div className={`App__3st-slide_skill App__3st-slide_skill--Github `} ><span className='App__3st-slide_skill-text'>Github </span></div>
                </div>
                <div className='App__3st-slide-photo'><h1 data-translate-key="Skills of working with the githab">Skills of working with the githab</h1><img src={tree} className='App__3st-slide-photo-tree' alt='tree' />
                    <div className='App__3st-slide-AboutSkillContainerMain'> 
                        <div className='App__3st-slide-AboutSkillContainer  '><h1 data-translate-key="Adaptive site layout">Adaptive site layout</h1><img src={adaptiv} className='App__3st-slide-picture' alt='tree' /></div>
                        <div className='App__3st-slide-AboutSkillContainer '><h1 data-translate-key="Willingness to work as a team">Willingness to work as a team</h1><img src={team} className='App__3st-slide-picture ' alt='team' /></div>
                        <div className='App__3st-slide-AboutSkillContainer '><h1 data-translate-key="Web development methodology is BEM">Web development methodology is BEM</h1><img src={bem} className='App__3st-slide-picture' alt=' BEM' /></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ThirdSlide;







