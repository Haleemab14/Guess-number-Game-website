// ================== ELEMENTS ==================
const easylevel = document.getElementById('easy');
const level1 = document.getElementById('level1');
const startScreen = document.getElementById("startscreen"); // full start section
const startButton = document.getElementById("startButton");
const image = document.querySelector('.click-image');
const win1 = document.getElementById('win1');
const lose1 = document.getElementById('lose1');
const hardlevel = document.getElementById('hardlevel');
const level2 = document.getElementById('level2');
const winlevel2 = document.getElementById('winlevel2');
const loselevel2 = document.getElementById('loselevel2');
const catup = document.querySelector('.catup');
const catjumpy = document.querySelector('.catjumpy');
const catjump1 = document.querySelector('.catjump1');
const sharkup = document.querySelector('.sharkup');
const impossiblelevel = document.getElementById('impossible');
const level3 = document.getElementById('level3');
const winlevel3 = document.getElementById('winlevel3');
const loselevel3 = document.getElementById('loselevel3');
const cateatlevel3 = document.getElementById('cateatlevel3');
// ================== SOUNDS ==================
const sounds = {
    startSound: document.getElementById('startSound'),
    start: document.getElementById('start'),
    oksound: document.getElementById('oksound'),
    entersound: document.getElementById('entersound'),
    losesound: document.getElementById('losesound'),
    forestsound: document.getElementById('forest'),
    level1sound: document.getElementById('level1sound'),
    error: document.getElementById('error'),
    tigerclose: document.getElementById('tigerclose'),
    tigerfar: document.getElementById('tigerfar'),
    catclose: document.getElementById('catclose'),
    tigerwin: document.getElementById('tigerwin'),
    catlose: document.getElementById('catlose'),
    catlike: document.getElementById('catlike'),
    winsound: document.getElementById('winsound'),
    firework: document.getElementById('firework'),
    near: document.getElementById('near'),
    angrycat: document.getElementById('angrycat'),
    winfinal: document.getElementById('winfinal')
}
sounds.forestsound.loop = true; sounds.forestsound.volume = 0.3; sounds.level1sound.loop = false;
// ================== GAME RIDDLES ==================
const wordRiddles = [
    { q: "3 lions catch 3 deer in 3 minutes. How many minutes for 300 lions to catch 300 deer?", a: 3 },
    { q: "Add five hours to 9 o'clock on a clock. What number do you get?", a: 2 },
    { q: "Use eight 8's to total a thousand (with addition). What number do you get?", a: 1000 },
    { q: "On a phone keypad, multiply every digit once. What's the product?", a: 0 },
    { q: "A 300 ft train enters a 300 ft tunnel at 300 ft/min. Minutes to fully clear the tunnel?", a: 2 },
    { q: "A book + cover cost $110. The book costs $100 more than the cover. Price of the cover (in dollars)?", a: 5 },
    { q: "During a race, you pass the person in second place. What place are you in now?", a: 2 },
    { q: "A farmer has 17 sheep. All but 9 die. How many remain?", a: 9 },
    { q: "At exactly 3:00, what's the angle (degrees) between the hands of a clock?", a: 90 },
    { q: "How many times do the clock hands overlap in 12 hours?", a: 11 },
    { q: "How many 2-digit even numbers can be formed from {1,2,3,4} without repeating digits?", a: 6 },
    { q: "The sum of three consecutive integers is 96. What is the middle integer?", a: 32 },
    { q: "A rectangle has perimeter 50. One side is 12. What is the other side?", a: 13 },
    { q: "How many trailing zeros are there in 100! ?", a: 24 },
    { q: "You answered 70% of 10 questions correctly. How many correct?", a: 7 },
    { q: "If 2^x = 32, what is x?", a: 5 },
    { q: "Smallest positive integer divisible by every number from 1 to 10?", a: 2520 },
    { q: "Sum of the integers from 1 to 100?", a: 5050 },
    { q: "A car travels 60 km/h for 90 minutes. How many kilometers?", a: 90 },
    { q: "In the dark, how many socks must you pick to guarantee at least one matching pair?", a: 3 },
    { q: "If a + b = 10 and ab = 21, what is (a - b)^2 ?", a: 16 },
    { q: "Sum of interior angles (degrees) of a hexagon?", a: 720 },
    { q: "How many 2×2 squares are in an 8×8 chessboard?", a: 49 },
    { q: "How many total squares are in an 8×8 chessboard?", a: 204 },
    { q: "3 cats catch 3 mice in 3 minutes. Cats needed to catch 100 mice in 100 minutes?", a: 3 },
    { q: "Halve a number and add 10 to get 25. What was the number?", a: 30 },
    { q: "Solve for n: 3n + 7 = 2n + 20. What is n?", a: 13 },
    { q: "5 machines take 5 minutes to make 5 gadgets. Minutes for 100 machines to make 100 gadgets?", a: 5 },
    { q: "Sum of the first 20 even numbers?", a: 420 },
    { q: "How many handshakes occur if 12 people each shake hands exactly once with every other person?", a: 66 },
    { q: "How many edges does a cube have?", a: 12 },
    { q: "A school has 240 students. If 3/5 are boys, how many girls?", a: 96 },
    { q: "An odd number squared, mod 8: what remainder do you always get?", a: 1 },
    { q: "How many diagonals are there in a decagon?", a: 35 },
    { q: "How many primes are there strictly between 10 and 30?", a: 6 },
    { q: "Minutes between 2:30 and 3:45?", a: 75 },
    { q: "A 10 m rope is cut in ratio 3:2. How long (m) is the longer piece?", a: 6 },
    { q: "How many positive divisors does 36 have?", a: 9 },
    { q: "40% of a number is 24. What is the number?", a: 60 },
    { q: "How many distinct permutations of the letters in LEVEL?", a: 30 },
    { q: "In an arithmetic sequence starting at 3 with common difference 4, what is the 25th term?", a: 99 },
    { q: "How many integers from 1 to 100 are multiples of 3 or 5?", a: 47 },
    { q: "Smallest positive integer that leaves remainder 1 when divided by 2,3,4,5,6?", a: 61 },
    { q: "How many months in a year have 28 days?", a: 12 },
    { q: "Triple a number then add 12 to get 57. What's the number?", a: 15 },
    { q: "Roll two dice: outcomes with sum 9?", a: 4 },
    { q: "Sum of interior angles (degrees) of a 20-gon?", a: 3240 },
    { q: "Permutations of 4 distinct objects taken 2 at a time?", a: 12 },
    { q: "How many perfect squares are there between 1 and 100 inclusive?", a: 10 },
    { q: "If 8 workers finish a job in 15 days, how many workers (same rate) to finish in 5 days?", a: 24 },
    { q: "A tank fills via two identical pipes in 12 minutes together. One pipe alone takes how many minutes?", a: 24 }
];
// ================== GLOBALS ==================
let score = 15; let interval; let level = 0; let currentQuestion = 1;
let randomarr = [1, 200]; let rand2 = Math.floor(Math.random() * 2); let question2ans = randomarr[rand2];
let max = 100; let maxn = 200; let randomnumb = Math.floor(Math.random() * (maxn + 1));
let randomInteger = Math.floor(Math.random() * (max + 1)); let currentRiddleIndex = Math.floor(Math.random() * wordRiddles.length);
// ================== HELPERS ==================
function playSound(name) {
    const sound = sounds[name];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}
function getLevelElement(idBase) {
    return document.getElementById(`${idBase}-${level}`);
}
function getEnterButton() {
    return getLevelElement("ok");
}
function toggleImage() {
    const catfind = document.getElementById("catfind");
    const catwalk = document.getElementById("catwalk");
    if (catfind.style.display === "block") {
        catfind.style.display = "none";
        catwalk.style.display = "block";
    } else {
        catfind.style.display = "block";
        catwalk.style.display = "none";
    }
}
// ================== GAME FLOW ==================
image.addEventListener("click", () => {
    playSound('oksound'); resetGame();
    playSound("forestsound");
    startScreen.style.display = "none";
    easylevel.style.display = "block"; level++;
    setTimeout(() => {
        easylevel.style.display = "none";
        playSound('startSound');
        level1.style.display = "block"; sounds.level1sound.loop = true; playSound("level1sound");
        startTimer(30);
    }, 3000);
});
function startTimer(duration) {
    let timer = duration; clearInterval(interval);
    let display = getLevelElement("timer");
    display.textContent = timer;
    interval = setInterval(function () {
        timer--; // decrease first
        if (timer >= 0) {
            display.textContent = timer;
        }
        if (timer < 0) {
            sounds.level1sound.loop = false;
            playSound('losesound');
            clearInterval(interval);
            display.textContent = "0";
            if (level == 1) {
                playSound('tigerwin'); sounds.tigerwin.volume = 0.7;
                playSound('catlose'); sounds.catlose.volume = 1.0;
                level1.style.display = "none";
                lose1.style.display = "block";
                setTimeout(() => {
                    playSound('start');
                    lose1.style.display = "none";
                    startScreen.style.display = "block";
                }, 4000);
            }
            else if (level == 2) {
                sounds.angrycat.volume = 0.9;
                playSound('losesound'); playSound('angrycat');
                level2.style.display = "none";
                loselevel2.style.display = "block";
                setTimeout(() => {
                    playSound('start');
                    loselevel2.style.display = "none";
                    startScreen.style.display = "block";
                }, 4000);
            }
        }
    }, 1000);
}
// ================== GUESS LOGIC ==================
document.querySelectorAll('.enter').forEach(btn => {
    btn.addEventListener('click', () => {
        playSound('entersound'); let guess; let feedback;
        if (level === 1) {
            feedback = getLevelElement('remarks'); guess = Number(getLevelElement("guessInput").value);
            if (!guess || guess < 1 || guess > 100) {
                playSound('error');
                feedback.textContent = "❌ Please enter a number between 1 and 100.";
                feedback.style.color = "red";
                return;
            }
            if (guess === randomInteger) {
                level1.style.display = "none";
                win1.style.display = "block";
                feedback.textContent = "🎉 Correct! The number was " + randomInteger;
                feedback.style.color = "green";
                getLevelElement("guessInput")?.setAttribute("disabled", true);
                getEnterButton()?.setAttribute("disabled", true);
                clearInterval(interval); level++;
                // Small delay so the screen change is visible before sounds run
                setTimeout(() => {
                    let scoreElement = document.getElementById('finalscore1');
                    if (scoreElement) scoreElement.textContent = score;
                    if (sounds.level1sound) {
                        sounds.level1sound.pause();
                        sounds.level1sound.currentTime = 0;
                        sounds.level1sound.loop = false;
                    }
                    if (sounds.win) sounds.win.volume = 0.9;
                    if (sounds.catwin) sounds.catwin.volume = 0.9;
                    if (sounds.firework) sounds.firework.volume = 0.9;
                    playSound('winsound');
                    playSound('firework');
                    setTimeout(() => {
                        playSound('catlike');
                    }, 1000);
                }, 50); // delay 50ms to let the DOM refresh
                return; // Stop here, don't reduce score
            }
            score--;
            getLevelElement("scores").textContent = score;
            if (score <= 0) {
                playSound('losesound'); sounds.level1sound.loop = false;
                clearInterval(interval);
                playSound('tigerwin'); sounds.tigerwin.volume = 0.7;
                level1.style.display = "none";
                lose1.style.display = "block";
                playSound('catlose'); sounds.catlose.volume = 1.0;
                setTimeout(() => {
                    playSound('start');
                    lose1.style.display = "none";
                    startScreen.style.display = "block";
                }, 4000);
                return;
            }
            if (guess > randomInteger) {
                if (guess >= randomInteger * 2) {
                    playSound('tigerfar'); sounds.tigerfar.volume = 0.9;
                    feedback.textContent = "📈 Your guess is 2 times greater!";
                } else if (Math.abs(guess - randomInteger) <= 5) {
                    playSound('catclose');
                    feedback.textContent = "📈 Slightly greater (near the number)";
                } else {
                    playSound('tigerclose'); sounds.tigerclose.volume = 0.9;
                    feedback.textContent = "📈 Greater but not close";
                }
                feedback.style.color = "blue";
            }
            else if (guess < randomInteger) {
                if (guess * 2 <= randomInteger) {
                    playSound('tigerfar'); sounds.tigerfar.volume = 0.9;
                    feedback.textContent = "📉 Your guess is 2 times less!";
                } else if (Math.abs(guess - randomInteger) <= 5) {
                    playSound('catclose');
                    feedback.textContent = "📉 Slightly less (near the number)";
                } else {
                    playSound('tigerclose'); sounds.tigerclose.volume = 0.9;
                    feedback.textContent = "📉 Less but not close";
                }
                feedback.style.color = "orange";
            }
        } else if (level === 2) {
            feedback = getLevelElement('remarks'); guess = Number(getLevelElement("guessInput").value);
            if (currentQuestion === 1) {
                if (!guess || guess < 1 || guess > 200) {
                    playSound('error');
                    feedback.textContent = "❌ Please enter a number between 1 and 200.";
                    feedback.style.color = "red";
                    return;
                }
                if (guess === randomnumb) {
                    document.querySelector('.catsta').style.display = "none";
                    playSound('catlike'); sounds.catlike.volume = 0.9;
                    catjumpy.style.display = "block";
                    feedback.textContent = "🎉 Correct! The number was " + randomnumb;
                    feedback.style.color = "green";
                    currentQuestion = 2;
                    setTimeout(() => {
                        sounds.near.volume = 0.9; playSound('near');
                    }, 500);
                    getLevelElement("guessInput").value = "";
                    clearInterval(interval);
                    setTimeout(() => {
                        catjumpy.style.display = "none";
                        catup.style.display = "block";
                        document.querySelector('.sharksta').style.display = "none";
                        sharkup.style.display = "block"; playSound('startSound');
                        feedback.textContent = "✅ Q2: Guess the number either 1 or 200?";
                        getLevelElement("scores").textContent = score;
                        startTimer(10);
                    }, 2000);
                    return;
                }
                score--;
                getLevelElement("scores").textContent = score;
                if (score <= 0) {
                    sounds.angrycat.volume = 0.9;
                    playSound('losesound'); playSound('angrycat');
                    clearInterval(interval);
                    level2.style.display = "none";
                    loselevel2.style.display = "block";
                    setTimeout(() => {
                        playSound('start');
                        loselevel2.style.display = "none";
                        startScreen.style.display = "block";
                    }, 4000);
                    return;
                }
                if (guess > randomnumb) {
                    if (guess >= randomnumb * 2) {
                        playSound('error'); sounds.error.volume = 0.9;
                        feedback.textContent = "📈 Your guess is 2 times greater!";
                    } else if (Math.abs(guess - randomnumb) <= 5) {
                        playSound('catclose'); sounds.catclose.volume = 0.9;
                        feedback.textContent = "📈 Slightly greater (near the number)";
                    } else {
                        playSound('angrycat'); sounds.angrycat.volume = 0.9;
                        feedback.textContent = "📈 Greater but not close";
                    }
                    feedback.style.color = "blue";
                }
                else if (guess < randomnumb) {
                    if (guess * 2 <= randomnumb) {
                        playSound('error'); sounds.error.volume = 0.9;
                        feedback.textContent = "📉 Your guess is 2 times less!";
                    } else if (Math.abs(guess - randomnumb) <= 5) {
                        playSound('catclose'); sounds.catclose.volume = 0.9;
                        feedback.textContent = "📉 Slightly less (near the number)";
                    } else {
                        playSound('angrycat'); sounds.angrycat.volume = 0.9;
                        feedback.textContent = "📉 Less but not close";
                    }
                    feedback.style.color = "orange";
                }
            }
            if (currentQuestion === 2) {
                if (guess === question2ans) {
                    clearInterval(interval); sounds.near.volume = 0.9;
                    feedback.textContent = "🎉 Correct! Level 2 complete!";
                    feedback.style.color = "green"; playSound('near');
                    getLevelElement("guessInput")?.setAttribute("disabled", true);
                    getEnterButton()?.setAttribute("disabled", true);
                    catup.style.display = "none";
                    catjump1.style.display = "block";
                    level++;
                    setTimeout(() => {
                        level2.style.display = "none";
                        winlevel2.style.display = "block";
                        let scoreElement = document.getElementById('finalscore2');
                        if (scoreElement) scoreElement.textContent = score;
                        if (sounds.win) sounds.win.volume = 0.9;
                        if (sounds.catwin) sounds.catwin.volume = 0.9;
                        if (sounds.firework) sounds.firework.volume = 0.9;
                        playSound('winsound');
                        playSound('firework');
                        setTimeout(() => {
                            sounds.catlike.volume = 0.9;
                            playSound('catlike');
                        }, 1000);
                    }, 2000)
                    return;
                } else {
                    sounds.angrycat.volume = 0.9;
                    playSound('losesound'); playSound('angrycat');
                    clearInterval(interval);
                    level2.style.display = "none";
                    loselevel2.style.display = "block";
                    setTimeout(() => {
                        playSound('start');
                        loselevel2.style.display = "none";
                        startScreen.style.display = "block";
                    }, 4000);
                    return;
                }
            }
        } else if (level === 3) {
            feedback = getLevelElement('remarks'); guess = Number(getLevelElement("guessInput").value);
            const correctAns = wordRiddles[currentRiddleIndex].a;
            if (guess === correctAns) {
                playSound('near'); sounds.near.volume = 0.9;
                feedback.textContent = "🎉 Correct! The number was " + correctAns;
                feedback.style.color = "green";
                getLevelElement("guessInput")?.setAttribute("disabled", true);
                getEnterButton()?.setAttribute("disabled", true);
                clearInterval(interval);
                level++;
                if (sounds.win) sounds.win.volume = 0.9;
                setTimeout(() => {
                    playSound('catlike');
                }, 1000);
                setTimeout(() => {
                    level3.style.display = "none";
                    cateatlevel3.style.display = "block";
                }, 3000)
                return; // Stop here, don't reduce score
            }
            else {
                playSound('error'); sounds.error.volume = 0.9;
                feedback.textContent = "❌ Try Again";
                feedback.style.color = "red";
                score--; toggleImage();
                getLevelElement("scores").textContent = score;
                if (score <= 0) {
                    playSound('losesound');
                    clearInterval(interval);
                    level3.style.display = "none";
                    loselevel3.style.display = "block";
                    playSound('catlose'); sounds.catlose.volume = 1.0;
                    setTimeout(() => {
                        playSound('start');
                        loselevel3.style.display = "none";
                        startScreen.style.display = "block";
                    }, 4000);
                    return;
                }
                return;
            }
        } else if (level == 4) {
            playSound('winfinal'); sounds.winfinal.volume = 0.9;
            feedback = getLevelElement('remarks');
            guess = getLevelElement("guessInput").value;
            cateatlevel3.style.display = "none";
            winlevel3.style.display = "block";
            feedback.textContent = guess;
            feedback.style.color = "black";
        }
    });
});
// ================== RESTART HANDLER ==================
document.querySelectorAll('.restart').forEach(btn => {
    btn.addEventListener('click', () => {
        playSound('start');
        resetGame();
    });
});
function resetGame() {
    sounds.level1sound.loop = false;
    clearInterval(interval);
    level1.style.display = "none";
    win1.style.display = "none";
    lose1.style.display = "none";
    level2.style.display = "none";
    winlevel2.style.display = "none";
    loselevel2.style.display = "none";
    hardlevel.style.display = "none";
    catup.style.display = "none";
    catjumpy.style.display = "none";
    document.querySelector('.catsta').style.display = "none";
    document.querySelector('.sharksta').style.display = "none";
    catjump1.style.display = "none";
    catup.style.display = "none";
    sharkup.style.display = "none";
    level3.style.display = "none";
    winlevel3.style.display = "none";
    loselevel3.style.display = "none";
    cateatlevel3.style.display = "none";
    document.getElementById('catfind').style.display = "none";
    document.getElementById('catwalk').style.display = "none";
    startScreen.style.display = "block";
    level = 0;
    score = 15;
    currentQuestion = 1;
    randomInteger = Math.floor(Math.random() * (max + 1));  // level 1 number
    randomnumb = Math.floor(Math.random() * (maxn + 1));    // level 2 number
    rand2 = Math.floor(Math.random() * 2);
    question2ans = randomarr[rand2];
    let score1 = document.getElementById("scores-1");
    if (score1) score1.textContent = score;
    let score2 = document.getElementById("scores-2");
    if (score2) score2.textContent = score;
    let input1 = document.getElementById("guessInput-1");
    if (input1) {
        input1.value = "";
        input1.disabled = false;
    }
    let input2 = document.getElementById("guessInput-2");
    if (input2) {
        input2.value = "";
        input2.disabled = false;
    }
    let enter1 = document.getElementById("ok-1");
    if (enter1) enter1.disabled = false;
    let enter2 = document.getElementById("ok-2");
    if (enter2) enter2.disabled = false;
    let remarks1 = document.getElementById("remarks-1");
    if (remarks1) {
        remarks1.textContent = "Start guessing the numbers and save cat from tiger";
        remarks1.style.color = "black";
    }
    let remarks2 = document.getElementById("remarks-2");
    if (remarks2) {
        remarks2.textContent = "Start guessing the numbers and save Cat from Shark";
        remarks2.style.color = "black";
    }
}
document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => {
        if (level == 2) {
            playSound('oksound');
            win1.style.display = "none";
            hardlevel.style.display = "block";
            setTimeout(() => {
                hardlevel.style.display = "none";
                playSound('startSound');
                level2.style.display = "block";
                document.querySelector('.catsta').style.display = "block";
                document.querySelector('.sharksta').style.display = "block";
                let input2 = getLevelElement("guessInput");
                if (input2) {
                    input2.disabled = false;
                    input2.value = "";
                }
                getEnterButton().disabled = false;
                let remarks2 = getLevelElement("remarks");
                if (remarks2) {
                    remarks2.textContent = "Start guessing the numbers and save Cat from Shark";
                    remarks2.style.color = "black";
                }
                getLevelElement("scores").textContent = score;
                startTimer(30);
            }, 4000);
        }
        else if (level == 3) {
            playSound('oksound');
            winlevel2.style.display = "none";
            impossiblelevel.style.display = "block";
            setTimeout(() => {
                impossiblelevel.style.display = "none";
                playSound('startSound');
                level3.style.display = "block";
                document.getElementById('catfind').style.display = "block";
                document.getElementById('catwalk').style.display = "none";
                let input3 = getLevelElement("guessInput");
                if (input3) {
                    input3.disabled = false;
                    input3.value = "";
                }
                getEnterButton().disabled = false;
                let remarks3 = getLevelElement("remarks");
                currentRiddleIndex = Math.floor(Math.random() * wordRiddles.length);
                if (remarks3) {
                    remarks3.textContent = wordRiddles[currentRiddleIndex].q;
                    remarks3.style.color = "black";
                }
                getLevelElement("scores").textContent = score;
            }, 4000);
        }
    });
});
