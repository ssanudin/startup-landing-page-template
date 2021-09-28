$(document).ready(function() {
  $(document).delegate(".navbar a", "click", function( event ) {
    let nav = $(this).attr('href');
    // console.log(nav);
    $('html, body').animate({
      scrollTop: $(nav).offset().top
    }, 1000);
  });

  const navbar = document.querySelector('.navbar');
  const navbar_toggler = document.querySelectorAll('.navbar-toggler span');
  window.onscroll = () => {
    if (window.scrollY > 400) {
        navbar.classList.remove('nav-color-white');
        navbar_toggler.forEach((span)=>{
          span.classList.add('navbae-toggler-yellow');
        });
    } else {
        navbar.classList.add('nav-color-white');
        navbar_toggler.forEach((span)=>{
          span.classList.remove('navbae-toggler-yellow');
        });
    }
  };

});