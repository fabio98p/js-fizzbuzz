console.log("funzia");

function fizzBuzz() {
	
	var maxNum = "";
	do {
		maxNum = parseInt(prompt("scrivi il numero massimo", "100"));
	} while (isNaN(maxNum));
	
	var list = [];
	
	for (let i = 1; i < maxNum+1; i++) {
		
		if(!(i%3) && !(i%5)){
			list.push("fizzbuzz");
		}
		else if(!(i%3)){
			list.push("fizz");
		}
		else if(!(i%5)){
			list.push("buzz");
		}
		else{
			list.push(i);
		}
	}
	document.getElementsByClassName("list")[0].innerHTML = "";
	for (let i = 0; i < list.length; i++) {
		document.getElementsByClassName("list")[0].innerHTML += "<li>" + list[i] + "</li>";
	}
	console.log(list);
}