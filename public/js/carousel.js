$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1                           
            },
            976: {
                items: 2
            },
            1350: {
                items: 3
            }
        }
    });

    let prevIndex = 0;    
    let nextIndex = 1;
    let lastElementIndex = $('.owl-stage').children().length - 1;
    let firstElementIndex = 0;

    let currentActiveElements = [];
    let currentActive_a;
    let currentActive_readMore;

    let nextButtonEnabled = true;
    let prevButtonEnabled = false;    

    const addActiveClass = function (index) {
        let currentActive_a = $('.owl-stage').children('.active').eq(index).find('.fifth-block-container-bottom-item__a');
        let currentActive_readMore = $('.owl-stage').children('.active').eq(index).find('.fifth-block-container-bottom-item-read-more');

        currentActiveElements[0] = currentActive_a;
        currentActiveElements[1] = currentActive_readMore;

        currentActive_a.addClass('fifth-block-container-bottom-item__a_activ');
        currentActive_readMore.addClass('fifth-block-container-bottom-item-read-more_activ');
    };

    const removeActiveClass = function () {
        if (currentActiveElements[0]) {
            currentActiveElements[0].removeClass('fifth-block-container-bottom-item__a_activ');
            currentActiveElements[1].removeClass('fifth-block-container-bottom-item-read-more_activ');
         
            if(currentActiveElements[0].parent().parent().hasClass('shadow-middle-el')) {
                currentActiveElements[0].parent().parent().removeClass('shadow-middle-el').addClass('shadow');  
            }
        }
    };

    const enableButton = function (button, enable) {
        switch (button) {
            case 'next':
                if (enable) {
                    $('.next').removeClass('fifth-block-container-buttons__btn_disabled');
                    nextButtonEnabled = true;
                } else {
                    $('.next').addClass('fifth-block-container-buttons__btn_disabled');
                    nextButtonEnabled = false;
                }
                break;

            case 'prev':
                if (enable) {
                    $('.prev').removeClass('fifth-block-container-buttons__btn_disabled');
                    prevButtonEnabled = true;
                } else {
                    $('.prev').addClass('fifth-block-container-buttons__btn_disabled');
                    prevButtonEnabled = false;
                }
                break
            default:
                return;
        }
    };

    //3 item
    if ($(window).width() >= 1350) {

        currentActive_a = $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item__a');
        currentActive_readMore = $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item-read-more');
        currentActiveElements[0] = currentActive_a;
        currentActiveElements[1] = currentActive_readMore;

        currentActiveElements[0].addClass('fifth-block-container-bottom-item__a_activ');
        currentActiveElements[1].addClass('fifth-block-container-bottom-item-read-more_activ');
        
        $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item').removeClass('shadow').addClass('shadow-middle-el');  
        
        owl.on('translated.owl.carousel', function (e) {
            nextIndex = $('.owl-stage').children('.active').eq(2).index();
            prevIndex = $('.owl-stage').children('.active').eq(0).index();

            if (nextIndex == lastElementIndex) {
                enableButton('next', false);
            } else if (prevIndex == firstElementIndex) {
                enableButton('prev', false);
            } else {
                enableButton('next', true);
                enableButton('prev', true);
            }
            removeActiveClass();
            addActiveClass(1);
            $('.owl-stage').children('.active').eq(1).find('.fifth-block-container-bottom-item').removeClass('shadow').addClass('shadow-middle-el');  

        });

        //обработчики на кнопки
        $('.next').on('click', function () {
            if (nextButtonEnabled) {
                owl.trigger('next.owl.carousel');
                nextIndex = $('.owl-stage').children('.active').eq(2).index();
                prevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (nextIndex == lastElementIndex) {
                    enableButton('next', false);
                } else if (prevIndex == firstElementIndex) {
                    enableButton('prev', false);
                } else {
                    enableButton('next', true);
                    enableButton('prev', true);
                }
                removeActiveClass();
                addActiveClass(1);
            }
        });

        $('.prev').on('click', function (event) {
            if (prevButtonEnabled) {
                owl.trigger('prev.owl.carousel');
                nextIndex = $('.owl-stage').children('.active').eq(2).index();
                prevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (nextIndex == lastElementIndex) {
                    enableButton('next', false);
                } else if (prevIndex == firstElementIndex) {
                    enableButton('prev', false);
                } else {
                    enableButton('next', true);
                    enableButton('prev', true);
                }
                removeActiveClass();
                addActiveClass(1);
            }
        })
    //2 item
    } else if ($(window).width() >= 976) {

        currentActive_a = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a');
        currentActive_readMore = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more');
        currentActiveElements[0] = currentActive_a;
        currentActiveElements[1] = currentActive_readMore;

        currentActiveElements[0].addClass('fifth-block-container-bottom-item__a_activ');
        currentActiveElements[1].addClass('fifth-block-container-bottom-item-read-more_activ');

        owl.on('translated.owl.carousel', function (e) {
            nextIndex = $('.owl-stage').children('.active').eq(1).index();
            prevIndex = $('.owl-stage').children('.active').eq(0).index();

            if (nextIndex == lastElementIndex) {
                enableButton('next', false);
            } else if (prevIndex == firstElementIndex) {
                enableButton('prev', false);
            } else {
                enableButton('next', true);
                enableButton('prev', true);
            }
            removeActiveClass();
            addActiveClass(0);
        });

        //обработчики на кнопки
        $('.next').on('click', function () {
            if (nextButtonEnabled) {
                nextIndex = $('.owl-stage').children('.active').eq(1).index();
                prevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (nextIndex == lastElementIndex) {
                    enableButton('next', false);
                } else if (prevIndex == firstElementIndex) {
                    enableButton('prev', false);
                } else {
                    enableButton('next', true);
                    enableButton('prev', true);
                }
                removeActiveClass();
                addActiveClass(1);

                owl.trigger('next.owl.carousel');
            }
        });

        $('.prev').on('click', function (event) {
            if (prevButtonEnabled) {
                owl.trigger('prev.owl.carousel');
                nextIndex = $('.owl-stage').children('.active').eq(2).index();
                prevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (nextIndex == lastElementIndex) {
                    enableButton('next', false);
                } else if (prevIndex == firstElementIndex) {
                    enableButton('prev', false);
                } else {
                    enableButton('next', true);
                    enableButton('prev', true);
                }
                removeActiveClass();
                addActiveClass(1);
            }
        })

    //1 item
    } else { 
        currentActive_a = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item__a');
        currentActive_readMore = $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item-read-more');
        currentActiveElements[0] = currentActive_a;
        currentActiveElements[1] = currentActive_readMore;

        currentActiveElements[0].addClass('fifth-block-container-bottom-item__a_activ');
        currentActiveElements[1].addClass('fifth-block-container-bottom-item-read-more_activ');

        // $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item').removeClass('shadow').addClass('shadow-middle-el');  

        owl.on('translated.owl.carousel', function (e) {
            nextIndex = $('.owl-stage').children('.active').eq(0).index();
            prevIndex = $('.owl-stage').children('.active').eq(0).index();
            
            if (nextIndex == lastElementIndex) {
                enableButton('next', false);
            } else if (prevIndex == firstElementIndex) {
                enableButton('prev', false);
            } else {
                enableButton('next', true);
                enableButton('prev', true);
            }
            removeActiveClass();
            addActiveClass(0);
            $('.owl-stage').children('.active').eq(0).find('.fifth-block-container-bottom-item').removeClass('shadow').addClass('shadow-middle-el');
        });

        //обработчики на кнопки
        $('.next').on('click', function () {
            if (nextButtonEnabled) {
                owl.trigger('next.owl.carousel');
                nextIndex = $('.owl-stage').children('.active').eq(0).index();
                prevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (nextIndex == lastElementIndex) {
                    enableButton('next', false);
                } else if (prevIndex == firstElementIndex) {
                    enableButton('prev', false);
                } else {
                    enableButton('next', true);
                    enableButton('prev', true);
                }
                removeActiveClass();
                addActiveClass(0);
            }
        });

        $('.prev').on('click', function (event) {
            if (prevButtonEnabled) {
                owl.trigger('prev.owl.carousel');
                nextIndex = $('.owl-stage').children('.active').eq(0).index();
                prevIndex = $('.owl-stage').children('.active').eq(0).index();

                if (nextIndex == lastElementIndex) {
                    enableButton('next', false);
                } else if (prevIndex == firstElementIndex) {
                    enableButton('prev', false);
                } else {
                    enableButton('next', true);
                    enableButton('prev', true);
                }
                removeActiveClass();
                addActiveClass(0);
            }
        })
    }
});