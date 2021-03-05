console.log("funzia");

var maxNum = parseInt(prompt("scrivi il numero massimo", "100"));
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
		list.push(i)
	}
}
document.getElementsByClassName("list")[0].innerHTML = list
console.log(list);