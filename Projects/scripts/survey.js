var phoneNumber=document.getElementById ("phone");
phoneNumber.addEventListener("blur", goodLuck);

function goodLuck() {
	alert("Good Luck!");
	console.log ("Good Luck!");
	}

var nameField=document.getElementById ("yName");
nameField.addEventListener ("input", greetUser)

function greetUser() {
	var inputField = document.getElementById("yName");
	var theName = inputField.value;
	if(theName==null || theName=="") {
		var paragraphField = document.getElementById("metBefore");
	paragraphField.innerHTML=""
	}
	else {
		console.log(theName) ;
		var theGreeting = "Have we met before "+theName+"?";
		var paragraphField = document.getElementById("metBefore");
		paragraphField.innerHTML=theGreeting;
	}
	
	}

var favoriteDish=document.getElementById ("dFavorite");
favoriteDish.addEventListener ("input", changeParagraph)

function changeParagraph() {
	var dishChoice = document.getElementById("dFavorite");
		dishChoice.style.backgroundColor="#de814b";
	var dish = dishChoice.value;
	if(dish==null || dish=="") {
		var pField = document.getElementById("goodChoice");
	pField.innerHTML=""
		}
	else {
		console.log(dish) ;
		var dishGreeting = "Good Choice";
		var pField = document.getElementById("goodChoice");
		pField.innerHTML=dishGreeting;
		pField.style.backgroundColor="#de814b"
		}
	}

var rating=document.getElementById ("numberRating");
rating.addEventListener ("input", ratingResponse)

function ratingResponse() {
	var pNumber = document.getElementById("numberRating");
	var numberBox = pNumber.value;
	if(numberBox<="4") {
		var underRating = document.getElementById("ratingResponse");
		underRating.innerHTML="Are you sure?";
		}
	else {
		var underRating = document.getElementById("ratingResponse");
		underRating.innerHTML="Great!";
		}
	}

var rSurvey=document.getElementById ("surveyReset");
rSurvey.addEventListener("click", clearSurvey);

function clearSurvey() {
	alert("Get it right this time!");
	var newColor = document.getElementById ("clearColor");
	newColor.style.backgroundColor="#de814b";
	}




var submit=document.getElementById ("submitSurvey");
submit.addEventListener ("click", numberNeeded)

function numberNeeded() {
	var pNumber = document.getElementById("phone");
	var numberBox = pNumber.value;
	if(numberBox==null || numberBox=="") {
		var underSubmit = document.getElementById("numberRequired");
		underSubmit.innerHTML="Tricked you- phone number is required!";
		underSubmit.style.backgroundColor="gray"
		underSubmit.style.color="#de4b72"
		}
	else {
		var underSubmit = document.getElementById("numberRequired");
		underSubmit.innerHTML="Thanks- can I call you tomorrow?"
		underSubmit.style.backgroundColor="#de814b"
		underSubmit.style.color="white"
		}
	}







	
