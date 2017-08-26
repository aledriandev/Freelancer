/*
 * Archivo principal de JS
 */
var body = document.getElementsByTagName("BODY")[0];
	body.setAttribute('onscroll','bar()');

var headerHTML = document.getElementById('headerHTML');
var presentation = document.getElementById('presentation');

var imgPortafolio = ['cabin.png','cake.png','circus.png','game.png','safe.png','submarine.png'];
var projectTitle = ['CABIN PROJECT','CAKE PROJECT','CIRCUS PROJECT','GAME PROJECT','SAFE PROJECT','SUBMARINE PROJECT'];
var portaforlio = document.getElementById('img-portafolio');
var arrayPortafolio =[];

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
	var colImgPortafolio = document.createElement('div');
		colImgPortafolio.setAttribute('class','col-4');
	var divImgPortafolio = document.createElement('div');
		divImgPortafolio.setAttribute('class','div-portafolio');
		divImgPortafolio.setAttribute('onclick','expent(this)');
	var img = document.createElement('img');
		img.src = 'assets/images/portfolio/' + imgPortafolio[i];
	var expandir = document.createElement('div');
		expandir.setAttribute('class','expent');
	var lupa = document.createElement('span');
		lupa.setAttribute('class','fa fa-search-plus fa-5x');
	expandir.appendChild(lupa);
	arrayPortafolio.push(divImgPortafolio);
	divImgPortafolio.appendChild(img);
	divImgPortafolio.appendChild(expandir);
	colImgPortafolio.appendChild(divImgPortafolio);
	rowPortafolio.appendChild(colImgPortafolio);
}

function expent(event){
	
	var position = arrayPortafolio.indexOf(event);
	var fondo = document.createElement('div'); // es donde se ubicara la imagen
		fondo.setAttribute('class','fondo');
	var divImg = document.createElement('div');
		divImg.setAttribute('class', 'div-img');
	var title = document.createElement('h1');
		var t = document.createTextNode(projectTitle[position]);
		title.appendChild(t)
	var hr1 = document.createElement('hr');
		hr1.setAttribute('class','line-black');
	var star = document.createElement('span');
		star.setAttribute('class','fa fa-star fa-2x');
	var hr2 = document.createElement('hr');
		hr2.setAttribute('class','line-black');
	var	imgBig = document.createElement('img'); 
		imgBig.src ='assets/images/portfolio/' + imgPortafolio[position];
		imgBig.setAttribute('class','img-big');
		divImg.appendChild(title);
		divImg.appendChild(hr1);
		divImg.appendChild(star);
		divImg.appendChild(hr2);
		divImg.appendChild(imgBig);
		fondo.appendChild(divImg);
		portafolio.appendChild(fondo);
}