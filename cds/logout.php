<?php 
session_start();
session_unset();
session_destroy();
$_SESSION['create_account_logged_in']=$eid;  
header('location:mainpage.php'); 
exit;
?>