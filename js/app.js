/*
 * Archivo principal de JS
 */
var body = document.getElementsByTagName("BODY")[0];
	body.setAttribute('onscroll','bar()');

var headerHTML = document.getElementById('headerHTML');
var presentation = document.getElementById('presentation');

function bar() {
	if (body.scrollTop > 0) {
		headerHTML.classList.add('header2');
		presentation.classList.add('presentation2');
	}else{
		headerHTML.classList.remove('header2');
		presentation.classList.remove('presentation2');
	}
}
