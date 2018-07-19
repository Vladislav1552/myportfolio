import React, { Component } from 'react';
import './Slider.css';
import $ from "jquery";
class Slider extends Component {

    componentDidMount() {

        $(document).ready(function () {

            var slideTimer;
            let next = 1
            var slideCall = $('.Slider_Content-slide').length;
            var slideNow = {
                now: next
            }

            slideTimer = setInterval(nextSlide, 3500);
            function nextSlide() {
                next++
                if (next > slideCall) {
                    next = 1
                    slideNow.now = 1;
                    $(`.Slider_status div`).css({
                        'background': 'none',
                    })
                }
                $('.Slider_Content-slide').fadeOut(100, function () {
                    $(`.Slider_status div:nth-child(${next})`).css({
                        'background': 'rgba(53, 189, 252, 1)',

                    })
                });

                $(`.Slider_Content-slide:nth-child(${next})`).fadeIn(100, function () {
                    $(`.Slider_status div:nth-child(${next - 1})`).css({
                        'background': 'none',
                    })
                });
                slideNow.now = next;

            }
            $('.Slider_Content-slide,.Slider_button,.Slider_status').hover(function () {

                clearInterval(slideTimer);

            }, function () {
                slideTimer = setInterval(nextSlide, 3500);
            });
            function slideLeft() {
                next++
                if (next > slideCall) {
                    next = 1
                    slideNow.now = 1;
                    $(`.Slider_status div`).css({
                        'background': 'none',
                    })
                }
                $('.Slider_Content-slide').fadeOut(100, function () {
                    $(`.Slider_status div:nth-child(${next})`).css({
                        'background': 'rgba(53, 189, 252, 1)',
                    })
                });
                $(`.Slider_Content-slide:nth-child(${next})`).fadeIn(100, function () {
                    $(`.Slider_status div:nth-child(${next - 1})`).css({
                        'background': 'none',
                    })
                });
                slideNow.now = next;
            }
            function slideRight() {
                next--
                if (next === 0) {
                    next = slideCall
                    slideNow.now = slideCall;
                    $(`.Slider_status div`).css({
                        'background': 'none',
                    })
                }
                $('.Slider_Content-slide').fadeOut(100, function () {
                    $(`.Slider_status div:nth-child(${next})`).css({
                        'background': ' rgba(53, 189, 252, 1)',

                    })
                });
                $(`.Slider_Content-slide:nth-child(${next})`).fadeIn(100, function () {
                    $(`.Slider_status div:nth-child(${next + 1})`).css({
                        'background': 'none',
                    })
                });
                slideNow.now = next;
            }
            let clickError = []

            $('.Slider_button:last-child').click(function () {
                slideLeft()
                clickValidation(3)
            })
            $('.Slider_button:first-child').on('click', function () {
                slideRight();
                clickValidation(4)
            })

            $(document).keydown(function (e) {

                if (e.keyCode == 37) {
                    slideRight();
                    clickValidation(4)
                } else if (e.keyCode == 39) {
                    slideLeft()
                    clickValidation(3)
                };

            });
            function clickValidation(e) {
                clickError.push(1)
                setTimeout(() => {
                    clickError.length = 0;
                }, 1800);
                if (clickError.length > e) {
                    clickError.length = 0;
                    $('.Slider_error').show(500)
                    $('.Slider').addClass('Slider--animateRotate')
                    setTimeout(() => {
                        $('.Slider').removeClass('Slider--animateRotate')
                        $('.Slider_error').hide(300);
                    }, 4500);
                }

            }

            /*
                     $(`.Slider_status div:nth-child(1)`).click(function () {
                         slideNow.now = 1;
                         $(`.Slider_Content-slide`).fadeOut(100, function () {
                             $('.Slider_status div').css({
                                 'background': 'none',
                             })
                         })
                         $(`.Slider_Content-slide:nth-child(1)`).fadeIn(300,function(){
                             $(`.Slider_status div:nth-child(1)`).css({
                                 'background': ' rgba(53, 189, 252, 1)',
                             })
                         })
                     })
                     $(`.Slider_status div:nth-child(2)`).click(function () {
                         slideNow.now = 2;
                         $(`.Slider_Content-slide`).fadeOut(100, function () {
                             $('.Slider_status div').css({
                                 'background': 'none',
                             })
                         })
                         $(`.Slider_Content-slide:nth-child(2)`).fadeIn(300, function () {
                             $(`.Slider_status div:nth-child(2)`).css({
                                 'background': ' rgba(53, 189, 252, 1)',
                             })
                         })
                     })
                     $(`.Slider_status div:nth-child(3)`).click(function () {
                         slideNow.now = 3;
                         $(`.Slider_Content-slide`).fadeOut(100, function () {
                             $('.Slider_status div').css({
                                 'background': 'none',
                             })
                         })
                         $(`.Slider_Content-slide:nth-child(3)`).fadeIn(300, function () {
                             $(`.Slider_status div:nth-child(3)`).css({
                                 'background': ' rgba(53, 189, 252, 1)',
                             })
                         })
                        
                     })
                */

        })

    }
    render() {
        return (
            <div className='Slider'>
                <div className='Slider_button'></div>
                <div className='Slider_Content'>
                    <div className='Slider_Content-slide'>
                        <span className='Slider_Content-slide_logo' data-translate-key="Slider_1st Slide" >Нey there! My name is Vlad and I am constantly improving in the field of web development. From the beginning - it was the middle of 2016- it have been written a lot lines of code. I try not to miss new opportunities and not to forget the basics.</span>

                    </div>
                    <div className='Slider_Content-slide'>
                        <span className='Slider_Content-slide_logo' > <span data-translate-key="Slider_2wo Slide">I am well in adapting to new conditions. During the training courses we were taught to work in a team and be able to work on one project.</span></span>
                    </div>
                    <div className='Slider_Content-slide'>
                        <span className='Slider_Content_logo3th' data-translate-key="Slider_3th Slide-main">Main skills</span>
                        <div className='Slider_Content_wrapper3th'>
                            <div className='ProgressBar ProgressBar--slider'>
                                <span className='ProgressBar_Name'>Html5</span>
                                <div className='ProgressBar_bar'>
                                    <div className='ProgressBar_bar-progress ProgressBar_bar-progress--Html5'></div>
                                </div>
                            </div>
                            <div className='ProgressBar ProgressBar--slider'>
                                <span className='ProgressBar_Name'>CSS</span>
                                <div className='ProgressBar_bar'>
                                    <div className='ProgressBar_bar-progress ProgressBar_bar-progress--CSS'></div>
                                </div>
                            </div>
                            <div className='ProgressBar ProgressBar--slider'>
                                <span className='ProgressBar_Name'>JavaScript</span>
                                <div className='ProgressBar_bar'>
                                    <div className='ProgressBar_bar-progress ProgressBar_bar-progress--JavaScript'></div>
                                </div>
                            </div>
                            <div className='ProgressBar ProgressBar--slider'>
                                <span className='ProgressBar_Name'>ReactJS</span>
                                <div className='ProgressBar_bar'>
                                    <div className='ProgressBar_bar-progress ProgressBar_bar-progress--ReactJS'></div>
                                </div>
                            </div>
                            <div className='ProgressBar ProgressBar--slider'>
                                <span className='ProgressBar_Name'>Jquery</span>
                                <div className='ProgressBar_bar'>
                                    <div className='ProgressBar_bar-progress ProgressBar_bar-progress--Jquery'></div>
                                </div>
                            </div>
                            <div className='ProgressBar ProgressBar--slider'>
                                <span className='ProgressBar_Name'>Aspiration</span>
                                <div className='ProgressBar_bar'>
                                    <div className='ProgressBar_bar-progress ProgressBar_bar-progress--Aspiration'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Slider_Content-slide'>
                        <div className='Slider_Content-wrapperContact'>
                            <div className='textIcon'>
                                <span className='textIcon_icon textIcon_icon--phone'></span>
                                <h3 className='textIcon_text'><a className='tel' href='tel:+375293081693'>+375293081693</a></h3>
                            </div>
                            <div className='textIcon'>
                                <span className='textIcon_icon textIcon_icon--email'></span>
                                <h3 className='textIcon_text'><a className='mail' href='mailto:vladiskav333@gmail.com'>vladis<b>k</b>av333@gmail.com</a></h3>
                            </div>
                            <div className='textIcon '>
                                <a href='https://yandex.by/maps/158/mogilev/?mode=search&text=%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2&sll=30.331014%2C53.894617&sspn=0.314484%2C0.094497&ll=30.350112%2C53.881573&z=11' target='_blank' className='textIcon_icon textIcon_icon--map'></a>
                                <div className='textIcon_content'><span>Беларусь</span><span>Могилев</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='Slider_status'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <span className='Slider_error' data-translate-key="Slider_errorMessage">Not so fast</span>
                    <div className='Slider_controle'></div>
                </div>
                <div className='Slider_button'></div>
            </div>
        );
    }
}

export default Slider;

















