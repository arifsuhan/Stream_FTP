// https://www.w3schools.com/tags/ref_av_dom.asp


let title = $('#title');
let myVideo = $("#my_video");
let maxWidth = "600";
let maxHeight = "400";

let files = [
	""
]

function loadVideo(){
	console.log("started!");
	myVideo.css("width",maxWidth);
	myVideo.css("height",maxHeight);
}

function controlVideo(){
	
	const video_control = $("#video_control");

	video_control.on("click", (event) => {

		let temp = event.target.textContent;
		
		if(temp == "Reload"){
			myVideo.attr("src", files[0]);
			myVideo.get(0).load();
		}else if(temp == "Play"){
			myVideo.get(0).play();
		}else if(temp == "Info"){
			console.log(myVideo);
		}else if(temp == "Next"){
			// myVideo.play();
		}else if(temp == "Stop"){
			myVideo.get(0).pause();
		}else{
			console.log();
		}
	});
}


loadVideo();
controlVideo();

// document.addEventListener("click", function(){ console.log("a"); });


// console.log($("div iframe").length);
// console.log(document.querySelectorAll("div iframe").length);

// $("#myFrame").on("load", function(){

	// console.log($(this)[0].contentWindow.$);
	// console.log($(this).contents());
	// console.log(typeof $(this).contents());
	// console.log($(this).contents());
	// console.log($(this).contents().val());
	// console.log($(this).contents().find("h1"));

	// console.log("iframe focused");
	// $("#list").hide();

	// var iframe = document.getElementById("myFrame");

	// var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
	// console.log(elmnt);
  	// elmnt.style.display = "none";
// });


// document.getElementById("myFrame").contentWindow.document.body.onclick = function() {
//   alert("iframe clicked");
// }

// elmnt.style.display = "none";

// $(document).ready(function(){
//     $("iframe").load(function(){
//         $(this).contents().on("mousedown, mouseup, click", function(){
//             alert("Click detected inside iframe.");
//         });
//     });
// });

// var links = document.getElementsByTagName('a');

// for(var i = 0; i< links.length; i++){
//   console.log(links[i].href);
// }

// document.addEventListener("click", function(){
//   console.log("Hello World");
// });