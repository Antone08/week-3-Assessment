console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("submitted successfully")
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let rubberDuck = document.getElementById("rubber-duck");

function rubDuck(){
	alert("Superb!")
}

rubberDuck.addEventListener('mouseover', rubDuck)