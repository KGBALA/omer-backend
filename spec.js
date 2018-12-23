var pgp = require('pg-promise')(/*options*/);
var cn = {
    host:'localhost',
    port:5432,
    database: 'dvdrental',
    user: 'postgres',
    password:'abc'
};

var db = pgp(cn);

var arr = [];
db.any(`SELECT title
FROM film
WHERE title LIKE 'N%';`)
    .then((result) => {
        arr = result
    }).catch((err) => {
        console.log(err); // printing to error
    }).then(() => {
        console.log(arr);
    });
//changing this file first time


//Adding new code to check if it's merged to remote repo
for( var i=0; i<5;i++){
	console.log("Outer Loop at state: " + i + "\n");
	for(var p=0; p<2; p++){
		console.log("Inner Loop at state: " + p);
		if(p==1){
			console.log("\n")
		}
	}
}