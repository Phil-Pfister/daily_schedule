


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));

var rootDiv = $('#root-div');
var outerDiv = $('<div>');
var hoursEl = $('<div>');
var textArea = $('<textarea>');
var addButton = $('<button>');
var btnIcon = $('<i>');
var outerDivId;


// var hours = [
//   '9AM',
//   '10AM',
//   '11AM',
//   '12PM',
//   '1PM',
//   '2PM',
//   '3PM',
//   '4PM',
//   '5PM',
// ];

var hours = [
  dayjs().hour(7),
  dayjs().hour(8),
  dayjs().hour(9),
  dayjs().hour(10),
  dayjs().hour(11),
  dayjs().hour(12),
  dayjs().hour(13),
  dayjs().hour(14),
  dayjs().hour(15),
  dayjs().hour(16),
  dayjs().hour(17),
  dayjs().hour(18),
  dayjs().hour(19),
  dayjs().hour(20),
]
for (var i = 0; i < hours.length; i++) {
var outerDiv = $('<div>');
var hoursEl = $('<div>');
var textArea = $('<textarea>');
var addButton = $('<button>');
var btnIcon = $('<i>');
  
  outerDiv.addClass('row time-block');
  rootDiv.append(outerDiv);
  outerDiv.attr("id", 'hour-' + hours[i].format('ha'));
  

  
  hoursEl.text(hours[i].format('h a'));
  hoursEl.addClass('col-2 col-md-1 hour text-center py-3');
  outerDiv.append(hoursEl);


textArea.addClass('col-8 col-md-10 description');
textArea.attr('rows', '3');
outerDiv.append(textArea);


addButton.addClass('btn saveBtn col-2 col-md-1');
outerDiv.append(addButton);


btnIcon.addClass('fas fa-save');
addButton.append(btnIcon);
var now = dayjs().hour();
if (now < hours[i].hour()) {
  outerDiv.addClass('future');
}
else if (now === hours[i].hour()) {
  outerDiv.addClass('present');
 
}
else {
  outerDiv.addClass('past');

};
console.log(outerDiv);

}





    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  