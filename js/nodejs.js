var c = require("path"); 



var a = "hello"
var b = "to me"
console.log(`this is ${a + " " + b}`);

//**********GLOBAL
console.log(__filename);
console.log(__dirname);

//GLOBAL Require
console.log(c.basename(__filename));

//GLOBAL Process
console.log(process.argv);

//function to get a specific attribute (node app.js --<attribute> hello)
function grab(flag){
	var index = process.argv.indexOf(flag);
	return (index === -1)? null: process.argv[index+1]
}

var ad = grab("--name");
console.log("hello " + ad);



//**************create basic http server
var http=require("http");
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"html"});
response.write("<h1>WELCOME TO HTTP SERVER<h1>");
response.end();
}).listen(8888);





//**************STD IN AND OUT
//ask questions and print answers
var questions = ["Name?", "Any Hobby?", "Fav language?"];
var answers = [];

//print question
function ask(i){
	process.stdout.write(`\n ${questions[i]}`);
	process.stdout.write(">>>")
}

//get answers (stdin event)
process.stdin.on("data",function(data){
	//process.stdout.write("\n"+data.toString().trim() + "\n")
	answers.push(data.toString().trim());
	if(answers.length < questions.length){
		ask(answers.length);
	}
	else{
		process.exit();

	}

});

//do before exit (print answers)
process.on('exit',function(){
		process.stdout.write("\n");
		process.stdout.write(`hey  ${answers[0]}`);
		process.stdout.write(`\n ${answers[1]} is a great hobby`);
		process.stdout.write(`\n and ${answers[2]} is a wonderful language`);



});
ask(0);


/***************READLINE
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout)
rl.question("Question text", function(answer){//callback funct.
    console.log(answer)
})
*/



//**************EVENT EMITTER
/*
var events = require("events");
var emitter = new events.EventEmitter();
//create event
emitter.on("myEvent", function(message,status){
    console.log(`${status}: ${message}`)
})

emitter.emit('myEvent',"hello","200 OK");//use that event
*/

//With inherit

var util = require("util");
var emitter = require("events").EventEmitter;

var Person = function(name){
    this.name = name;
};

util.inherits(Person,emitter);

var ben = new Person("abdullah");

ben.on("speak",function(said){
	console.log(`${this.name}: ${said}`)
});


ben.emit("speak","I am what I am");
