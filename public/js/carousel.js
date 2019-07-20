$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 30,        
        nav: true,        
        responsive: {
            0: {
                items: 1,
                margin: 5
            },
            769: {
                items: 2
            },
            1025: {
                items: 3
            }
        }
    });

    let currentPrevIndex = 0;
    let currentActiveIndex = 0;
    let currentNextIndex = 1;
    let lastElementIndex = $('.owl-stage').children().length - 1;    
    let firstElementIndex = 0;

    let activeArray = [];
    let currentActive_a = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a');
    let currentActive_readMore = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more');
    activeArray[0] = currentActive_a;
    activeArray[1] = currentActive_readMore;

    let nextButtonEnabled = true;
    let prevButtonEnabled = false;
    let buttonsControl = false;

    const removeAndAddActiveClass = function (action) {
        if (action === 'next') {
            let index = $('.owl-stage').children('.active').eq(0).index();

            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a').removeClass('fifth-block-container-bottom-item__a_activ');
            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more').removeClass('fifth-block-container-bottom-item-read-more_activ');

            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__a').addClass('fifth-block-container-bottom-item__a_activ');
            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item-read-more').addClass('fifth-block-container-bottom-item-read-more_activ');

            currentActiveIndex = currentNextIndex;

        } else {
            let index = $('.owl-stage').children('.active').eq(0).index();

            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__a').removeClass('fifth-block-container-bottom-item__a_activ');
            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item-read-more').removeClass('fifth-block-container-bottom-item-read-more_activ');

            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a').addClass('fifth-block-container-bottom-item__a_activ');
            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more').addClass('fifth-block-container-bottom-item-read-more_activ');

            currentActiveIndex = currentPrevIndex + 1;
        }

    };

    // const addActiveClass = function () {
    //     let currentActive_a = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a');
    //     let currentActive_readMore = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more');

    //     activeArray[0] = currentActive_a;
    //     activeArray[1] = currentActive_readMore;

    //     currentActive_a.addClass('fifth-block-container-bottom-item__a_activ');
    //     currentActive_readMore.addClass('fifth-block-container-bottom-item-read-more_activ');


    // };

    const addActiveClass = function (action) {

        if (action === 'next') {
            let currentActive_a = $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__a');
            let currentActive_readMore = $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item-read-more');

            activeArray[0] = currentActive_a;
            activeArray[1] = currentActive_readMore;

            currentActive_a.addClass('fifth-block-container-bottom-item__a_activ');
            currentActive_readMore.addClass('fifth-block-container-bottom-item-read-more_activ');
        } else {
            let currentActive_a = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a');
            let currentActive_readMore = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more');

            activeArray[0] = currentActive_a;
            activeArray[1] = currentActive_readMore;

            currentActive_a.addClass('fifth-block-container-bottom-item__a_activ');
            currentActive_readMore.addClass('fifth-block-container-bottom-item-read-more_activ');
        }



    };

    const removeActiveClass = function () {
        if (activeArray[0]) {
            activeArray[0].removeClass('fifth-block-container-bottom-item__a_activ');
            activeArray[1].removeClass('fifth-block-container-bottom-item-read-more_activ');
        } else {
            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a').removeClass('fifth-block-container-bottom-item__a_activ');
            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more').removeClass('fifth-block-container-bottom-item-read-more_activ');
        }
    };


    const clearAndAddShadow = function () {
        let notActive = $('.owl-stage').children(':not([active])');

        $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;

        $(readMore_notActive).hasClass("fifth-block-container-bottom-item-read-more_activ") ?
            $(readMore_notActive).removeClass('fifth-block-container-bottom-item-read-more_activ') : null;

    };

    //обработчик на свайп
    if ($(window).width() > 1024) {
        $('.fifth-block-container-bottom-item__a').eq(1).addClass('fifth-block-container-bottom-item__a_activ');
        $('.fifth-block-container-bottom-item-read-more').eq(1).addClass('fifth-block-container-bottom-item-read-more_activ');
        $('.owl-stage').children('.active').eq(0).addClass('shadow');
        $('.owl-stage').children('.active').eq(1).addClass('shadow-middle-el');
        $('.owl-stage').children('.active').eq(2).addClass('shadow');

        owl.on('translated.owl.carousel', function (e) {
            let notActive = $('.owl-stage').children(':not([active])');
            let a_notActive = $(notActive).find('.fifth-block-container-bottom-item__a');
            let readMore_notActive = $(notActive).find('.fifth-block-container-bottom-item-read-more');

            $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;
            $(notActive).hasClass("shadow-middle-el") ? $(notActive).removeClass('shadow-middle-el') : null;


            $(a_notActive).hasClass("fifth-block-container-bottom-item__a_activ") ?
                $(a_notActive).removeClass('fifth-block-container-bottom-item__a_activ') : null;

            $(readMore_notActive).hasClass("fifth-block-container-bottom-item-read-more_activ") ?
                $(readMore_notActive).removeClass('fifth-block-container-bottom-item-read-more_activ') : null;

            $('.owl-stage').children('.active').eq(0).addClass('shadow');
            $('.owl-stage').children('.active').eq(1).addClass('shadow-middle-el');
            $('.owl-stage').children('.active').eq(2).addClass('shadow');

            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__a').addClass('fifth-block-container-bottom-item__a_activ');
            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item-read-more').addClass('fifth-block-container-bottom-item-read-more_activ');
        });


        //обработчики на кнопки
        let currentActiveIndex = 0;
        let lastElementIndex = $('.owl-stage').children().length - 3;

        $('.next').on('click', function () {
            owl.trigger('next.owl.carousel');

            currentActiveIndex === lastElementIndex - 1 ? $('.next').addClass('fifth-block-container-buttons__btn_disabled') :
                $('.prev').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.prev').removeClass('fifth-block-container-buttons__btn_disabled') : null;

            currentActiveIndex < lastElementIndex ? currentActiveIndex++ : null;
        });


        $('.prev').on('click', function (event) {
            owl.trigger('prev.owl.carousel');

            currentActiveIndex === 1 ? $('.prev').addClass('fifth-block-container-buttons__btn_disabled') :
                $('.next').hasClass('fifth-block-container-buttons__btn_disabled') ? $('.next').removeClass('fifth-block-container-buttons__btn_disabled') : null;

            currentActiveIndex > 0 ? currentActiveIndex-- : null;
        });

    } else if ($(window).width() > 768) {

        $('.fifth-block-container-bottom-item__a').eq(0).addClass('fifth-block-container-bottom-item__a_activ');
        $('.fifth-block-container-bottom-item-read-more').eq(0).addClass('fifth-block-container-bottom-item-read-more_activ');

        $('.owl-stage').children('.active').eq(0).addClass('shadow');
        $('.owl-stage').children('.active').eq(1).addClass('shadow');



        // обработчик на событие 'translated.owl.carousel'
        owl.on('translated.owl.carousel', function () {
            currentNextIndex = $('.owl-stage').children('.active').eq(1).index();
            currentPrevIndex = $('.owl-stage').children('.active').eq(0).index();

            if (currentNextIndex != lastElementIndex || currentActiveIndex != lastElementIndex) {
                $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
                nextButtonEnabled = true;
            } else {
                $('.next').addClass('fifth-block-container-buttons__btn_disabled');
                nextButtonEnabled = false;
            }

            if (currentPrevIndex != firstElementIndex) {
                $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
                prevButtonEnabled = true;
            } else {
                $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                prevButtonEnabled = false;
            }

            if (!buttonsControl) {
                removeActiveClass();
                addActiveClass();
                currentActiveIndex = currentPrevIndex;
            }

            buttonsControl = false;


        });


        owl.on('next.owl.carousel', function () {
            buttonsControl = true;
            currentNextIndex = $('.owl-stage').children('.active').eq(1).index();

            let notActive = $('.owl-stage').children(':not([active])');
            $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;

            $('.owl-stage').children('.active').eq(0).addClass('shadow');
            $('.owl-stage').children('.active').eq(1).addClass('shadow');

            addActiveClass('next');

            currentActiveIndex = currentNextIndex;
            currentPrevIndex = currentActiveIndex - 1;

            if (currentActiveIndex === lastElementIndex) {
                $('.next').addClass('fifth-block-container-buttons__btn_disabled');
                nextButtonEnabled = false;
            }
        });

        owl.on('prev.owl.carousel', function () {
            buttonsControl = true;
            currentPrevIndex = $('.owl-stage').children('.active').eq(0).index();

            let notActive = $('.owl-stage').children(':not([active])');

            $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;

            $('.owl-stage').children('.active').eq(0).addClass('shadow');
            $('.owl-stage').children('.active').eq(1).addClass('shadow');

            addActiveClass();


            currentActiveIndex = currentPrevIndex;
            currentNextIndex = currentActiveIndex + 1;


            if (currentActiveIndex === firstElementIndex) {
                $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                prevButtonEnabled = false;
            }



        });





        //обработчики на кнопки            

        // $('.next').on('click', function () { 
        //     if (nextButtonEnabled) {
        //         currentNextIndex = $('.owl-stage').children('.active').eq(1).index();

        //         if (currentActiveIndex === lastElementIndex - 1) {
        //             $('.next').addClass('fifth-block-container-buttons__btn_disabled');
        //             nextButtonEnabled = false;
        //             removeAndAddActiveClass('next');                    
        //         } else {
        //             if (!prevButtonEnabled) {
        //                 $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
        //                 prevButtonEnabled = true;
        //             }
        //             removeActiveClass();
        //             owl.trigger('next.owl.carousel'); 
        //         }
        //     }

        // });


        // $('.prev').on('click', function () {

        //     if (prevButtonEnabled) {
        //         currentPrevIndex = $('.owl-stage').children('.active').eq(0).index() - 1;


        //         if (currentActiveIndex === lastElementIndex) {
        //             removeAndAddActiveClass('prev');
        //         } else {
        //             removeActiveClass();
        //             owl.trigger('prev.owl.carousel');
        //         }

        //         if (currentActiveIndex != firstElementIndex) {
        //             if (!nextButtonEnabled) {
        //                 $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
        //                 nextButtonEnabled = true;
        //             }
        //         } else {
        //             $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
        //             prevButtonEnabled = false;
        //         }

        //     }
        // });








        $('.next').on('click', function () {

            if (nextButtonEnabled) {
                currentNextIndex = $('.owl-stage').children('.active').eq(1).index();

                if (!prevButtonEnabled) {
                    $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
                    prevButtonEnabled = true;
                }

                if (currentActiveIndex != currentNextIndex) {
                    removeActiveClass();
                    currentActiveIndex = currentNextIndex;
                    addActiveClass('next');
                    if (currentActiveIndex === lastElementIndex) {
                        $('.next').addClass('fifth-block-container-buttons__btn_disabled');
                        nextButtonEnabled = false;
                    }

                } else {
                    removeActiveClass();
                    owl.trigger('next.owl.carousel');
                }


            }

        });


        $('.prev').on('click', function () {

            if (prevButtonEnabled) {
                currentPrevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (!nextButtonEnabled) {
                    $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
                    nextButtonEnabled = true;
                }

                if (currentActiveIndex != currentPrevIndex) {
                    removeActiveClass();
                    currentActiveIndex = currentPrevIndex;
                    addActiveClass();
                    if (currentActiveIndex === firstElementIndex) {
                        $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                        prevButtonEnabled = false;
                    }

                } else {
                    removeActiveClass();
                    owl.trigger('prev.owl.carousel');
                }




                // if (currentActiveIndex === lastElementIndex) {
                //     removeAndAddActiveClass('prev');
                // } else {
                //     removeActiveClass();
                //     owl.trigger('prev.owl.carousel');
                // }

                // if (currentActiveIndex != firstElementIndex) {
                //     if (!nextButtonEnabled) {
                //         $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
                //         nextButtonEnabled = true;
                //     }
                // } else {
                //     $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                //     prevButtonEnabled = false;
                // }

            }
        });


    } else {

        const addActiveClass = function () {            

            let currentActive_a = $('.owl-stage').children('.active').find('.fifth-block-container-bottom-item__a');
            let currentActive_readMore = $('.owl-stage').children('.active').find('.fifth-block-container-bottom-item-read-more');

            activeArray[0] = currentActive_a;
            activeArray[1] = currentActive_readMore;

            currentActive_a.addClass('fifth-block-container-bottom-item__a_activ');
            currentActive_readMore.addClass('fifth-block-container-bottom-item-read-more_activ');

        };

        const removeActiveClass = function () {
            if (activeArray[0]) {
                activeArray[0].removeClass('fifth-block-container-bottom-item__a_activ');
                activeArray[1].removeClass('fifth-block-container-bottom-item-read-more_activ');
            }
        };


        $('.fifth-block-container-bottom-item__a').eq(0).addClass('fifth-block-container-bottom-item__a_activ');
        $('.fifth-block-container-bottom-item-read-more').eq(0).addClass('fifth-block-container-bottom-item-read-more_activ');

        $('.owl-stage').children('.active').eq(0).addClass('shadow');
        $('.owl-stage').children('.active').eq(1).addClass('shadow');



        // обработчик на событие 'translated.owl.carousel'
        owl.on('translated.owl.carousel', function () {
            
            currentActiveIndex = $('.owl-stage').children('.active').index();
            
            if (currentActiveIndex != lastElementIndex) {
                $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
                nextButtonEnabled = true;
            } else {
                $('.next').addClass('fifth-block-container-buttons__btn_disabled');
                nextButtonEnabled = false;
            }

            if (currentActiveIndex != firstElementIndex) {
                $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
                prevButtonEnabled = true;
            } else {
                $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                prevButtonEnabled = false;
            }

            if (!buttonsControl) {
                removeActiveClass();
                addActiveClass();

            }

            buttonsControl = false;


        });


        owl.on('next.owl.carousel', function () {
            
            buttonsControl = true;            

            let notActive = $('.owl-stage').children(':not([active])');
            $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;

            $('.owl-stage').children('.active').eq(0).addClass('shadow');
            $('.owl-stage').children('.active').eq(1).addClass('shadow');

            addActiveClass();

            
        });

        owl.on('prev.owl.carousel', function () {
            buttonsControl = true;            

            let notActive = $('.owl-stage').children(':not([active])');
            $(notActive).hasClass("shadow") ? $(notActive).removeClass('shadow') : null;

            $('.owl-stage').children('.active').eq(0).addClass('shadow');
            $('.owl-stage').children('.active').eq(1).addClass('shadow');

            addActiveClass();
        });




        $('.next').on('click', function () {

            if (nextButtonEnabled) {
                currentActiveIndex++;                            

                if (!prevButtonEnabled) {
                    $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
                    prevButtonEnabled = true;
                }


                if (currentActiveIndex === lastElementIndex) {
                    $('.next').addClass('fifth-block-container-buttons__btn_disabled');
                    nextButtonEnabled = false;
                }




                removeActiveClass();
                owl.trigger('next.owl.carousel');



            }

        });


        $('.prev').on('click', function () {

            if (prevButtonEnabled) {
                currentActiveIndex--;

                if (!nextButtonEnabled) {
                    $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
                    nextButtonEnabled = true;
                }


                if (currentActiveIndex === firstElementIndex) {
                    $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                    prevButtonEnabled = false;
                }


                removeActiveClass();
                owl.trigger('prev.owl.carousel');





               

            }
        });









    }
});