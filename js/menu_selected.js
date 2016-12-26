function menuselect(host){
	let tab = host.split("frontend-start/");
  
  let tab_stripped = tab[1].split(".");
  
  if (tab_stripped[0].length >= 1){
    
    $("#navbar_" + tab_stripped[0]).siblings().removeClass('selected');
    $("#navbar_" + tab_stripped[0]).addClass('selected');
    document.getElementById('menu-nav-mobile').value = tab[1];
    
  }
  else {
    $("#navbar_index").siblings().removeClass('selected');
    $("#navbar_index").addClass('selected');
    document.getElementById('menu-nav-mobile').value = "index.html";
  }
  

	
}

let host = window.location.pathname;
menuselect(host);