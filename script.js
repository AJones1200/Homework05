
var today = moment();
console.log(today.format("MMM Do, YYYY, h:mmm:ss a"))
$("#currentDay").text(today.format("LLLL"));


// moment to add/remove classes when time is passed



var timeArray = [
    "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"
]
  
for (var i = 0; i < timeArray.length; i++) {
    var currentEvent = localStorage.getItem("#area" + i) || ""
    console.log(i) 
    var timeDiv = $("<div class = 'time-block row'>")
    var hourPtag = $("<p class = 'hour col-1'>").text(timeArray[i])
    var textarea = $("<textarea class = 'description col-10'>").text(currentEvent).attr("id", "area" + i)
    var saveButton = $("<button class = 'saveBtn col-1'>").text("Save").val("area" + i)
    saveButton.on("click", function(event){
        console.log(event.target.value);
    var textId = "#" + event.target.value;
    var userInput = $(textId).val()
    console.log(userInput);
    localStorage.setItem(textId, userInput)
    })
    console.log(hourPtag)


    timeDiv.append(hourPtag, textarea, saveButton)
    $(".container").append(timeDiv)}


