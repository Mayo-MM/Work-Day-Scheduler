// Using library Moment.js, we can manage time

// Define current time
const currentDate = moment().format('dddd, MMM Do YYYY');
//Display current time
$("#currentDay").html(currentDate);

$(document).ready(function () {
   
    function timeTracker() {
        // Current number of hours
        let currenTime = moment().hour();

        // Evaluate every hour block
        $(".time-block").each(function () {
            let blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes to change color
            if (blockTime < currenTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currenTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    $(".saveBtn").click(function (event) {
        event.preventDefault();
        // For every value inside the task class
        let value = $(this).siblings(".task").val();
        // And the time where that value is
        let time = $(this).parent().attr("id");
        // Save value to local storage
        localStorage.setItem(time, value);
    });

    // Then bring the saved values if any
    $("#hour8 .task").val(localStorage.getItem("hour8"));
    $("#hour9 .task").val(localStorage.getItem("hour9"));
    $("#hour10 .task").val(localStorage.getItem("hour10"));
    $("#hour11 .task").val(localStorage.getItem("hour11"));
    $("#hour12 .task").val(localStorage.getItem("hour12"));
    $("#hour13 .task").val(localStorage.getItem("hour13"));
    $("#hour14 .task").val(localStorage.getItem("hour14"));
    $("#hour15 .task").val(localStorage.getItem("hour15"));
    $("#hour16 .task").val(localStorage.getItem("hour16"));
    $("#hour17 .task").val(localStorage.getItem("hour17"));

    timeTracker();
})