var guess_number;
var guess;
var chances = 10;

function guessNumber() {
   guess_number = Math.floor(Math.random() * 100) + 1;
   console.log(guess_number);
   document.getElementById("play").style.display = "none";
   document.getElementById("guess-data").style.display = "block";
   document.getElementById("guess-data").style.display = "block";

}

function checkGuessedNumber() {
    guess = document.getElementById("input").value;
    chances -= 1;

    if(guess < 1 || guess > 100){
        alert("Please! Enter the number between 1 to 100");
        return;
    }
    
    if(chances == 0) {
        alert("Game over");
        return
    }
    else {
        document.getElementById("attempts").innerHTML = "You have " + chances + " attempts remaining to guess the number."
    }

    if(guess > guess_number){
        document.getElementById("comments").innerHTML = "The number is too High"; 
    }
    else if(guess < guess_number) {
        document.getElementById("comments").innerHTML = "The number is too Low";
    }
    else{
        document.getElementById("comments").innerHTML = "The guess is correct";
        setTimeout(() => location.reload(), 5000);
    }
}


