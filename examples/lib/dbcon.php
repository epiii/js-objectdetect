<?php
	$server   = "localhost";
	$username = "root";
	$password = "";

	// $database = "sister_siadu_demo";
	//$database = "sistermetta";
	
	//online
	// $server   = "mysql.idhotinger.com";
	// $username = "u484251826_nyuek";
	// $password = "";
	// $database = "u484251826_nyuek";


	$database = "latihan";

	mysql_connect($server,$username,$password) or die("Koneksi gagal");
	mysql_select_db($database) or die("Database tidak bisa dibuka");
?>