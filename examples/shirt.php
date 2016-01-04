<?php 
	include 'lib/dbcon.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Pilih Klambi Bos</title>
	
	<script src="js/compatibility.js"></script>
	<script src="js/smoother.js"></script>
	
	<script src="../js/objectdetect.js"></script>
	<!--
	<script src="../js/objectdetect.frontalface_alt.js">  </script> 
	-->
	<script src="../js/objectdetect.frontalface_alt.js">  </script>

	<script src="js/shirt.js"></script>
	
	<!--
	<script src="../js/objectdetect.upperbody.js"></script>
	-->
	
	<script> </script>
</head>

<body>
	<h1>tes</h1>
	<video id="video" style="float: right; margin-right: 1em;"></video>
	<div id="list">
		<?php 
			$s= 'SELECT * FROM shirt ';
			$e=mysql_query($s);
			$o='';
			$i=1;
			while ($r=mysql_fetch_assoc($e)) {
				$o.='<img src="img/s00'.$i.'.png" style="width: 117px;">';
				$i++;
			}echo $o;;
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
	
	<img id="shirt" src="img/s001.png" style="position: absolute; display: block; opacity: 1">
</body>
</html>