<?php 
	 	if(isset($_POST["submit2"])){

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
		 	if($pass=== "blanked"){
		 		echo "You have not entered a password!";}	
		 	
		 	if(!($uname === "blanked") || !($pass=="blanked")){
	 			echo "Your Name is \"".$uname."\" and your password is \"".$pass."\"<br/>Processed by itself";}
	}
	else{
		echo "You have not submitted yet!";
	}
	 		
	 	 ?>
	 	 <br/><br/><br/>
		
<!DOCTYPE html>

<html>
<head>
	<title>Form</title>
</head>
<body>
<h1>FORM 1</h1>


	<form action="form_process.php" method="post">
		Username: <input type="text" name="username" value=""/><br/>
		Password: <input type="password" name="password" value=""/><br/><br/>
		<input type="submit" name="submit" value="Submit"/> 
	</form>
	<br/><br/><br/><br/>
	

	<h1>FORM 2</h1>
	<form action="form.php" method="post">
		Username: <input type="text" name="username" value=""/><br/>
		Password: <input type="password" name="password" value=""/><br/><br/>
		<input type="submit" name="submit2" value="Submit"/> 
	</form>

</body>
</html>

