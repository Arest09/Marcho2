$(function () {

  /* tabs */
/*   let tab = document.querySelector('.product-tabs__top');
  let tabItem = document.querySelectorAll('.product-tabs__top-item ');
  tabContent = document.querySelectorAll('.product-tabs__content-item')
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.closest('.product-tabs__top-item')) {
      for (let item of tabItem) {
        item.classList.remove('product-tabs__top-item--active')
      }
      event.target.closest('.product-tabs__top-item').classList.add('product-tabs__top-item--active')

      for (let item of tabContent) {
        item.classList.remove("product-tabs__content-item--active")
      }
      let id = event.target.closest('.product-tabs__top-item').getAttribute('href')
      console.log(document.querySelector(`${id}`).classList.add('product-tabs__content-item--active'))
    }
  }) */

    $('.product-tabs__top-item').on('click', function (e) {
      e.preventDefault();
      $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
      $(this).addClass('product-tabs__top-item--active')

       $('.product-tabs__content-item').removeClass('product-tabs__content-item--active'); 
       $($(this).attr('href')).addClass('product-tabs__content-item--active'); 
    })


  /*' '*/

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,

  })
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  })

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active')
    $(this).addClass('shop-content__filter-btn--active')
  })

  $('.button-list').on('click', () => {
    $('.product-item').addClass('product-item--list')
  })
  $('.button-grid').on('click', () => {
    $('.product-item').removeClass('product-item--list')
  })
  /*  let btn = document.querySelectorAll('.shop-content__filter-btn');
   for(let item of btn){
     item.addEventListener('click',function(event){
       if(event.target.closest('.shop-content__filter-btn')){
         for(let i of btn){
          i.classList.remove('shop-content__filter-btn--active'); 
         }
         item.classList.add('shop-content__filter-btn--active'); 
       }
     })
   } */

  /*  document.querySelector('.button-list').addEventListener('click', () => {
     document.querySelector('.product-item').classList.add('product-item--list')
   })
   document.querySelector('.button-grid').addEventListener('click', () => {
     document.querySelector('.product-item').classList.remove('product-item--list')
   }) */

  $('.select-style, .product-one__item-input').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  /* timer */
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }


  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
});