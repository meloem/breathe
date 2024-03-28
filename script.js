

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
    $('body').css("background-color", "black")
    $('.site-footer').css("background-color", "black")
    $('.site-footer-about').css("background-color", "black")
    $('.site-footer-10').css("background-color", "black")
    $('.site-footer-478').css("background-color", "black")
    $('.site-footer-box').css("background-color", "black")
    $('.star').toggle('wiggle')
    $('.mainLang').css("color", "#87B6FF")
    $('.mainLang-boxbreathing').css("color", "#D9A3A3")
    $('.mainLang-box').css({"color": "#87B6FF", "opacity": "40%"})
    $('.bottom').css("background-color", "#FAB152")
    $('.hamburger').attr("src", "frame3.svg");
    $('.random').attr("src", "random3.svg");
    $('.site-footer a').css("color", "#87B6FF")
    $('.site-footer-about a').css("color", "#87B6FF")
    $('.site-footer-box a').css("color", "#D9A3A3")
    $('.slider').css("background-color", "#FAB152")
    $('.box').attr("src", "box2.gif");
  }
  function setDay() {
    if (location.href.includes("478")) {
      $('body').css("background-color", "#73464E");
      $('.site-footer-478').css("background-color", "#73464E");
      $('#hamburger').attr("src", "frame3.svg");
      $('.slider').css("background-color", "#D9A3A3");
    $('.random').attr("src", "random3.svg");
    } else if (location.href.includes("10")) {
      $('body').css("background-color", "#1D3273");
      $('.site-footer-10').css("background-color", "#1D3273");
      $('#hamburger').attr("src", "frame3.svg");
      $('.slider').css("background-color", "#D9A3A3");
    $('.random').attr("src", "random3.svg");
    } else if (location.href.includes("box")) {
      $('body').css("background-color", "#D9A3BC");
      $('.site-footer-box').css("background-color", "#D9A3BC");
      $('#hamburger').attr("src", "frame4.svg");
      $('.slider').css("background-color", "#8C2641");
    $('.random').attr("src", "random4.svg");
  } else if (location.href.includes("index")) {
    $('body').css("background-color", "#D3E8F4");
    $('.site-footer-box').css("background-color", "#D3E8F4");
    $('#hamburger').attr("src", "frame1.svg");
    $('.slider').css("background-color", "#6351A3");
  $('.random').attr("src", "random1.svg");
        } else {
          $('body').css("background-color", "#D3E8F4")
        $('#hamburger').attr("src", "frame1.svg");
      $('.slider').css("background-color", "#6351A3")
        }
    $('.site-footer').css("background-color", "#D3E8F4")
    $('.site-footer-about').css("background-color", "#D3E8F4")
    $('.star').toggle('wiggle')
    $('.mainLang').css("color", "#6351A3")
    $('.bottom').css("background-color", "black")
    $('.site-footer a').css("color", "#6351A3")
    $('.site-footer-about a').css("color", "#6351A3")
    $('.mainLang-box').css("color", "#6351A3")
    $('.box').attr("src", "box.gif");
    $('.mainLang-boxbreathing').css("color", "#8C2641")
    $('.site-footer-box a').css("color", "#8C2641")
  $('.random').attr("src", "random1.svg");
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

var dropdown = document.getElementById("dropdownMenu");
var hamburger = document.getElementsByClassName("hamburger")[0];  

document.addEventListener('click', function(event) {
    var isClickInsideHamburger = hamburger.contains(event.target);
    var isClickInsideDropdown = dropdown.contains(event.target);

    if (!isClickInsideDropdown && !isClickInsideHamburger) {
        dropdown.style.display = 'none';
    }
});

let count = 1;
const counter = document.getElementById('counter');

function updateCounter() {
    // Update the counter display and increment the count
    counter.textContent = count.toString();
    count = (count % 5) + 1;  // Reset to 1 after reaching 5
    
    // Call updateCounter every second
    setTimeout(updateCounter, 1000);
}

// Initialize the counter immediately
updateCounter();
