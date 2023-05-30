// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function dislays user inputs of planets comets and stars dpeending on user input.
 */
function calculate () {
  
  // user star height and base variable
  let Sbase = parseInt(document.getElementById('S-base').value);
  let Sheight = parseInt(document.getElementById('S-height').value);

  // user planet height and base variable
  let Pheight = parseInt(document.getElementById('P-height').value);
  let Pbase = parseInt(document.getElementById('P-base').value);

  //user comet base variable 
  let comet = parseInt(document.getElementById('comet').value);

  //counter for while loops starting at 1
  let counter = 1
  let counter2 = 1
  
  //open strings for display variables 
  let displaystar = ""
  let displayplanet = ""
  let display = ""
  let display2 = ""
  let display3 = ""
  
  //if statment for display ERROR if user inputs nothing into all textfields
  if ((isNaN(Pheight)) || (isNaN(Pbase)) || (isNaN(Sbase)) || (isNaN(Sheight)) || (isNaN(comet))) {
    
    display =  "ERROR: Please enter a positive intiger into all text fields."
  }
    
  // If else statment for negative numbers in all textfields
  else if ((Sbase< 0) || (Pbase< 0) || (Sheight< 0) || (Pheight< 0) || (comet<0)) {

    display = "ERROR: Please input a positive intiger."
  }
  //else statment for displaying galaxy components
  // while loop to display user input ammount of stars for base
  else {   
    while (counter <= Sbase) {
 
  // add +1 star for star base
    displaystar = displaystar + "✦"

  //add +1 to counter
    counter = counter +1
    }

  // while loop to display user base as many times as wated with line break
    while (counter2 <= Sheight) {
  
  // displaying star base with line break for display variable
    display = display + displaystar + "<br>"

  //add +1 to counter2
    counter2 = counter2 +1
    }

   // for loop to display user planet base  with counter3=1 and counter3 +1
    for (let counter3= 1; counter3 <= Pbase; counter3= counter3 +1) {
  
   //add +1 planet to planet base
    displayplanet = displayplanet + "🌎"

    }

    // for loop to display user planet base as many times as wanted with line break. counter4=1, counter4 +1
    for (let counter4 = 1; counter4 <= Pheight; counter4 = counter4 +1) {
  
   //displaying planet base with line break for planet height
    display2 = display2 + displayplanet + "<br>"
      
    }
    
    // for loop to display comet base. counter5=1, counter5 +1
    for (let counter5 = 1; counter5 <= comet; counter5 = counter5 +1) {
  
   //adding +1 comet to comet base
    display3 = display3 + "☄️" 
      
    }
  }
  // output display variables back to user for planet, star and comet.
  document.getElementById('display-stars').innerHTML = display 
  document.getElementById('display-planets').innerHTML = display2
  document.getElementById('display-comet').innerHTML = display3

}
 
