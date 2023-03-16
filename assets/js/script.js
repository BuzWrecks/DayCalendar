// Document ready function - hold all code until load
$(document).ready(function () {
// Display current time and date, updating once per second to ensure minute update is accurate.
    $(function () {
        function displayTime() {
            let rightNow = dayjs().format('dddd, DD MMMM YYYY [at] HH:mm');
            $('#time-display').text(rightNow);
    // Timer interval for displayTime update        
            let timerInterval = setInterval(function() {
                displayTime();
            }, 1000)};
            displayTime();
    // Clear Calendar button - clears fields and clears local storage
            $("#clearCalendarBtn").click(function (event) {
                event.preventDefault;
                $("textarea").val("");
                localStorage.clear();
            });
    // define current hour using dayjs(), compares timeBlock with current hour
                let currentHour = dayjs().format("HH");
                $(".timeBlock").each(function () {
                    var timeBlock = $(this).attr("id").split("-")[1];
    // if time block is equal to current hour, add "present", if else, past, if else, future               
                    if (currentHour === timeBlock) {
                        $(this).addClass("present");
                    } else if (currentHour <= timeBlock) {
                        $(this).removeClass("present");
                        $(this).addClass("future");
                    } else if (currentHour >= timeBlock) {
                        $(this).removeClass("future");
                        $(this).removeClass("present");
                        $(this).addClass("past");
                    }
                    });

    });
  
})

var textArea = window.localStorage.textArea(0);

localstorage
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
   
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?