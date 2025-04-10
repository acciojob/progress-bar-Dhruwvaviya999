//your JS code here. If required.

let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let btnsDiv = document.querySelector(".buttons")
let circle1 = document.querySelector("#circle-1");
let circle2 = document.querySelector("#circle-2");
let circle3 = document.querySelector("#circle-3");
let circle4 = document.querySelector("#circle-4");
let circle5 = document.querySelector("#circle-5");
let circle6 = document.querySelector("#circle-6");


nextBtn.addEventListener("click", () => {
	prevBtn.style.visibility = "visible";
	
	circle1.style.backgroundColor = "green";
	if(circle1.style.backgroundColor = "green"){
		circle2.style.backgroundColor = "green";
	}

	if(circle2.style.backgroundColor = "green"){
		circle3.style.backgroundColor = "green";
	}

	if(circle3.style.backgroundColor = "green"){
		circle4.style.backgroundColor = "green";
	}

	if(circle4.style.backgroundColor = "green"){
		circle5.style.backgroundColor = "green";
	}

	if(circle5.style.backgroundColor = "green"){
		nextBtn.style.visbility = "hidden";
	}
});