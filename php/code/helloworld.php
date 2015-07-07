<!DOCTYPE html PUBLIC>
<html lang = "en">
	<head>
		<title>Untitled</title>
	</head>
	<body>
		<h3>Intro</h3>
			<?php echo "Hello World!";?>
			<p> 2 * 3 = 
				<?php 
				echo 2 * 3; 
				//this is single line comment
				#this too 
				/* bla bla
				blablads
				blaaaa*/
				echo "<br/><br/>";?></p>
				

		<h3>Variables</h3>
			<?php 
				$myvar1 = 3;
				$myvar2 = 7;
				echo $myvar1." * ".$myvar2." = " .$myvar1 * $myvar2;
				$my_string="hellooo";
				echo "<br/>";
				echo $my_string;
				echo "<br/>";
				$firststr = "asdfg";
				$laststr = $my_string.$firststr;
				echo $laststr;
			 ?>

			<?php 
				echo "<br/>";
				echo "$laststr again here";
			?>
			<br/>
			<?php 
				echo "<br/>";
				$first = "GNU ";
				$second = "Linux";
				$third = $first;
				$third .= $second;
 				echo $third ;
 				echo "<br/>";
 				$fourth = strtolower ($third);
 				echo $fourth."<br/>";
 				echo strtoupper($fourth)."<br/>"; 
 				echo ucfirst($fourth)."<br/>"; 
 				echo ucwords($fourth)."<br/>";
 				echo "a".trim(" string  ")."b"."<br/>";
 				$assocArray = array("first_name" => "John", "last_name" => "Stevens");
 				echo $assocArray[first_name];

			?>



		<h3>Strings</h3>
			<?php 
				

			?>

	</body>
</html>