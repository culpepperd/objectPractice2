var jackShep = {
	name: "Jack Shepard",
	weight: 15,
	breed: "Pom-Chi",
	loves: "running"
};

function gainWeight(dog, amount) {
	dog.weight = dog.weight + amount;
}

function loseWeight(dog, amount) {
	dog.weight = dog.weight - amount;
}

gainWeight(jackShep, 3);
loseWeight(jackShep, 4);

alert(jackShep.name + " now weighs " + jackShep.weight + "lbs!");

/* 
 * object reference for dog object
var dog = {
	name: ,
	weight: ,
	breed: ,
	loves: 
};
*/