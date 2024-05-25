const min = 50;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
let attempts = 0;
let running = true;

let username="";
while(username==""||username===""){
username=window.prompt("Please input your Cute Name");
}

document.getElementById("btnResult").onclick = function () {
    let guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < min || guess > max) {
        window.alert(`Please enter a number between ${min} and ${max}`);
    } else {
        attempts++;

        if (guess < answer) {
            document.getElementById("changeContent").textContent = "TOO LOW!! Try Again!!";
        } else if (guess > answer) {
            document.getElementById("changeContent").textContent = "TOO HIGH!! Try Again!!";
        } else {
            document.getElementById("changeContent").innerHTML = `Congratulation!!🍾 <span style="color: pink;">${username}</span> The answer was ${answer}. It took you ${attempts} attempts`;
            running = false;
        }
    }
};
// @Chhorn seyha@