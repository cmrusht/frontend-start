function menuselect(host){
	let tab = host.split("/");
	let size = tab.length;
  
	if (size < 3) {
		$("#navbar_home").siblings().removeClass('selected');
		$("#navbar_home").addClass('selected');
	}
	else {
		$("#navbar_" + tab[size-2]).siblings().removeClass('selected');
		$("#navbar_" + tab[size-2]).addClass('selected');
		document.getElementById('menu-navigation-mobile').value = '/' + tab[size-2];
	}
	
}

let host = window.location.pathname;
menuselect(host);