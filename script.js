/*
Flipping the Pyramid
Developing Critical Thinking Skills with GenAI

script.js
*/


// ------------------------------------
// Begin Exploring Button
// ------------------------------------


const beginButton = document.getElementById("beginBtn");

const content = document.getElementById("content");


beginButton.addEventListener("click", function () {


    content.classList.remove("hidden");


    // Scroll smoothly to content

    content.scrollIntoView({

        behavior: "smooth"

    });


});



// ------------------------------------
// Bloom Assignment Accordion Cards
// ------------------------------------


const cardHeaders = document.querySelectorAll(".card-header");



cardHeaders.forEach(function(header) {


    header.addEventListener("click", function() {


        const currentCard =
            this.parentElement;


        const currentContent =
            currentCard.querySelector(".card-content");



        // Close all other cards

        document.querySelectorAll(".card-content")
            .forEach(function(section) {


                if (section !== currentContent) {


                    section.classList.remove("active");


                }


            });



        // Toggle selected card

        currentContent.classList.toggle("active");



    });


});



// ------------------------------------
// Reset behavior
// ------------------------------------

// The app intentionally does not save progress.
// A browser refresh returns the page to its
// original state automatically.
//
// No localStorage
// No cookies
// No user tracking


window.addEventListener("load", function() {


    // Ensure all cards start closed

    document.querySelectorAll(".card-content")
        .forEach(function(section) {


            section.classList.remove("active");


        });



    // Ensure content begins hidden

    content.classList.add("hidden");


});
