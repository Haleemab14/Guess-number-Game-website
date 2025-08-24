let max = 100;
let randomInteger = Math.floor(Math.random() * max)+1;
//console.log(randomInteger);
 let guess = -1; let score = 101;
do{ score--;
 guess = Number(prompt("Guess a number from 1 - 100:"));
 if (guess > randomInteger) {
    if(guess >= randomInteger *10){
    alert('your guess is 10 times greater than number');}
    else{alert('your guess is greater but near the number');
    }
 } else if(guess < randomInteger) {
        if(guess*10 <= randomInteger){
            alert('your guess is 10 times less than number');            
        }
        else{alert('your guess is less but near the number');
        }
 }else{break;}
} while(guess !== randomInteger);
console.log('Congrats! your guess is correct');
console.log('Your score is: '+ score + ' out of 100');