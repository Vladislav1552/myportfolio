import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import FirstSlide from './FirstSlide/FirstSlide.js';
import SecondSlide from './SecondSlide/SecondSlide.js';
import ThirdSlide from './ThirdSlide/ThirdSlide.js';
import video from './video/videoplayback.mp4'
import FourthSlide from './FourthSlide/FourthSlide.js'

class App extends Component {
 /* constructor(props) {
    super(props);
    this.state = {
      isHide: false,
    }
    this.hideBar = this.hideBar.bind(this)
  }

  hideBar() {
    let { isHide } = this.state
    window.scrollY < this.prev ?
      !isHide && this.setState({ isHide: true })
      :
      isHide && this.setState({ isHide: false })
    this.prev = window.scrollY;
  }
  */

  componentDidMount() {
    $(document).ready(function () {
      $('a[data-translate-key="Feedback"]').click(function () {
        $('.App__4st-slide_contact').addClass('Shadow')
        setTimeout(() => {
          $('.App__4st-slide_contact').removeClass('Shadow')
        }, 6000);
      })
      /*  $(this).mousemove(function (e) {
          var X = e.pageX/1000;
          var Y = e.pageY;
          $('.tree').css({
            transform: `translate(0%, ` + Y / 300 + '%',
          })
        });
        */
   $(window).scroll(function () {
        if ($(window).scrollTop() > 120) {
          $('.App__2st-slide_imageHtmlCssJs').fadeIn(2000) && $('.App__2st-slide_about').fadeIn(2000);
        } else {
          $('.App__2st-slide_imageHtmlCssJs').fadeOut(400) && $('.App__2st-slide_about').fadeOut(400);
        }
        if ($(window).scrollTop() > 450) {

          $('.App__3st-slide_skill').fadeIn(600)
        } else {
          $('.App__3st-slide_skill').fadeOut(400)
        }
        if ($(window).scrollTop() > 550) {
          $('.Menu').css({ 'display': 'flex' })

        } else {
          $('.Menu').css({ 'display': 'none' })
        }
      });
    });

  window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

     render() {
    //let classHide = this.state.isHide ? "hide" : ""
        return (
         <div className="App">
           <FirstSlide />
           <SecondSlide />
           <ThirdSlide />
           <FourthSlide />
         </div>
    );
  }
}

export default App;
