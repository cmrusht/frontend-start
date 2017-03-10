// Mobile navbar on click functions
(function(){

  // Get the mobile navbar object
  let menu_mobile = document.getElementById("menu-nav-mobile");
  //var htmlclick1 = document.getElementById("htmlclick1");

  function menudropdownlink() {
    window.location.href = this.value;
    // Go to the page in the navbar

    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
  }

  // Add event listener to mobile navbar
  menu_mobile.addEventListener("change", menudropdownlink);
  
}());
// the final brackets () make the anonymous function execute immediately