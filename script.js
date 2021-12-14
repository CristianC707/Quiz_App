const startBtn = document.querySelector(".startBtn button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");

startBtn.onClick = () =>{
    infoBox.classList.add("activeInfo");
}

exitBtn.onClick = () =>{
    infoBox.classList.remove("activeInfo");
}