

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
    $('.star').toggle('wiggle')
    $('.mainLang').css("color", "white")
    $('.bottom').css("background-color", "#FAB152")
    $('.hamburger').attr("src", "frame2.svg");
    $('.site-footer a').css("color", "#FAB152")
    $('.site-footer-about a').css("color", "#FAB152")
  }

  function setDay() {
    if (location.href.includes("10")) {
    $('body').css("background-color", "#1D3273")  
    $('.site-footer-10').css("background-color", "#1D3273")
    $('#hamburger').attr("src", "frame3.svg");
    } else {
      $('body').css("background-color", "#FFEEDB")
    $('#hamburger').attr("src", "frame1.svg");
    }
    $('.site-footer').css("background-color", "#FFEEDB")
    $('.site-footer-about').css("background-color", "#FFEEDB")
    $('.star').toggle('wiggle')
    $('.mainLang').css("color", "black")
    $('.bottom').css("background-color", "black")
    $('.site-footer a').css("color", "#6351A3")
    $('.site-footer-about a').css("color", "#6351A3")
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