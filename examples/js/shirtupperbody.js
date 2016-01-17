window.onload = function() {

	listProduct();
	// cek compatibility with browser
	var smoother = new Smoother([0.9999999, 0.9999999, 0.999, 0.999], [0, 0, 0, 0]),
		video = document.getElementById('video'),
		shirt = document.getElementById('shirt'),
		detector;
		// console.log(compatibility.URL.createObjectURL(stream)); return false;	
		// console.log('ini'+detector); return false;
	try {
		compatibility.getUserMedia({video: true}, function(stream) {
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

	// play animation with webcam 
	// function play() {
	function playx() {
		// compatibility.requestAnimationFrame(play);
		var x = compatibility.requestAnimationFrame(playx); // play video streaming 
		// var x = compatibility.requestAnimationFrame(play); // play video streaming 
	// console.log(x); // counter play video streaming 
		// return false;
		
		// compatibility.requestAnimationFrame(play);
		if (video.paused) { // play streaming video
			// console.log('masuk play video streaming');
			video.play();
		}

		if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {  // jika webcam berhasil mengcapture gambar real time user dan dimuat ke dala video 
          	// Prepare the detector once the video dimensions are known:
			// console.log('READY STATE!');
          	if (!detector) {
			// console.log('masuk ! video');
			// console.log('w='+video.videoWidth);
			// console.log('h='+video.videoHeight);
				var width  = ~~(60 * video.videoWidth / video.videoHeight);
				var height = 60;
					// var width  = ~~(90 * video.videoWidth / video.videoHeight);
					// var height = 90;
					// detector   = new objectdetect.detector(width, height, 1.1, objectdetect.handopen);
	      		detector = new objectdetect.detector(width, height, 1.1, objectdetect.frontalface_alt);
	      		// detector = new objectdetect.detector(1024, 720, 1.1, objectdetect.frontalface_alt);
	      	}
      		
      		// Perform the actual detection:
			var coords = detector.detect(video, 1); // objectdetect.js line 684
			console.log(typeof (coords[0])); 		// object
			console.log(coords[0]);		 			// [45.09428000000002, 20.93663000000001, 32.210200000000015, 32.210200000000015, 1]
 			
 			if (coords[0]) {
				var coord = coords[0];
				coord     = smoother.smooth(coord);
				
				// console.log('vid width ='+video.videoWidth);
				// console.log('vid height ='+video.videoHeight);
				// console.log('cvs width ='+detector.canvas.width);
				// console.log('cvs height ='+detector.canvas.height);

			// Rescale coordinates from detector to video coordinate space:
				coord[0] *= video.videoWidth / detector.canvas.width;
				coord[1] *= (video.videoHeight / detector.canvas.height)+3;
				coord[2] *= (video.videoWidth / detector.canvas.width)+1.5;
				coord[3] *= (video.videoHeight / detector.canvas.height);

			// kor 0 =640.827062857143
			// kor 1 =358.5029485714287
			// kor 2 =483.11496865795607
			// kor 3 =483.11496865795607

				// coord[0] *= video.videoWidth / detector.canvas.width;
				// 	coord[1] *= video.videoHeight / detector.canvas.height;
				// coord[2] *= video.videoWidth / detector.canvas.width;
				// 	coord[3] *= video.videoHeight / detector.canvas.height;
			
				// console.log('kor 0 ='+coord[0]);
				// console.log('kor 1 ='+coord[1]);
				// console.log('kor 2 ='+coord[2]);
				// console.log('kor 3 ='+coord[3]);

				// Display shirt overlay: 
				shirt.style.left    = ~~(coord[0] + coord[2] * 2.5) + 'px';
				shirt.style.top     = ~~(coord[1] + coord[3] * 1.5 ) + 'px';
				shirt.style.width   = ~~(coord[2] * 6/1.5) + 'px';
				shirt.style.height  = ~~(coord[3] * 6/1.5) + 'px';
				// shirt.style.left    = ~~(coord[0] + coord[2] * 1.0/8 + video.offsetLeft) + 'px';
				// shirt.style.top     = ~~(coord[1] + coord[3] * 0.8/8 + video.offsetTop) + 'px';
				// shirt.style.width   = ~~(coord[2] * 6/8) + 'px';
				// shirt.style.height  = ~~(coord[3] * 6/8) + 'px';
				shirt.style.opacity = 1;
				console.log('gambar terus');
					// Draw coordinates on video overlay:
					detector.context.beginPath();
					detector.context.lineWidth = '2';
					// detector.context.fillStyle = 'red';
					detector.context.fillStyle = 'rgba(0, 246, 238, 0.5)';
					// detector.context.fillStyle = fist_pos_old ? 'rgba(0, 246, 238, 0.5)' : 'rgba(255, 0, 0, 0.5)';
					// detector.context.fillStyle = fist_pos_old ? 'rgba(0, 255, 255, 0.5)' : 'rgba(255, 0, 0, 0.5)';
					detector.context.fillRect(
						coord[0] / video.videoWidth * 100,	//* canvas.clientWidth, 	// x
						coord[1] / video.videoHeight * 100 ,	//* canvas.clientHeight,	// y
						coord[2] / video.videoWidth * 100 ,	//* canvas.clientWidth,	// width
						coord[3] / video.videoHeight * 100	//* canvas.clientHeight	// height
						// coord[0] / video.videoWidth ,	//* canvas.clientWidth, 	// x
						// coord[1] / video.videoHeight ,	//* canvas.clientHeight,	// y
						// coord[2] / video.videoWidth ,	//* canvas.clientWidth,	// width
						// coord[3] / video.videoHeight 	//* canvas.clientHeight	// height
					);
					detector.context.stroke();
					// console.log(detector.context.beginPath());

			} else { 
				// var opacity = shirt.style.opacity - 0.2;
				// shirt.style.opacity = opacity > 0 ? opacity : 0;
			}
		}
	}
	
	[].slice.call(document.getElementById('list').children).forEach(function(e) {
		e.addEventListener('click', function() {
			shirt.src = e.src;
		}, false);
	});
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
				li+='<img src="img/'+item.name+'.png" style="width: 117px;">';
			});$('#list').html(li);
		}
	});
}