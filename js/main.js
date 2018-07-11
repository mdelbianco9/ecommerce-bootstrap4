
/*****   Sticky Navbar  ******/

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}

//    End of Sticky Navbar *******

// $(document).ready(function() {
  
//   $(window).scroll(function () {
//       //if you hard code, then use console
//       //.log to determine when you want the 
//       //nav bar to stick.  
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() > 40) {
//       $('#navbar').addClass('navbar-fixed');
//     }
//     if ($(window).scrollTop() < 40) {
//       $('#navbar').removeClass('navbar-fixed');
//     }
//   });
// });