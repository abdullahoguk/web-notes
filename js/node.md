##Node JS
* Apache is multithreaded but has blocking
* Node is one threaded and non blocking event driven io
* installation
```
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```
* update 
```
sudo npm cache clean -f
sudo npm install -g n
sudo n v4.4.5  // version
```
* switch versions with nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
nvm install <version>       //Download and install a <version>
nvm use <version>           //Modify PATH to use <version>
nvm ls                      //List versions (installed versions are blue)
```
* run file with `node <filename.js`
* `global` is main object (like `window` object in js)
* Global objects are `__dirname` `__filename` `console` `require()` `process` etc.
* STD Input and output(process object)
```
process.stdout.write("bla"); //outputs to console

process.stdin.on("data",function(data){
    process.stdout.write("\n"+data.toString().trim() + "\n")
    process.exit();
})
```
* Timeout and interval is the same with JS
* Readline
```
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout)
rl.question("Question text", function(answer){//callback funct.
    console.log(answer)
})
```
* Event Emitter lets you create custom events.
```
var events = require("events");
var emitter = new events.EventEmitter();
//create event
emitter.on("myEvent", function(message,status){
    console.log(`${status}: ${message}`)
})

emitter.emit('myEvent',"hello","200 OK");//use that event
```
* Inheritence
```
var util = require("util");
var emitter = require("events").EventEmitter();

var Person = function(name){
    this.name = name;
}

util.inherits(Person,EventEmitter);

```
* Make a js file a module to reuse in other js files, `module.exports=FileName;` 