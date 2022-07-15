let x = 0;
let y = 0;
t = 0;
l = 0;
const music = new Audio('ressources/autoroute.mp3');
const music1 = new Audio('ressources/antoine_daniel.mp3');
const music2 = new Audio('ressources/chat.mp3');
nombre_click= 0;
let date = Date.now();
let date_depart = Date.now();
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function couleur_bouton() {
	let start = document.querySelector("#bouton_start");
	start.src="ressources/start1.png";
}
function bouton_start() {
	music1.play();
	y = 1;
	let voila = document.querySelector("#zone_click");
	let testtemps=Math.random(10);
	let temps=(testtemps+3+testtemps)*1000;
	date_depart=Date.now();
	sleep(temps);
	voila.style.backgroundColor="white";
	music2.play();
	date = Date.now();
	x = 1;
}
function decision() {
	if (y==1){
		let date1=Date.now();
		let resultat=document.querySelector("#resultat");
		resultat.innerHTML=x;
		let z = date1-date_depart;
		let p = date-date_depart;
		if (z-1==p||z==p||z-2==p){
			resultat.innerHTML="PERDU<br/>Vous avez appuyé trop tôt";
            x=0;
			y=0;
		}
		else{
			let reactivite=date1-date;
			resultat.innerHTML=reactivite;
			x=0;
			y=0;
		}
	}
}
function retry() {
	let voila = document.querySelector("#zone_click");
	voila.style.backgroundColor="blue";
	let resultat=document.querySelector("#resultat");
	resultat.innerHTML="";
}
function retry1() {
	let resultat=document.querySelector("#resultat");
	resultat.innerHTML="";
	l=0;
}
function spam() {
	if (l==0){
		if (t==0){
			let date = Date.now();
			d=date;
			t = 1;
			music.play();
		}
		nombre_click = nombre_click+1;
		let date1 = Date.now();
		let h = date1-d;
		if (h>5000){
			let resultat=document.querySelector("#resultat");
			resultat.innerHTML=nombre_click;
			nombre_click=0;
			l = 1;
			t=0;
		}
	}
}
function churchill() {
	const video1 = document.querySelector("#video");
	let video = document.querySelector("#video");
	a=(getRandomInt(11));
	if (a==0) {
		video.src="ressources/churchill1.mp4";
	}
	if (a==1) {
		video.src="ressources/churchill2.mp4";
	}
	if (a==2) {
		video.src="ressources/churchill3.mp4";
	}
	if (a==3) {
		video.src="ressources/churchill4.mp4";
	}
	if (a==4) {
		video.src="ressources/churchill5.mp4";
	}
	if (a==5) {
		video.src="ressources/churchill6.mp4";
	}
	if (a==6) {
		video.src="ressources/churchill7.mp4";
	}
	if (a==7) {
		video.src="ressources/churchill8.mp4";
	}
	if (a==8) {
		video.src="ressources/churchill9.mp4";
	}
	if (a==9) {
		video.src="ressources/churchill10.mp4";
	}
	if (a==10) {
		video.src="ressources/churchill11.mp4";
	}
	video1.play();

}
