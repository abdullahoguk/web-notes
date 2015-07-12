<!DOCTYPE html>
<html>
<head>
	<title>Form</title>
</head>
<body>
	<form action="form_process.php" method="post">
		Username: <input type="text" name="username" value=""/><br/>
		Password: <input type="password" name="password" value=""/><br/><br/>
		<input type="submit" name="submit" value="Submit"/> 


	    <?php $link_name = "Second Page"; $id= 2;?>
	    <?php $company= "Johnson & Johnson";?>
	    <a href="second_page.php?id=<?php echo $id;?>&company=<?php echo $company;?>"><?php echo $link_name; ?></a>

	</form>

</body>
</html>