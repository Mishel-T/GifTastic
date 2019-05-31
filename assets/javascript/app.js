//create initial array of moods
var moods = ["sad", "angry", "happy", "confused", "calm", "excited"]

//create display function to display gifs in html - will call this function later for when a mood button is clicked
function displayGIF () {
    //clear gif div necessary? will see once I can get gifs to show - yep necessary
    $("#gifs-view").empty()

    //make sure I'm pulling the q from the data attribute
    var mood = $(this).attr("data-word")
    console.log(mood)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + mood + "&api_key=k8hbtr9mNHZjp3GDaC6g0DADF0rSouaD&limit=10"
    //create ajax call with a limit of 10
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
    //for loope to iterate through each gif in the response array
    for (var j= 0; j<response.data.length; j++) {

    //create new div to store gif and rating
    var newDiv = $("<div>");
    
    //create new div to store gif itself
     var gifImg = $("<img>");

    //create an element to display the rating
    newDiv.append("<p>Rating: " + response.data[j].rating + "</p>")

    //pull gif attributes to use on click events on gifImg
    gifImg.attr({
        "src": response.data[j].images.original_still.url,
        "data-still": response.data[j].images.original_still.url,
        "data-animate": response.data[j].images.original.url,
        "data-state": "still",
        "class": "gif"
    });

    newDiv.append(gifImg);

    //append gif and rating to #gifs-view
    $("#gifs-view").append(newDiv)
};
    });
};

//create function to dynamically render buttons
function renderButtons() {


    //empty buttons-view div
    $("#buttons-view").empty()

    //for loop to iterate through array of moods
    for (var i=0; i<moods.length; i++) {

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
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    console.log("add-gif click event working")
    
    //create a variable that pulls value from input box 
    var newMood = $("#keyword-input").val().trim();
    console.log(newMood)

    //push value to moods array
    moods.push(newMood);

    //call render buttons function to create button for new mood
    renderButtons();


})


// Calling the renderButtons function to display the intial buttons
renderButtons();
//call display function with on click event on mood buttons (class of mood defined in render buttons fx)
$(document).on("click", ".mood", displayGIF);

