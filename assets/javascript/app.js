//create initial array of moods
var moods = ["sad", "angry", "happy", "confused", "calm", "excited"]

//create display function to display gifs in html - will call this function later for when a mood button is clicked

    //create ajax call with a limit of 10

    //create a variable to store the gif itself (embed url?)

    //create an element to display the rating

    //create a variable to store the rating

    //create an element to display the rating 

    //append gif and rating to #gifs-view

//create function to dynamically render buttons
function renderButtons() {


    //empty buttons-view div
    $("#buttons-view").empty()

    //for loop to iterate through array of movies
    for (i=0; i<moods.length; i++) {

        //function to create buttons
        var moodBtn = $("<button>");
        //add class of mood - class will be used to create click event later to generate gifs
        moodBtn.addClass("mood");
        //add data attribute to pull the q words later
        moodBtn.attr("data-word", moods[i]);
        //att the text of the mood to the button
        $(moodBtn).text(moods[i])
        $("#buttons-view").append(moodBtn);

        };
    };

//create on click event for when a new mood is submitted
$("#add-gif").click(function(event) {
    event.preventDefault();
    
    //create a variable that pulls value from input box

    //push value to moods array

    //call render buttons function to create button for new mood


})

//call display function with on click even on mood buttons (class of mood defined in render buttons fx)

// Calling the renderButtons function to display the intial buttons
renderButtons();

