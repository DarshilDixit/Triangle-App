var sides = document.querySelectorAll(".side-input");
var checkButton = document.querySelector("#check-button");
var outputHypotenuse = document.querySelector(".output-msg");


function calculateHypotenuse() {
    if(sides[1].value && sides[0].value){
        var sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
        var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        console.log(lengthOfHypotenuse);
        outputHypotenuse.innerText = "The length of hypotenuse is:" + lengthOfHypotenuse ;
    }else{
        outputHypotenuse.innerText = "Please enter both the fields."
    }
}


function calculateSumOfSquares(a, b) {
	var sumOfSquares = a * a + b * b;
	return sumOfSquares;
}

checkButton.addEventListener('click', calculateHypotenuse);