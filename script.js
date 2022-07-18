let x = 0;
let y = 0;
j = 0;
l = 0;
g = 0;
f = 0;
w = 0;
y = 1;
let resultat_points = document.querySelector("#points");
start = document.querySelector("#bouton_start");
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
		if (z-20<p||z==p){
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
	let start = document.querySelector("#bouton_start");
	start.src="ressources/start.png";
}
function retry1() {
	let resultat=document.querySelector("#resultat");
	resultat.innerHTML="";
	l=0;
}
function spam() {
	if (l==0){
		if (j==0){
			let date = Date.now();
			d=date;
			j = 1;
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
			j=0;
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
function start_case_debut() {
	if (y==1){
		let q = getRandomInt(90);
		let r = q+1;
		r.toString();
		var o ="#case_";
		s=o.concat(r);
		let m=document.querySelector(s);
		m.style.backgroundColor="white";
		let date = Date.now();
		d=date;
		y = 0;
		let time_minutes = 0; // Value in minutes
   		let time_seconds = 30; // Value in seconds

    	let duration = time_minutes * 60 + time_seconds;

    	element = document.querySelector('#count-down-timer');
    	element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;
		startCountDown(--duration, element);
	}
}
function retry2(){
	g=0;
	let m=document.querySelector(s);
	m.style.backgroundColor="black";
	resultat_points.innerHTML="";
	y=1;
	q=0;
	t = 0;
	l = 0;
	f = 0;
	w = 0;
}
function start_case() {
	let w = s;
	let q = getRandomInt(90);
	let r = q+1;
	r.toString();
	var o ="#case_";
	s=o.concat(r);
	while (s==w){
		let q = getRandomInt(90);
		let r = q+1;
		r.toString();
		var o ="#case_";
		s=o.concat(r);
	}
	let m=document.querySelector(s);
	m.style.backgroundColor="white";
}
function end() {
	let resultat_point=document.querySelector("#points");
	g.toString();
	var u = "Bravo, vous avez fait ";
	n = u.concat(g);
	var h = " points";
	c = n.concat(h);
	resultat_points.innerHTML=c;
	let m=document.querySelector(s);
	m.style.backgroundColor="black";
}
function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}


























function case_1() {
	if (l==0){
		if (s=='#case_1') {
			g=g+1;
			let case_1=document.querySelector('#case_1');
			case_1.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_2() {
	if (l==0){
		if (s=='#case_2') {
			g=g+1;
			let case_2=document.querySelector('#case_2');
			case_2.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_3() {
	if (l==0){
		if (s=='#case_3') {
			g=g+1;
			let case_3=document.querySelector('#case_3');
			case_3.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_4() {
	if (l==0){
		if (s=='#case_4') {
			g=g+1;
			let case_4=document.querySelector('#case_4');
			case_4.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_5() {
	if (l==0){
		if (s=='#case_5') {
			g=g+1;
			let case_5=document.querySelector('#case_5');
			case_5.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_6() {
	if (l==0){
		if (s=='#case_6') {
			g=g+1;
			let case_6=document.querySelector('#case_6');
			case_6.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_7() {
	if (l==0){
		if (s=='#case_7') {
			g=g+1;
			let case_7=document.querySelector('#case_7');
			case_7.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_8() {
	if (l==0){
		if (s=='#case_8') {
			g=g+1;
			let case_8=document.querySelector('#case_8');
			case_8.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_9() {
	if (l==0){
		if (s=='#case_9') {
			g=g+1;
			let case_9=document.querySelector('#case_9');
			case_9.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_10() {
	if (l==0){
		if (s=='#case_10') {
			g=g+1;
			let case_10=document.querySelector('#case_10');
			case_10.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_11() {
	if (l==0){
		if (s=='#case_11') {
			g=g+1;
			let case_11=document.querySelector('#case_11');
			case_11.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_12() {
	if (l==0){
		if (s=='#case_12') {
			g=g+1;
			let case_12=document.querySelector('#case_12');
			case_12.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_13() {
	if (l==0){
		if (s=='#case_13') {
			g=g+1;
			let case_13=document.querySelector('#case_13');
			case_13.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_14() {
	if (l==0){
		if (s=='#case_14') {
			g=g+1;
			let case_14=document.querySelector('#case_14');
			case_14.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_15() {
	if (l==0){
		if (s=='#case_15') {
			g=g+1;
			let case_15=document.querySelector('#case_15');
			case_15.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_16() {
	if (l==0){
		if (s=='#case_16') {
			g=g+1;
			let case_16=document.querySelector('#case_16');
			case_16.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_17() {
	if (l==0){
		if (s=='#case_17') {
			g=g+1;
			let case_17=document.querySelector('#case_17');
			case_17.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_18() {
	if (l==0){
		if (s=='#case_18') {
			g=g+1;
			let case_18=document.querySelector('#case_18');
			case_18.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_19() {
	if (l==0){
		if (s=='#case_19') {
			g=g+1;
			let case_19=document.querySelector('#case_19');
			case_19.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_20() {
	if (l==0){
		if (s=='#case_20') {
			g=g+1;
			let case_20=document.querySelector('#case_20');
			case_20.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_21() {
	if (l==0){
		if (s=='#case_21') {
			g=g+1;
			let case_21=document.querySelector('#case_21');
			case_21.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_22() {
	if (l==0){
		if (s=='#case_22') {
			g=g+1;
			let case_22=document.querySelector('#case_22');
			case_22.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_23() {
	if (l==0){
		if (s=='#case_23') {
			g=g+1;
			let case_23=document.querySelector('#case_23');
			case_23.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_24() {
	if (l==0){
		if (s=='#case_24') {
			g=g+1;
			let case_24=document.querySelector('#case_24');
			case_24.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_25() {
	if (l==0){
		if (s=='#case_25') {
			g=g+1;
			let case_25=document.querySelector('#case_25');
			case_25.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_26() {
	if (l==0){
		if (s=='#case_26') {
			g=g+1;
			let case_26=document.querySelector('#case_26');
			case_26.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_27() {
	if (l==0){
		if (s=='#case_27') {
			g=g+1;
			let case_27=document.querySelector('#case_27');
			case_27.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_28() {
	if (l==0){
		if (s=='#case_28') {
			g=g+1;
			let case_28=document.querySelector('#case_28');
			case_28.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_29() {
	if (l==0){
		if (s=='#case_29') {
			g=g+1;
			let case_29=document.querySelector('#case_29');
			case_29.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_30() {
	if (l==0){
		if (s=='#case_30') {
			g=g+1;
			let case_30=document.querySelector('#case_30');
			case_30.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_31() {
	if (l==0){
		if (s=='#case_31') {
			g=g+1;
			let case_31=document.querySelector('#case_31');
			case_31.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_32() {
	if (l==0){
		if (s=='#case_32') {
			g=g+1;
			let case_32=document.querySelector('#case_32');
			case_32.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_33() {
	if (l==0){
		if (s=='#case_33') {
			g=g+1;
			let case_33=document.querySelector('#case_33');
			case_33.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_34() {
	if (l==0){
		if (s=='#case_34') {
			g=g+1;
			let case_34=document.querySelector('#case_34');
			case_34.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_35() {
	if (l==0){
		if (s=='#case_35') {
			g=g+1;
			let case_35=document.querySelector('#case_35');
			case_35.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_36() {
	if (l==0){
		if (s=='#case_36') {
			g=g+1;
			let case_36=document.querySelector('#case_36');
			case_36.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_37() {
	if (l==0){
		if (s=='#case_37') {
			g=g+1;
			let case_37=document.querySelector('#case_37');
			case_37.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_38() {
	if (l==0){
		if (s=='#case_38') {
			g=g+1;
			let case_38=document.querySelector('#case_38');
			case_38.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_39() {
	if (l==0){
		if (s=='#case_39') {
			g=g+1;
			let case_39=document.querySelector('#case_39');
			case_39.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_40() {
	if (l==0){
		if (s=='#case_40') {
			g=g+1;
			let case_40=document.querySelector('#case_40');
			case_40.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_41() {
	if (l==0){
		if (s=='#case_41') {
			g=g+1;
			let case_41=document.querySelector('#case_41');
			case_41.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_42() {
	if (l==0){
		if (s=='#case_42') {
			g=g+1;
			let case_42=document.querySelector('#case_42');
			case_42.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_43() {
	if (l==0){
		if (s=='#case_43') {
			g=g+1;
			let case_43=document.querySelector('#case_43');
			case_43.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_44() {
	if (l==0){
		if (s=='#case_44') {
			g=g+1;
			let case_44=document.querySelector('#case_44');
			case_44.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_45() {
	if (l==0){
		if (s=='#case_45') {
			g=g+1;
			let case_45=document.querySelector('#case_45');
			case_45.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_46() {
	if (l==0){
		if (s=='#case_46') {
			g=g+1;
			let case_46=document.querySelector('#case_46');
			case_46.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_47() {
	if (l==0){
		if (s=='#case_47') {
			g=g+1;
			let case_47=document.querySelector('#case_47');
			case_47.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_48() {
	if (l==0){
		if (s=='#case_48') {
			g=g+1;
			let case_48=document.querySelector('#case_48');
			case_48.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_49() {
	if (l==0){
		if (s=='#case_49') {
			g=g+1;
			let case_49=document.querySelector('#case_49');
			case_49.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_50() {
	if (l==0){
		if (s=='#case_50') {
			g=g+1;
			let case_50=document.querySelector('#case_50');
			case_50.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_51() {
	if (l==0){
		if (s=='#case_51') {
			g=g+1;
			let case_51=document.querySelector('#case_51');
			case_51.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_52() {
	if (l==0){
		if (s=='#case_52') {
			g=g+1;
			let case_52=document.querySelector('#case_52');
			case_52.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_53() {
	if (l==0){
		if (s=='#case_53') {
			g=g+1;
			let case_53=document.querySelector('#case_53');
			case_53.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_54() {
	if (l==0){
		if (s=='#case_54') {
			g=g+1;
			let case_54=document.querySelector('#case_54');
			case_54.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_55() {
	if (l==0){
		if (s=='#case_55') {
			g=g+1;
			let case_55=document.querySelector('#case_55');
			case_55.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_56() {
	if (l==0){
		if (s=='#case_56') {
			g=g+1;
			let case_56=document.querySelector('#case_56');
			case_56.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_57() {
	if (l==0){
		if (s=='#case_57') {
			g=g+1;
			let case_57=document.querySelector('#case_57');
			case_57.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_58() {
	if (l==0){
		if (s=='#case_58') {
			g=g+1;
			let case_58=document.querySelector('#case_58');
			case_58.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_59() {
	if (l==0){
		if (s=='#case_59') {
			g=g+1;
			let case_59=document.querySelector('#case_59');
			case_59.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_60() {
	if (l==0){
		if (s=='#case_60') {
			g=g+1;
			let case_60=document.querySelector('#case_60');
			case_60.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_61() {
	if (l==0){
		if (s=='#case_61') {
			g=g+1;
			let case_61=document.querySelector('#case_61');
			case_61.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_62() {
	if (l==0){
		if (s=='#case_62') {
			g=g+1;
			let case_62=document.querySelector('#case_62');
			case_62.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_63() {
	if (l==0){
		if (s=='#case_63') {
			g=g+1;
			let case_63=document.querySelector('#case_63');
			case_63.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_64() {
	if (l==0){
		if (s=='#case_64') {
			g=g+1;
			let case_64=document.querySelector('#case_64');
			case_64.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_65() {
	if (l==0){
		if (s=='#case_65') {
			g=g+1;
			let case_65=document.querySelector('#case_65');
			case_65.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_66() {
	if (l==0){
		if (s=='#case_66') {
			g=g+1;
			let case_66=document.querySelector('#case_66');
			case_66.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_67() {
	if (l==0){
		if (s=='#case_67') {
			g=g+1;
			let case_67=document.querySelector('#case_67');
			case_67.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_68() {
	if (l==0){
		if (s=='#case_68') {
			g=g+1;
			let case_68=document.querySelector('#case_68');
			case_68.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_69() {
	if (l==0){
		if (s=='#case_69') {
			g=g+1;
			let case_69=document.querySelector('#case_69');
			case_69.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_70() {
	if (l==0){
		if (s=='#case_70') {
			g=g+1;
			let case_70=document.querySelector('#case_70');
			case_70.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_71() {
	if (l==0){
		if (s=='#case_71') {
			g=g+1;
			let case_71=document.querySelector('#case_71');
			case_71.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_72() {
	if (l==0){
		if (s=='#case_72') {
			g=g+1;
			let case_72=document.querySelector('#case_72');
			case_72.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_73() {
	if (l==0){
		if (s=='#case_73') {
			g=g+1;
			let case_73=document.querySelector('#case_73');
			case_73.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_74() {
	if (l==0){
		if (s=='#case_74') {
			g=g+1;
			let case_74=document.querySelector('#case_74');
			case_74.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_75() {
	if (l==0){
		if (s=='#case_75') {
			g=g+1;
			let case_75=document.querySelector('#case_75');
			case_75.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_76() {
	if (l==0){
		if (s=='#case_76') {
			g=g+1;
			let case_76=document.querySelector('#case_76');
			case_76.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_77() {
	if (l==0){
		if (s=='#case_77') {
			g=g+1;
			let case_77=document.querySelector('#case_77');
			case_77.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_78() {
	if (l==0){
		if (s=='#case_78') {
			g=g+1;
			let case_78=document.querySelector('#case_78');
			case_78.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_79() {
	if (l==0){
		if (s=='#case_79') {
			g=g+1;
			let case_79=document.querySelector('#case_79');
			case_79.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_80() {
	if (l==0){
		if (s=='#case_80') {
			g=g+1;
			let case_80=document.querySelector('#case_80');
			case_80.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_81() {
	if (l==0){
		if (s=='#case_81') {
			g=g+1;
			let case_81=document.querySelector('#case_81');
			case_81.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_82() {
	if (l==0){
		if (s=='#case_82') {
			g=g+1;
			let case_82=document.querySelector('#case_82');
			case_82.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_83() {
	if (l==0){
		if (s=='#case_83') {
			g=g+1;
			let case_83=document.querySelector('#case_83');
			case_83.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_84() {
	if (l==0){
		if (s=='#case_84') {
			g=g+1;
			let case_84=document.querySelector('#case_84');
			case_84.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_85() {
	if (l==0){
		if (s=='#case_85') {
			g=g+1;
			let case_85=document.querySelector('#case_85');
			case_85.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_86() {
	if (l==0){
		if (s=='#case_86') {
			g=g+1;
			let case_86=document.querySelector('#case_86');
			case_86.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_87() {
	if (l==0){
		if (s=='#case_87') {
			g=g+1;
			let case_87=document.querySelector('#case_87');
			case_87.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_88() {
	if (l==0){
		if (s=='#case_88') {
			g=g+1;
			let case_88=document.querySelector('#case_88');
			case_88.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_89() {
	if (l==0){
		if (s=='#case_89') {
			g=g+1;
			let case_89=document.querySelector('#case_89');
			case_89.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
function case_90() {
	if (l==0){
		if (s=='#case_90') {
			g=g+1;
			let case_90=document.querySelector('#case_90');
			case_90.style.backgroundColor='black';
			resultat_points.innerHTML=g;
			start_case();
			let date1 = Date.now();
			let h = date1-d;
			if (h>30000){
				l = 1;
				end();
			}
		}
	}
}
