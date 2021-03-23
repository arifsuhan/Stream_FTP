// https://www.w3schools.com/tags/ref_av_dom.asp


let title = $('#title');
let myVideo = $("#my_video");
let maxHeight = "500";
let maxWidth = "900";

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

