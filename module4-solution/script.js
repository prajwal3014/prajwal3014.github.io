var array = ["Yaakov", 
			 "John", 
			 "Jen", 
			 "Jason", 
			 "Paul", 
			 "Frank", 
			 "Larry", 
			 "Paula", 
			 "Laura", 
			 "Jim"];

for(var i=0; i<array.length; i++) {

	if(array[i].charAt(0)==='J' || array[i].charAt(0)==='j') {
		console.log("Good Bye " + array[i]);
	}
	else {
		console.log("Hello " + array[i]);
	}

}
