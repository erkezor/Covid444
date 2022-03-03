var fdfg = document.querySelector("img").addEventListener('mouseover', handleOver);
var fdfg = document.querySelector("img").addEventListener('mouseout', handleOut);

function handleOver(){
	this.style.borderColor = "white";
	this.style.boxShadow = "10px 20px 30px gray";
	this.style.transform = "translateY(-10px)";
}

function handleOut(){
	this.style.borderColor = null;
	this.style.boxShadow = null;
	this.style.transform = null;
}

var fdfg = document.querySelectorAll("img")[1].addEventListener('mouseover', handleOver);
var fdfg = document.querySelectorAll("img")[1].addEventListener('mouseout', handleOut);

function handleOver(){
	this.style.borderColor = "white";
	this.style.boxShadow = "10px 20px 30px gray";
	this.style.transform = "translateY(-10px)";
}

function handleOut(){
	this.style.borderColor = null;
	this.style.boxShadow = null;
	this.style.transform = null;
}

var fdfg = document.querySelectorAll("img")[2].addEventListener('mouseover', handleOver);
var fdfg = document.querySelectorAll("img")[2].addEventListener('mouseout', handleOut);

function handleOver(){
	this.style.borderColor = "white";
	this.style.boxShadow = "10px 20px 30px gray";
	this.style.transform = "translateY(-10px)";
}

function handleOut(){
	this.style.borderColor = null;
	this.style.boxShadow = null;
	this.style.transform = null;
}

var kp = document.querySelector(".text").addEventListener('keypress', colorr);

function colorr(){
	kp.style.color = "red";
}

