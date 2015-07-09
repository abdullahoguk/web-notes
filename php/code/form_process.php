<!DOCTYPE html>
<html>
<head>
	<title>Process</title>
	</head>
<body>
	<pre>
		<?php 
			print_r($_POST);
	 	?>
	 </pre>
	 <br/>
	 	<?php 

	 		$uname = $_POST["username"];
	 		$pass = $_POST["password"];
	 		if(!$uname==""){
	 			echo "Your Name is \"".$uname."\" and your password is \"".$pass."\"";}
	 		else{
	 			echo "You have not entered a name!";}
	 		

	 	 ?>
	

</body>
</html>