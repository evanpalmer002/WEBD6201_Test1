/*
    Student Name  : Evan Palmer
    StudentID     : 100699087  
    Date Completed: 1/28/2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {


        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       //1 A
        let largeButton = document.getElementById("largeButton"); //Create a reference to the largeButton element
       largeButton.textContent = "Learn More"; //Change the textContent attribute to Learn More

       //1 B
       let h3 = document.createElement("h3"); //Create a new element of the type h3
       h3.textContent = "Evan Palmer 100699087"; //Change the text content of the new element to Evan Palmer 100699087
       contentArea.insertBefore(h3, largeButton); //Insert the new h3 tag

       //1 C
       let paragraph = document.getElementById("firstParagraph"); //Create a reference to the firstParagraph element
       paragraph.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods."
       //^ Change the text content of the paragraph tag
       
       //1 D
       paragraph.style.display = "none"; //Hide the paragraph element

       //2
       //A
       largeButton.onclick = function() //Create the on click event
       {
        if(paragraph.style.display == "block") //If the element is showing
        {
            largeButton.textContent = "Learn More"; //Change the attributes accordingly
            paragraph.style.display = "none";
        }
        else //Else if the element is hidden
        {
            largeButton.textContent = "Hide Details"; //Change the attributes accordingly
            paragraph.style.display = "block";
        }
       }
    }



    window.addEventListener("load", Start);
})(app || (app = {}));

