/*
 * Archivo principal de JS
 */
var body = document.getElementsByTagName("BODY")[0];
	body.setAttribute('onscroll','bar()');

var headerHTML = document.getElementById('headerHTML');
var presentation = document.getElementById('presentation');

var imgPortafolio = ['cabin.png','cake.png','circus.png','game.png','safe.png','submarine.png'];
var portaforlio = document.getElementById('img-portafolio');

function bar() {
	if (body.scrollTop > 0) {
		headerHTML.classList.add('header2');
		presentation.classList.add('presentation2');
	}else{
		headerHTML.classList.remove('header2');
		presentation.classList.remove('presentation2');
	}
}

var rowPortafolio = document.createElement('div');
	rowPortafolio.setAttribute('class','row');
	portaforlio.appendChild(rowPortafolio);
for (var i = 0; i < imgPortafolio.length; i++) {
	var divImgPortafolio = document.createElement('div');
		divImgPortafolio.setAttribute('class','col-4');
	var img = document.createElement('img');
		img.src = 'assets/images/portfolio/' + imgPortafolio[i];

	divImgPortafolio.appendChild(img);
	rowPortafolio.appendChild(divImgPortafolio);
}