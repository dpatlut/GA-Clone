console.log("Connection to main.js works!");

var parent = document.querySelector(".container");

for(var i=0; i<9; i++){
	var section = document.createElement("div");
	section.setAttribute("class", "box");
	parent.appendChild(section);
}