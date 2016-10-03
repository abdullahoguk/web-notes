##React

* Add `react.js` and `react-dom.js` (and `browser.js` from babel-core )
* `JSX` is xml syntax inside of JS 
* Rendering sth   
```
<script type ="text/babel">
        ReactDOM.render(
            <h1>Hello</h1>,
            document.getElementById("area")
            );

        </script>
```   
* Write JS expressions inside `{}`
* **Component** (name should like "CompName")
```
<script type ="text/babel">
    var HelloComp = React.createClass({
        render: function() {
            return (
                <div className="helloComp">
                    <h1>HelloWorld</h1>
                </div>
            );
  }
});

    ReactDOM.render(
        <HelloComp/>,
        document.getElementById("area")
    );
</script>
```   
* **Props** stores data (like attributes in html tags) 
```   
<script type ="text/babel">
    var HelloComp = React.createClass({
        //defines default values of props
        getDefaultProps: function(){
            return {
                name: "There"
            }
        },


        render: function() {
            return (
                <div className="helloComp">
                    <h3>Hello {this.props.name}</h3>
                </div>
            );
  }
});

    ReactDOM.render(
        <div className="container">
            <HelloComp name="Abdullah"/>
            <HelloComp />
        </div>,


        document.getElementById("area")
    );
</script>
```   