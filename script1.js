// JavaScript for changing style on scroll
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("main-nav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// JavaScript for active menu item
var menuItems = document.querySelectorAll("#main-nav ul li a");

menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
    // Remove active class from all items
    menuItems.forEach(function(link) {
      link.classList.remove("active");
    });

    // Add active class to the clicked item
    this.classList.add("active");
  });
});
