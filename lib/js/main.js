// https://www.w3schools.com/tags/ref_av_dom.asp
class runVideo {

	constructor (width, height, defaultURL){
		
		this.pageTitle = $('#title');
		this.videoObj = $("#my_video");
		this.videoCtrl = $("#video_control");
		this.videoRunWithURL = $("#runUrl");
		this.width = width;
		this.height = height;
		this.videoURL = defaultURL;
		
		this.videoObj.css("width", this.width);
		this.videoObj.css("height", this.height);
		// this.videoObj.crossOrigin = 'anonymous';
	}

	initVideo(){
		console.log("started!");
		this.videoObj.attr("src", this.videoURL);
		this.videoObj.get(0).load();
		this.videoCtrl.on("click", (event) => this.controlVideo());
		this.videoRunWithURL.on("click", (event) => this.runUrl());
	}

	controlVideo(){
		let temp = event.target.textContent;
		
		if(temp == "Reload"){
			
			this.initVideo();
		}else if(temp == "Play"){
			
			this.videoObj.get(0).play();
		}else if(temp == "Info"){
			
			console.log(this.videoObj);
		}else if(temp == "Next"){
			
			// this.videoObj.play();
		}else if(temp == "Stop"){
		
			this.videoObj.get(0).pause();
		}else{
			
			console.log();
		}
	}

	runUrl(){
		let inputUser = $('#inputUser');
		
		if( inputUser.val() != ""){
			this.videoURL = inputUser.val();
		} 
		this.initVideo();
		this.videoObj.get(0).play();
	}
}

class runIframe {
	constructor (width, height, url){
		this.iFrameObj = $("#myFrame");
		this.width = width;
		this.height = height;
		this.url = url;

		this.iFrameObj.css("width", this.width);
		this.iFrameObj.css("height", this.height);
	}

	initFrame(){
		this.iFrameObj.attr("src", this.url);
	}
}

ftpURL = [ 
	"http://fs.ebox.live/Movies/",

	"http://172.16.50.8/SAM-FTP",
	"http://172.16.50.9/SAM-FTP-1",
	"http://172.16.50.7/SAM-FTP-2",
	"http://172.16.50.10/SAM-FTP-3",

	"http://server1.ftpbd.net/FTP-1",
	"http://server2.ftpbd.net/FTP-2",
	"http://server3.ftpbd.net/FTP-3",
	"http://server4.ftpbd.net/FTP-4"
];
videoURL = "http://fs.ebox.live/Movies/Animated/1988/Akira%20[1988]/Akira.1988__720p.BRrip__E-BOX.mp4";
// let videoURL = "http://172.16.50.10/SAM-FTP-3/Kolkata%20Bangla%20Movies/%282000%29/Utsab%20%282000%29/Utsab.avi";


let minHeight = "450";

let p1 = new runVideo("600", minHeight, videoURL);
p1.initVideo();

let i1 = new runIframe("450", minHeight, ftpURL[0]);
i1.initFrame();