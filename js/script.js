// Created by: Everett
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function dislays numbers between the users min and max .
 */
function calculate () {
  
  // user min and max input
  let Sbase = parseInt(document.getElementById('S-base').value);
  let Sheight = parseInt(document.getElementById('S-height').value);
  let Pheight = parseInt(document.getElementById('P-height').value);
  let Pbase = parseInt(document.getElementById('P-base').value);

  //numbers empty string
  let counter = 1
  let counter2 = 1
  let counter4 = 1

  //open strings 
  let displaystar = ""
  let displayplanet = ""
  let display = ""
  let display2 = ""
  
  //dilsay if no input
  if (((Pheight && Pbase && Sbase && Sheight) == 0) || ((Pheight && Pbase && Sbase && Sheight) == "")) {
    
    display =  "ERROR: Please enter a digit into at least one text field."
  }
  // If else for negative numbers
  else if ((Sbase< 0) || (Pbase< 0) || (Sheight< 0) || (Pheight< 0)) {

    display = "ERROR: Please input a positive number. "
  }
    
  // while loop to display numbers between min and max
  else {   
    while (counter <= Sbase) {
 
  //number string with a line break each time
    displaystar = displaystar + "*"

  //step each loop number
    counter = counter +1
    }

  // while loop to display numbers between min and max
    while (counter2 <= Sheight) {
  
  //number string with a line break each time
    display = display + displaystar + "<br>"

  //step each loop number
    counter2 = counter2 +1
    }

   // for loop to display numbers between min and max
    for (let counter3= 1; counter3 <= Pbase; counter3= counter3 +1) {
  
   //number string with a line break each time
    displayplanet = displayplanet + "O"

    }

    // for loop to display numbers between min and max
    for (let counter4 = 1; counter4 <= Pheight; counter4 = counter4 +1) {
  
   //number string with a line break each time
    display2 = display2 + displayplanet + "<br>"
      
    }
  }
  // output all intigers between min and max
  document.getElementById('display-stars').innerHTML = display 
  document.getElementById('display-planets').innerHTML = display2

}
 
