"use strict";

let dayShow = document.getElementById('dayShow');
let hourShow = document.getElementById('hourShow');
let miniteShow = document.getElementById('miniteShow');
let secendShow = document.getElementById('secendShow');

let ramadanDayCount = document.getElementById('ramadanDayCount');
let dayCount = document.getElementById('dayCount');
let barCount = document.getElementById('barCount');
let seheriCount = document.getElementById('seheriCount');
let ifterCount = document.getElementById('ifterCount');


setInterval(function(){
	let liveDate = new Date;
	let timeSet = new Date("3 may 2022 0:00:00");

	let compair = timeSet - liveDate;

	if (compair < 0) {
		compair = 0;
		let ramadanWindow = document.getElementById('dis');
		let fullScreen = document.querySelector('.fullScreen');
		ramadanWindow.style.display = "none";
		fullScreen.style.display = "block";
	}

	let miliSecend = Math.floor(compair / 1000);
	let secend = Math.floor(miliSecend / 60);
	let lastS = Math.floor(miliSecend % 60);
	let minite = Math.floor(secend / 60);
	let lastM = Math.floor(secend % 60);
	let hour = Math.floor(minite / 24);
	let lastH = Math.floor(minite % 24);
	let day = Math.floor(hour / 30);
	let lastD = Math.floor(hour % 30);

	
	switch(lastS){
		case 0:
			lastS = "00";
			break;
		case 1:
			lastS = "01";
			break;
		case 2:
			lastS = "02";
			break;
		case 3:
			lastS = "03";
			break;
		case 4:
			lastS = "04";
			break;
		case 5:
			lastS = "05";
			break;
		case 6:
			lastS = "06";
			break;
		case 7:
			lastS = "07";
			break;
		case 8:
			lastS = "08";
			break;
		case 9:
			lastS = "09";
			break;
	}

	switch(lastM){
		case 0:
			lastM = "00";
			break;
		case 1:
			lastM = "01";
			break;
		case 2:
			lastM = "02";
			break;
		case 3:
			lastM = "03";
			break;
		case 4:
			lastM = "04";
			break;
		case 5:
			lastM = "05";
			break;
		case 6:
			lastM = "06";
			break;
		case 7:
			lastM = "07";
			break;
		case 8:
			lastM = "08";
			break;
		case 9:
			lastM = "09";
			break;
	}
	switch(lastH){
		case 0:
			lastH = "00";
			break;
		case 1:
			lastH = "01";
			break;
		case 2:
			lastH = "02";
			break;
		case 3:
			lastH = "03";
			break;
		case 4:
			lastH = "04";
			break;
		case 5:
			lastH = "05";
			break;
		case 6:
			lastH = "06";
			break;
		case 7:
			lastH = "07";
			break;
		case 8:
			lastH = "08";
			break;
		case 9:
			lastH = "09";
			break;
	}
	switch(lastD){
		case 0:
			lastD = "00";
			break;
		case 1:
			lastD = "01";
			break;
		case 2:
			lastD = "02";
			break;
		case 3:
			lastD = "03";
			break;
		case 4:
			lastD = "04";
			break;
		case 5:
			lastD = "05";
			break;
		case 6:
			lastD = "06";
			break;
		case 7:
			lastD = "07";
			break;
		case 8:
			lastD = "08";
			break;
		case 9:
			lastD = "09";
			break;
	}


	dayShow.innerText = lastD;
	hourShow.innerText = lastH;
	miniteShow.innerText = lastM;
	secendShow.innerText = lastS;
},1000);


setInterval(function(){

	let date = new Date;
	let day = date.getDay();
	
	if (day == 0) {
		ramadanDayCount.innerText = "২৯";
		dayCount.innerText = "১ এপ্রিল";
		barCount.innerText = "রবিবার";
		seheriCount.innerText = "ভোর ৪:০৩";
		ifterCount.innerText = "সন্ধ্যা ৬:২৮";
	} else if (day == 1) {
		ramadanDayCount.innerText = "৩০";
		dayCount.innerText = "২ এপ্রিল";
		barCount.innerText = "সোমবার";
		seheriCount.innerText = "ভোর ৪:০২";
		ifterCount.innerText = "সন্ধ্যা ৬:২৯";
	}

},1000);