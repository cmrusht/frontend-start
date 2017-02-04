(function(){

  let menu_mobile = document.getElementById("menu-nav-mobile");
  //var htmlclick1 = document.getElementById("htmlclick1");

  function menudropdownlink() {
    window.location.href = this.value;

    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
  }
  /*function loadjsonfile() {
    alert("hey");
    readJSON("../snippets/snippet_test.json");

    event.preventDefault(); // disables default form submission
    return false; // prevents further "bubbling" up of event
  }*/

 // menu_mobile.addEventListener("change", menudropdownlink);
  htmlclick1.addEventListener("click", loadjsonfile);
  
}());
// the final brackets () make the anonymous function execute immediately