// item no. 1 slides (switch)
let grade = prompt("Enter Grade: ").toUpperCase();
let message = "";

switch (grade) {
    case "A":
    case "B":
        message = "Excellent";
        break;
    case "C":
        message = "You passed";
        break;
    case "D":
        message = "Needs improvement";
        break;
    case "F":
        message = "Failed";
        break;
    default:
        message = "Please input a valid grade";
}

document.getElementById("num1").innerHTML = message;

// item no. 1 slides (if)
let grade2 = prompt("Enter Grade: ").toUpperCase();
let message2 = "";

    if (grade2 === "A" || grade2 === "B") {
        message2 = "Excellent";
    } 
    else if (grade2 === "C") {
        message2 = "You passed!";
    } 
    else if (grade2 === "D") {
        message2 = "Needs Improvement";
    } 
    else if (grade2 === "F") {
        message2 = "Failed";
    } 
    else {
        message2 = "Input Valid Grade";
}
document.getElementById("num2").innerHTML = message2;

// item no. 2
var result = prompt("Do you have your school I.D?: ").toLowerCase();

switch (result){
    case "yes":
        document.getElementById("num3").innerHTML = "Welcome to the Event!";
        break;
    default:
        document.getElementById("num3").innerHTML = "Please show your I.D";
}

// item no. 3
var student = prompt("Are you a student? (yes/no)").toLowerCase();
var senior = prompt("Are you a senior citizen? (yes/no)").toLowerCase();

switch (true) {
    case (student === "yes" || senior === "yes"):
        document.getElementById("num4").innerHTML = "Discounted Fare!";
        break;
    default:
        document.getElementById("num4").innerHTML = "Regular Fare!";
}

// item no. 4
var score = prompt("Enter Score: ");

switch (true) {
    case (score > 100 || score < 0):
        document.getElementById("num5").innerHTML = "Invalid Score! Try Again!";
        break;
    case (score >= 90):
        document.getElementById("num5").innerHTML = "Excellent!";
        break;
    case (score >= 75):
        document.getElementById("num5").innerHTML = "Very Good!";
        break;
    case (score >= 60):
        document.getElementById("num5").innerHTML = "You Passed!";
        break;
    default:
        document.getElementById("num5").innerHTML = "You Failed!";
}

// item no. 5
var pname = prompt("Enter Name: ").toLowerCase();
var vowels = 0;

for (let i = 0; i < pname.length; i++) {
    
    let letter = pname[i];

    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vowels++;
            break;
    }
}
document.getElementById("num6").innerHTML = "Your name contains " + vowels + " vowels.";

// item no. 6
var userName = prompt("Enter Username: ");
var count = 0;
var hasSpace = false;

for (let i = 0; i < userName.length; i++) {
    count++;

    switch (userName[i]) {
        case " ":
            hasSpace = true;
            break;
    }
}
switch (true) {
    case (hasSpace === true):
        document.getElementById("num7").innerHTML = "Username must not contain spaces";
        break;

    case (count < 6):
        document.getElementById("num7").innerHTML = "Username must be at least 6 characters";
        break;

    default:
        document.getElementById("num7").innerHTML = "Valid Username!";
}

// item no. 7
var password = "Grade9JS";
let attempts = 0;

while (attempts < 3) {
    var input = prompt("Enter Password: ");

    switch (input) {
        case password:
            document.getElementById("num8").innerHTML = "Login Successful!";
            attempts = 3; // exit loop
            break;
        default:
            attempts++;
            if (attempts === 3) {
                document.getElementById("num8").innerHTML = "Account Locked!";
            }
            break;
    }
}
