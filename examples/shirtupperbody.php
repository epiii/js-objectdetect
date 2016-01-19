<?php 
	include 'lib/dbcon.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Pilih Baju</title>
	
	<script src="js/compatibility.js"></script>
	<script src="js/smoother.js"></script>

	<script src="js/js-objectdetect/objectdetect.js"></script>
	<script src="js/js-objectdetect/objectdetect.upperbody.js">  </script> 
	<!--
	<script src="../js/objectdetect.frontalface_alt.js">  </script>
	-->
	<script src="js/shirtupperbody.js"></script>

	<script src="js/jquery.js"></script>
	<!--
	<script src="js/shirtfrontalface.js"></script>
	-->
	
	<!--
	<script src="../js/objectdetect.upperbody.js"></script>
	-->
	
	<script> </script>
</head>

<!-- <body onload="listProduct();"> -->
<body xonload="listProduct();">
	<!-- <video id="video" style="float: right; margin-right: 1em;"></video> -->
	<video id="video" style="float: left; margin-right: 1em;"></video>
	<button id="fullscreenbtn"> X </button>
	<!-- <video id="video2" style="float: left; margin-right: 1em;"></video> -->
<!-- 	<svg width="400" height="180">
	  <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
	  style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
	</svg>
 -->	<div id="list">
		<?php 
			// $s= 'SELECT * FROM shirt ';
			
			// $e=mysql_query($s);
			// $o='';
			// $i=1;
			// while ($r=mysql_fetch_assoc($e)) {
			// 	$o.='<img src="img/s00'.$i.'.png" style="width: 117px;">';
			// 	$i++;
			// }echo $o;;
		?>
<!-- 		<img src="img/s001.png" style="width: 117px;">
		<img src="img/s002.png" style="width: 117px;">
		<img src="img/s003.png" style="width: 117px;">
		<img src="img/s004.png" style="width: 117px;">
		<img src="img/s005.png" style="width: 117px;">
		<img src="img/s006.png" style="width: 117px;">
		<img src="img/s007.png" style="width: 117px;">
		<img src="img/s008.png" style="width: 117px;"> -->
	</div>
	
	<img id="shirt" src="img/img2/s001.png" style="position: absolute; display:block;">
	<!-- <img id="shirt" src="img/s001.png" style="position: absolute; display: block; opacity: 1"> -->
</body>
</html>