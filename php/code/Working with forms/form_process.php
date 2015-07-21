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
	 	if(isset($_POST["submit"])){

			if (isset($_POST["username"])) {
	 			$uname = $_POST["username"];}
	 		else {
	 			$uname = "blanked";}
		 		
		 	if (isset($_POST["password"])) {
	 			$pass = $_POST["password"];}
	 		else {
	 			$pass = "blanked";}	
		 			 		
		 	
		 	if ($uname === "blanked") {
		 		echo "You have not entered a name! ";}
		 	if($pass === "blanked"){
		 		echo "You have not entered a password!";}	
		 	
		 	if(!($uname === "blanked") && !($pass==="blanked")){
	 			echo "Your Name is \"".$uname."\" and your password is \"".$pass."\""."<br/>Processed by form_process";}
	}
	else{
		echo "You cannot came here like that";
	}
	 	
	 	 ?>
	 	 <br/><br/><br/>
		<?php 
	 		

	 	 ?>	
	 	<a href="form.php">GO BACK</a>

</body>
</html>