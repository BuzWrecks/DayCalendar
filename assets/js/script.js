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
                        $(this).addClass("future");
                    } else if (currentHour >= timeBlock) {
                        $(this).addClass("past");
                    }
                    });

    });

// set to local storage
    $(".saveBtn").click(function (event) {
    event.preventDefault();
    
    var time = $(this).parent().attr("id").split("-")[1];
    var value = $(this).siblings("#userInput").val();
    localStorage.setItem(time, value);
  });

// retrieve from local storage  --  I know I should be using a .class here for the #userInput, but I was unable to make the code work with a class, but it works with the id. 

  $("#hour-09 #userInput").val(localStorage.getItem("09"));
  $("#hour-10 #userInput").val(localStorage.getItem("10"));
  $("#hour-11 #userInput").val(localStorage.getItem("11"));
  $("#hour-12 #userInput").val(localStorage.getItem("12"));
  $("#hour-13 #userInput").val(localStorage.getItem("13"));
  $("#hour-14 #userInput").val(localStorage.getItem("14"));
  $("#hour-15 #userInput").val(localStorage.getItem("15"));
  $("#hour-16 #userInput").val(localStorage.getItem("16"));
  $("#hour-17 #userInput").val(localStorage.getItem("17"));
  
})
