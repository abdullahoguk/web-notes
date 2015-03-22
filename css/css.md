##CSS

* type `<link rel="stylesheet" type="text/css" href="style_file.css" />` to head of html file that you want to customize

* 	```css
	html_Tag
	{
		properties
		color : green;
	...
	}
	```
   
* Open comment with `/*` then close with `*/`
* Id Selector: to create a style to use just once. 
	type that tag in html file as 
	```html
	<p id="firstPrgrph">this is different</p>
	```
    
	then create style to be able to use just for that fieled 

	```css
	#firstPrgrph {color : blue;}
	```   
* Class Selector: pretty same with id selector. Class using to apply style to more than one tag.  
		```html
	<p class="firstclass">I am different</p>
	<h2 class="firstclass">me too</h2>
	```
    
	then create style to be able to use just for that fieled 

	```css
	.firstclass {color : yellow;}
	``` 
   
* **Colors**
`aqua` `black` `blue` `fuchsia` `gray` `green` `lime` `maroon` `navy` 
`olive` `purple` `red` `silver` `teal` white` `yellow`    
or `#000000` ... `#FFFFFF`
   
* **Background** 
	* Color > `background-color: blue;`
	* Image > `background-image: url('bg.jpg');`
	* Repeating > `no-repeat` , `repeat-x` , `repeat-y` or `repeat` 
		```
		background-image: url('bg.jpg')
		background-repeat: no-repeat;

		```
	* Position > `top left` , `center right` , 