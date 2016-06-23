var c = require("path"); 



var a = "hello"
var b = "to me"
console.log(`this is ${a + " " + b}`);

//****************GLOBAL
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




//******************STD IN AND OUT
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




/*********************READLINE
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout)
rl.question("Question text", function(answer){//callback funct.
    console.log(answer)
})
*/





//********************EVENT EMITTER
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




//**************MAKE IT MODULE
module.exports = Person;





//**************EXECUTE COMMANDS

var exec = require("child_process").exec;
//exec("xfce4-terminal");
exec("ls", function(err, stdout){
    if (err){throw err;}
    else{console.log("\n\nEXEC >>" + stdout)}
    
});

/*
var spawn = require("child_process").spawn;

//run sub command >>> node filename
var cp = spawn("node", ["filename"]);
//when that commnd outputs, write it
cp.stdout.on("data",function(data){
	console.log(data.toString());
}); 


//do before sub command closing
cp.on("close",function(){
	console.log("exitting");
	process.exit();
})

//Send sub command "stop" as input
setTimeout(function(){
	cp.stdin.write("stop")
},4000)
*/





//**************CONNECT TO FILE SYSTEM
var fs = require("fs");

//Listing
var files = fs.readdirSync("..");
console.log("\n\nFS LIST >>"+ files);

//reading sync
var contents = fs.readFileSync("d3.md","UTF-8");
console.log("\n\n***********D3.MD FILE********* \n" + contents);
/*async
var contents = fs.readFile("d3.md","UTF-8",function(err,contents){
console.log("\n\n***********D3.MD FILE********* \n" + contents);	
});
*/

/*Write and append to a file
fs.writeFile("filename.md", content_string, function(err){
    console.log("ddfd");
})

//Appends content to a file
fs.appendFile("filename.md", content_string,function(){  })
*/

/*create and append directory
fs.mkdir("folderName", function(err){
    console.log("Folder created");
})

*/



//***************HTTP
//**************create basic http server
var http=require("http");
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"html"});
response.write("<h1>WELCOME TO HTTP SERVER<h1>");
response.end();
}).listen(8888);


//*************HTTPS Request

var https=require("https");

var options = {
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

//Response is a stream
var req = https.request(options, function(res2){
    var responseBody = "";
    console.log("Status: " + res2.statusCode + "\nResponse Headers: " + res2.headers);

    res2.setEncoding("UTF-8");

    
	//runs once when the first data event happen
	res2.once("data",function(chunk){
  		console.log(chunk);
	});


	res2.on("data",function(chunk){
   		console.log("chunksize " + chunk.length);
   		responseBody += chunk;
	});

//runs when the stream ends
	res2.on("end",function(){
   		fs.writeFile("http-write.html",responseBody,function(err){
   			if(err){throw err;}
   			console.log("File Downloaded");
   		});
	});
});//EO http req func

req.on("error",function(err){
	console.log(err);
});

req.end();


