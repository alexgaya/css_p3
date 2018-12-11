let overlay;
let contactInfo;
let contactForm;
let closeButton;


window.onload = function(){
	overlay = document.getElementById("overlay");
	contactInfo = document.getElementById("contactInfo");
	contactForm = document.getElementById("contact-form");
	closeButton = document.getElementById("overlayButton");
	let menu = document.getElementsByClassName("fa-bars")[0];
	let nav = document.getElementsByTagName("nav")[0];
	let dropdown = document.getElementsByClassName('dropdown');
	menu.onclick = function(){showNav(nav)};
	document.getElementById("c").onclick = function(){showOverlay()};
	closeButton.onclick = function(){hideOverlay()};
	if(window.innerWidth <= 600){
		let news = document.getElementById("news");
		let law = document.getElementById("lawyers");
		document.getElementById("pract").onclick = function(){displayPract(dropdown[0], law)};
		law.onclick = function(){displayLaw(dropdown[1], news)};
	}
	
}


window.addEventListener("resize", function(){
	if(window.innerWidth > 600){
		document.getElementsByTagName("nav")[0].style.display = "block";
	}else{
		document.getElementsByTagName("nav")[0].style.display = "none";
	}
});

function showNav(nav){
	if(getComputedStyle(nav).display == "none"){
		nav.style.display = "block";
	}else{
		nav.style.display = "none";
	}
	
}

function displayPract(dropdown, law){
	law.style.transitionDuration = "0s";
	if(getComputedStyle(dropdown).display == "none"){
		law.style.marginTop = '125px';
		dropdown.style.visibility = 'visible';
		dropdown.style.opacity = 1;
		dropdown.style.display = 'block';
		toggle0 = true;
	} else {
		law.style.marginTop = '0px';
		dropdown.style.visibility = 'hidden';
		dropdown.style.opacity = 0;
		dropdown.style.display = 'none';
		toggle0 = false;
	}
}

function displayLaw(dropdown){
	news.style.transitionDuration = "0s";
	if(getComputedStyle(dropdown).display == "none"){
		news.style.marginTop = '125px';
		dropdown.style.visibility = 'visible';
		dropdown.style.opacity = 1;
		dropdown.style.display = 'block';
		toggle1 = true;
	} else {
		news.style.marginTop = '0px';
		dropdown.style.visibility = 'hidden';
		dropdown.style.opacity = 0;
		dropdown.style.display = 'none';
		toggle1 = false;
	}
}

function showOverlay(){
	let w = 0;
	overlay.style.display = "grid";
	let move = setInterval(open,5);
	function open(){
		if(w == 100){
			clearInterval(move);
		} else {
			if(w == 25){
				closeButton.style.display = "block";
				contactInfo.style.display = "block";
				contactForm.style.display = "block";
			}
			w++;
			overlay.style.width = w + "%" ;
		}
	}	
}



function hideOverlay(){
	let w = 100;
	let move = setInterval(close,5);
	function close(){
		if(w == 0){
			clearInterval(move);

		} else {
			if(w == 25){
				closeButton.style.display = "none";
				contactInfo.style.display = "none";
				contactForm.style.display = "none";
			}
			w--;
			overlay.style.width = w + "%" ;
		}
	}	
}