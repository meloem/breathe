

$(document).ready(function(){

  if( $(window).width() > 300){

    setInterval(function(){
      $(".star2").toggle('wiggle')
      setTimeout(function(){
        $('.star2').toggle('wiggle')
      },2500)
    },7500)

    setInterval(function(){
      $(".star7").toggle('wiggle')
      setTimeout(function(){
        $('.star7').toggle('wiggle')
      },2000)
    },6000)

    setInterval(function(){
      $(".star3").toggle('wiggle')
      setTimeout(function(){
        $('.star3').toggle('wiggle')
      },4000)
    },7000)
  }

  function setNight() {
    $('.container').css("background-color", "black")
    $('.star').toggle('wiggle')
    $('.mainLang').css("color", "white")
    $('.bottom').css("background-color", "#F4D03F")
  }

  function setDay() {
    $('.container').css("background-color", "white")
    $('.star').toggle('wiggle')
    $('.mainLang').css("color", "black")
    $('.bottom').css("background-color", "black")
  }

  function toggleDayNight() {
    if (day === true) {
      setNight()
      day = false
    } else {
      setDay()
      day = true
    }
  }

  $('.slider').click(toggleDayNight)

  var hrs = new Date().getHours()
  var day = true

  if ( hrs > 19 || hrs < 8 ) {
    $('.slider').click()
  }

  function displayElts(){
    function checkInView (element) {
      var coords = element.getBoundingClientRect()
      return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) * 1)
    }

    $('.checkIfInView').each(function(i, el){
      if( $(el).css('visibility')!=='visible' && checkInView(el) ){
        $(el).css('visibility', 'visible')
        $(el).css('opacity', 1)
      }
    })
  }

  displayElts()
  $(window).scroll(displayElts)
})