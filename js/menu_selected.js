/*
* @param  host url of website
*/
function menuselect(host){
  // Splits the url and gets everything after website url base
	let tab = host.split("frontend-start/");
  
  // Splits the . out of the string
  let tab_stripped = tab[1].split(".");
  
  // If the returned array is more than 1 we arnt on homepage
  if (tab_stripped[0].length >= 1){
    
    // Remove all classes from navbar
    $("#navbar_" + tab_stripped[0]).siblings().removeClass('selected');
    // Add the class selected to the navbar class + the stripped url
    $("#navbar_" + tab_stripped[0]).addClass('selected');
    // Set the mobile navbars selected option to the current page
    document.getElementById('menu-nav-mobile').value = tab[1];
    
  }
  else {
    // We are on hompage remove all other classes and add selected to homepage nav
    $("#navbar_index").siblings().removeClass('selected');
    $("#navbar_index").addClass('selected');
    document.getElementById('menu-nav-mobile').value = "index.html";
  }
  

	
}

// Get host and execute menuselect function
let host = window.location.pathname;
menuselect(host);