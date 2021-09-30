var angleInput = document.querySelectorAll(".angle-container");
var checkButton = document.querySelector("#check-button");
var outputMsg = document.querySelector(".output-msg");



checkButton.addEventListener("click", outputHandler);

function outputHandler() {
    if (calculateSumOfAngles() === 180) {
        outputMsg.innerText = 'Yayy, the angles form a triangle';
    } else {
        outputMsg.innerText = 'Oh Oh!, the angles do not form a triangle';
    }
}

function calculateSumOfAngles() {
    var sumOfAngles =
        Number(angleInput[0].value) + Number(angleInput[1].value) + Number(angleInput[2].value);
    return sumOfAngles;
}