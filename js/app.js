'use strict';
let score =0;

let yourName = prompt('Hello Dear , What\s your Name?');
alert('Your Name is '+ yourName  /a 'you have a good name');

// question 1


let favouriteSport = prompt('do you think football is my favourite sport?');

if (favouriteSport.tolowercase() == 'yes' || favouriteSport.tolowercase() == 'y') {
    //  console.log('you are smart , football is the best for me');
        alert("you are smart , football is the best for me");
        score++;
    
} else if (favouriteSport.tolowercase() == 'no' || favouriteSport.tolowercase() == 'n') {
    //  console.log('wrong answer ,football is my favourite sport');
        alert("wrong answer ,football is my favourite sport");
} else{
    //  console.log('please type yes / no?');
        alert("please type yes / no?");

}



// question 2


let favouriteColor = prompt('do you think that the black color is my favourite color?');

if (favouriteColor.tolowercase() == 'yes' || favouriteColor.tolowercase() == 'y') {
    //console.log('it is true ,black is a king of the colors');
      alert("it is true ,black is a king of the colors");
      score++;
    
} else if (favouriteColor.tolowercase() == 'no' || favouriteColor.tolowercase() == 'n') {
    //console.log("not correct , black is the best for me");
      alert("not correct , black is the best for me");

} else {
    console.log('please type yes / no?');
    alert("please type yes / no?");
    
}


// question 3


let bestJob = prompt('do you think am i programmer ?');

if (bestJob.tolowercase() == 'yes' || bestJob.tolowercase() == 'y') {
   // console.log('no , im not aprogrammer , im a civil engineer ');
      alert("no , im not aprogrammer , im a civil engineer ");
    
} else if (bestJob.tolowercase() == 'no' || bestJob.tolowercase() == 'n') {
    //console.log('correct answer , im an engineer');
      alert("correct answer , im an engineer");
      score++;
    
} else {
   // console.log('please type yes / no?');
      alert("please type yes / no?");
    
} 



// question 4

let speakEnglish = prompt('do you think i good in english ?');

if (speakEnglish.tolowercase() == 'yes' || speakEnglish.tolowercase() == 'y') {
    // console.log('no i didnt , you are shy from me');
       alert("no i didnt , you are shy from me");
    
}else if (speakEnglish.tolowrcase() == 'no' || speakEnglish.tolowercase() == 'n') {
    console.log('ooh , thanks for frankly');
    alert("thanks for frankly");
    score++;
    
} else {
    console.log('please type yes / no?');
    alert("please type yes / no?");
    
}


//question 5

for (let i = 0; i < 4; i++){
    let oldYears = prompt('how old am I ?');
    if (oldYears == 28) {
        alert("exactly !!");
        score++;b
        break
        
    }else if (oldYears >28 ) {
        alert("Too high");
    }else if (oldYears < 28) {
        alert("Too low");
    }else{
        alert("please guess my age");
    }
}


//question 6    

let horseRiding = prompt('do you think I love horse riding  ?');
if (horseRiding.tolowercase() == 'yes' || horseRiding.tolowercase() == 'y') {
    //console.log('that is correct !!');
      alert("that is correct");
      score++;
}else if (horseRiding.tolowercase() == 'no' || horseRiding.tolowercase() == 'n') {
    // console.log('it is false , i was tell you !!!');
       alert("it is false , i was tell you !!!");
    
} else {
    console.log('please type what i told you ?!');
    alert("please type what i told you");
    
}


// question 7


let goToSleep = prompt('do you know im very sleepy ??');
if (goToSleep.tolowercase() = 'yes' || goToSleep.tolowercase() = 'y') {
    //console.log('genius, true and Good night ');
      alert("genius, true and Good night");
      score++;
      }else if (goToSleep.tolowercase() = 'no' || goToSleep.tolowercase() = 'n') {
          // console.log('false, you didnt know any thing !!!!');
             alert("false, you didnt know any thing!!!!");
        
      } else {
             console.log('please type yes or no ?!');
             alert("please type yes or no")
    }



    alert(`You got ${score} out of 7`);
alert('This was fun ' + yourName + ' ,See you next time! Goodbye!');