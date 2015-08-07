##Javascript
* Adding javascript to page
`<script>document.write("<p>Hello</p>")</script>`
or `<script src = "js/myscript.js"></script>`
* Comments `//` or `/* ... */`
* `==` sign compares equality of values of two variables and also return true even if they have different types.
* Unlike two equal sign, `===` compares equality of types and values of two variables.
* putting `;` at the end of statements is not required but suggested.
* `var` is also not required when defining variables but sugg ested.

* **Type Casting**
    * String > Number `Number("85")`
    * Number > String `String(85)` or `85 + ""`
* Fetching element from html by id `document.getElementById("id")`
* If,else,for,while statements are same with php and java ...
* Functions
    all passed arguments to function stored in an array called "arguments"
```
function func_name(var1,..){
... 
arguments[1]
arguments[2]
arguments.length();//returns how many arguments passed.
return x;
}
```
* **Arrays**
    * Defining `var array = []` or `var array = [4,7,12]`
    * Getting length `array.length()`
    * Arrays grows dynamicly.
    * `array.push("elmnt")` adds "elmnt" item to end of the array.
    * `array.pop()` retuns and deletes last element of array.
    * `array.unshift("elmnt")` adds one or more elements to the beginning of the array.
    * `array.shift()` removes and returns first element then shifts array to thet blank field.
    * `array.concat(array2)` returns concatanated form of two arrays.(arrayarray2)
    * `delete array[5]` removes element in 5th index (actually mak that index undefined.) 
    * `array.reverse()` just reverses array.
    * Slice
    	* `array.slice(2, 7)` returns elements from index 2 to 7 in array. 
    	* `array.slice(2)` means from 2 to last
    	* `array.slice(2, -3)` from 2 to, 3 before last index
    *  

