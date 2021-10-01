var inputs = document.querySelectorAll(".side-input");
var checkAreaButton = document.querySelector("#check-button");
var checkOutputArea = document.querySelector(".output-msg");

checkAreaButton.addEventListener("click", calculateArea);

function calculateArea() {
    if(inputs[1].value && inputs[0].value){
        var basexheight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
        var area = basexheight / 2;
        checkOutputArea.innerText = "The area of triangle is: " + area + " cm²";
    } else{
        checkOutputArea.innerText = "Please enter both the fields."
    }
}

function multiplyBaseAndHeight(base, height) {
	var multipliedOutput = base * height;
	return multipliedOutput;
}