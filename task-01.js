 //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0){
return num * -1
}else {
return num;
}
}

/* aternative solution

function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}
*/

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return Number(laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move (position, roll) {
return Number(position + (roll*2))
}


// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet (name, owner) {
  if (name === owner){
    return 'Hello boss'
  } else {
    return 'Hello guest'
  }
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time * 0.5);
}

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
   if (flower1 % 2 === 0 && flower2 % 2 === 0 ) {
     return false
   } 
  if (flower1 % 2 != 0 && flower2 % 2 != 0 ){
    return false
  }
   else {
     return true
   }
}

/* alternative solution

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

*/
