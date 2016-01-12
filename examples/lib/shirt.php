<?php
	require 'dbcon.php';
	if(isset($_POST['action'])){
		if($_POST['action']=='view'){
			$s ='SELECT * FROM shirt order by name ASC';
			$e =mysql_query($s);
			$stat=!$e?false:true;
			$dt=array();
			while ($r =mysql_fetch_assoc($e)){
				$dt[]=$r;
			}$o=array('status'=>$stat,'data'=>$dt);
		}else{
			$o=array('status'=>'invalid_action');
		}
	}else{
		$o=array('post'=>'invalid_post');
	}echo json_encode($o);
?>