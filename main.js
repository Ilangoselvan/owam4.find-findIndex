const employees = [
	 { name: "David Carlson", age: 30 },
	 { name: "John Cena", age: 34 },
	 { name: "Mike Sheridan", age: 25 },
	 { name: "John Carte", age: 50 }
];
var m=employees.find(function(n){
	return n.name.indexOf("John")>=0
})
console.log(m);

var m=employees.findIndex(function(n){
	return n.name.indexOf("John")>=0
})
console.log(m);