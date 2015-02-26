##XHTML and HTML
* Opening tag > `<tag_name>`  closing tag > `</tag_name>`
* in xhtml, tags are case sensitive but, in html they are not.
* Example
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

    <head>
       	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
   
     	<title>Title of page</title>
    </head>

    <body>
   		<p>All content in body will appear on the page</p>

  	</body>
</html>
```
* Every open tag should be closed
* `<html>` tells browser in which language the code has written
* `<head>` 
* `<title>` title of site will appear on the top of browser or tab
* `<body>` all content that will appear on the page.
* `<p>` create paragraph
* `<br />` end of line (to continue to paragraph from new line)
* `h1` `h2`... `h6` create header
* `<hr />` create horizontal line
* <!-- "Comment" -->
* `<pre>` Text will appear like how it is written in the code
* `&nbsp` extara space
* customizing text ("p", "h1"..."h6", "div", "pre", "address", "fieldset", "ins", "del")
	* `<strong>` 
	* `<big>`
	* `<small>`
	* `<i>` italic
	* `<sub>` 
	* `<sup>`
* link `<a href="url"> text </a>`  ("p", "h1"..."h6", "div", "pre", "address", "fieldset", "ins", "del")
* image `<img src="image url" alt="loading failed" title="title" />`
* link to image `<a href="url"> <img src="image url" alt="loading failed" title="title" /></a>`
   
* Tables
	* `<table>` Define table (`<table border="1" cellpadding="10" cellspacing="10">`)
		* border
		* cell padding: padding between cell border and text.
		* cell sapcing: space between cells.
	* `<tr>` Define a row in a table
	* `<td>` Define a cell in a table
	* `<caption>` Define a table caption
	* `<td rowspan="3">` to define cell that has 3 row heigth
	* `<td colspan="3">` to define a cell that has 3 column width
   
* Div
	* `<div style="height: 200px; width: 250px; border: 1px solid black; margin-bottom: 20px;">`
	* `<span style="color: green;">BOX </span>` 
   
* `<ul>` Unordered List. to add sth to list `<li>` (<li>HTML</li> ...)
* `<ol>` Ordered List. to add sth to list `<li>` (<li>HTML</li> ...)
* `<dl>` Definition List. to add  definition `<dt>`, to add description `<dd>`
 