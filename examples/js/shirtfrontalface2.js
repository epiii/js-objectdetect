window.onload = function() {
	// var detectLib = objectdetect.upperbody;
	var detectLib = objectdetect.frontalface_alt;
	listProduct();
	// cek compatibility with browser
	var smoother = new Smoother([0.9999999, 0.9999999, 0.999, 0.999], [0, 0, 0, 0]),
		video = document.getElementById('video'),
		shirt = document.getElementById('shirt'),
		fullscreenbtn = document.getElementById('fullscreenbtn'),
		detector;
		// console.log(compatibility.URL.createObjectURL(stream)); return false;	
		// console.log('ini'+detector); return false;
	try {
		compatibility.getUserMedia({video: true}, function (stream) {
				try {
					video.src = compatibility.URL.createObjectURL(stream);
				} catch (error) {
					video.src = stream;
				}compatibility.requestAnimationFrame(playx);
	          	buttonx('next button');
				// }compatibility.requestAnimationFrame(preparation);
			}, function (error) {
				alert('WebRTC not available');
			}
		);
	} catch (error) {
		alert(error);
	}
	
	var buttonx = function  (par) {
		// alert('draw button');
	    // fillRectangle(x, y, width, height);
	    // video.fillRect(x, y, 50, 50);
	    // video.fillStyle = "#ff0000";
	}

	function preparation () {
		
		console.log('masuk');
	}

	// drawThumbnail();

	// play animation with webcam 
	function playx() {
		// compatibility.requestAnimationFrame(play);
		var x = compatibility.requestAnimationFrame(playx); // play video streaming 
		if (video.paused) { // play streaming video
			video.play();
		}

		if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {  // jika webcam berhasil mengcapture gambar real time user dan dimuat ke dala video 
		// mirroring (flip horizontal)
			// video.style.cssText = "-moz-transform: scale(-1, 1); \
			// -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); \
			// transform: scale(-1, 1); filter: FlipH;";
		// mirroring (flip vertical)
			// video.style.cssText = "-moz-transform: scale(1, -1); \
			// -webkit-transform: scale(1, -1); -o-transform: scale(1, -1); \
			// transform: scale(1, -1); filter: FlipV;";

          	// Prepare the detector once the video dimensions are known:
          	if (!detector) {
				var width  = ~~(60 * video.videoWidth / video.videoHeight);
				var height = 60;
	      		detector = new objectdetect.detector(width, height, 1.1, detectLib);
	      		// detector = new objectdetect.detector(1024, 720, 1.1, objectdetect.upperbody);
	      	}
      		
      		// Perform the actual detection:
			var coords = detector.detect(video, 1); // objectdetect.js line 684
			console.log(typeof (coords[0])); 		// object
			console.log(coords[0]);		 			// [45.09428000000002, 20.93663000000001, 32.210200000000015, 32.210200000000015, 1]
 			
 			if (coords[0]) {
				var coord = coords[0];
				coord     = smoother.smooth(coord);
				// Rescale coordinates from detector to video coordinate space:
					// coord[0] *= video.videoWidth / detector.canvas.width;
					// coord[1] *= (video.videoHeight / detector.canvas.height)+3;
					// coord[2] *= (video.videoWidth / detector.canvas.width)+1.5;
					// coord[3] *= (video.videoHeight / detector.canvas.height);

					coord[0] *= video.videoWidth / detector.canvas.width;
						coord[1] *= video.videoHeight / detector.canvas.height;
					coord[2] *= video.videoWidth / detector.canvas.width;
						coord[3] *= video.videoHeight / detector.canvas.height;
				
					console.log('kor 0 ='+coord[0]);
					console.log('kor 1 ='+coord[1]);
					console.log('kor 2 ='+coord[2]);
					console.log('kor 3 ='+coord[3]);

					// Display shirt overlay: 
					// shirt.style.left    = ~~(coord[0] + coord[2] * 2.5) + 'px';
					// shirt.style.top     = ~~(coord[1] + coord[3] * 1.5 ) + 'px';
					// shirt.style.width   = ~~(coord[2] * 6/1.5) + 'px';
					// shirt.style.height  = ~~(coord[3] * 6/1.5) + 'px';
					
					// shirt.style.left    = ~~(coord[0] + coord[2] * 1.0/8 + video.offsetLeft) + 'px';
					// shirt.style.top     = ~~(coord[1] + coord[3] * 0.8/8 + video.offsetTop) + 'px';
					// shirt.style.width   = ~~(coord[2] * 6/8) + 'px';
					// shirt.style.height  = ~~(coord[3] * 6/8) + 'px';
					shirt.style.left    = ~~((coord[0]*0.0005) + video.offsetLeft) + 'px';
					shirt.style.top     = ~~(coord[1] * 0.5 + video.offsetTop) + 'px';
					shirt.style.width   = ~~((coord[2] * 6/8)*4) + 'px';
					shirt.style.height  = ~~((coord[3] * 6/8)*4) + 'px';
					shirt.style.opacity = 1;

			} else { 
				var opacity = shirt.style.opacity - 0.2;
				shirt.style.opacity = opacity > 0 ? opacity : 0;
			}
		}
	}
	
	[].slice.call(document.getElementById('list').children).forEach(function(e) {
		e.addEventListener('click', function() {
			shirt.src = e.src;
		}, false);
	});
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
	// console.log(resrescaleImage());
};

function ajax (u,d) {
	return $.ajax({
		url:u,
		data:d,
		type:'post',
		dataType:'json',
	});
}

function listProduct () {
	ajax('../examples/lib/shirt.php','action=view').done(function (dt) {
		if(!dt.status) alert('query_failed');
		else{
			var li='';
			$.each(dt.data, function (id,item) {
				// li+='<img src="img/'+item.name+'.png" style="width: 117px;">';
				li+='<img src="img/img2/'+item.name+'.png" style="width: 117px;">';
			});$('#list').html(li);
		}
	});
}
function toggleFullScreen(){
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}

function drawThumbnail () {
	alert('masuk thumbnail');
	var canvas2 = document.createElement('canvas');
	var imgx = new Image();
	imgx.src = 'img/s003.png';           
	imgx.onload = function(){
	     canvas2.drawImage(imgx, 78, 19);
	}
}