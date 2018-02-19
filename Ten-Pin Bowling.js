/*Ten-Pin Bowling

link : https://www.codewars.com/kata/ten-pin-bowling/train/javascript

Problem description : 
In this challenge you will be given a string representing a player's ten frames. It will look something like this: 
'X X 9/ 80 X X 90 8/ 7/ 44', where each frame is space-delimited, 'X' represents strikes, and '/' represents spares. 
Your goal is take in this string of frames into a function called bowlingScore and return the players total score.

Solution : 

Basic idea is to create three arrays : 
1. Rolls. Every frame consists of two rolls, we need to register the number of bowls user knocked during each roll.
2. Spares. Save number of roll during which user made a spare.
3. Strikes. Save number of roll during which user made a strike.

We iterate over frames array saving the number of knocked bowls during every roll, also, we save numbers of rolls during which user
made strike or spare in respective arrays. We add the numbers from the rolls array (total scored points without strikes and spares), 
then we go over strikes' and spares' arrays and add the points accordingly (ex. if user made a spare on the 6 roll, we add the result of 
7 roll to the score, if user made a strike on the 3 roll, we add the result of 4th and 5th roll).

Implementation : */

function bowlingScore(frames) {
  let score = 0;
  let rolls = [];
  let strikes = [];
  let spares = [];
  frames = frames.split(" ")
  
  for (let i = 0; i < frames.length; i++) {
    for (let j = 0; j < frames[i].length; j++) {
      if (frames[i][j] === 'X') { //strike
        rolls.push(10);
        if (i < 9) strikes.push(rolls.length - 1)
      } else if (frames[i][j] === '/') { //spare
        rolls.push(10 - Number(frames[i][j-1]))
        if (i < 9) spares.push(rolls.length - 1)
      } else { //simple roll
        rolls.push(Number(frames[i][j]))
      }
    }
  }
  score = rolls.reduce((a, b) => a + b)
  spares.forEach(x => score += rolls[x + 1])
  strikes.forEach(x => score += rolls[x + 1] + rolls[x + 2])          
  return score
}


console.log(bowlingScore('X X X X X X X X X XXX')) // 300
console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11')) // 20
console.log(bowlingScore('61 18 31 5/ 51 27 5/ 71 3/ 34')) // 95
console.log(bowlingScore('80 44 14 X 72 8/ 60 52 36 1/X')) // 107
