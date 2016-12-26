function menuselect(host){
	let tab = host.split("/");
	
  let tab_stripped = tab[2].split(".");
  
  
  $("#navbar_" + tab_stripped[0]).siblings().removeClass('selected');
  $("#navbar_" + tab_stripped[0]).addClass('selected');
  document.getElementById('menu-nav-mobile').value = tab[2];

	
}

let host = window.location.pathname;
menuselect(host);