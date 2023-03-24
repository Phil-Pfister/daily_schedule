$(function () {
  var today = dayjs();

  //creates Date header that updates to the current date
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));

if (dayjs("mm") === 00 && dayjs("ss") === 00) {
  window.location.reload();
}

var rootDiv = $('#root-div');

  // Hours variable using dayjs to create elements
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
// creates the individual elements for the HTML of the body and appends to the root
for (var i = 0; i < hours.length; i++) {
var outerDiv = $('<div>');
var hoursEl = $('<div>');
var textArea = $('<textarea>');
var addButton = $('<button>');
var btnIcon = $('<i>');
  
  // outer div that contains day part elements
outerDiv.addClass('row time-block');
rootDiv.append(outerDiv);
outerDiv.attr("id", 'hour-' + hours[i].format('ha'));
  
  // element for the hours on the left side of each daypart
hoursEl.text(hours[i].format('h a'));
hoursEl.addClass('col-2 col-md-1 hour text-center py-3');
outerDiv.append(hoursEl);

  // textarea element for updating memos
textArea.addClass('col-8 col-md-10 description');
textArea.attr('rows', '3');
textArea.attr('id', 'text' + hours[i].format('ha'));
outerDiv.append(textArea);

// button element for saving memos
addButton.addClass('btn saveBtn col-2 col-md-1');
outerDiv.append(addButton);
addButton.attr('id', 'btn' + hours[i].format('ha'));

// icon of save disk on the buttons
btnIcon.addClass('fas fa-save');
addButton.append(btnIcon);


// sets class attribute for time period: before, during or after current time
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


}


// set to local storage Credit to tutor David Elutilo for help with this
$('.saveBtn').click(function() {
  var thisButton = $(this);
  var textArea = thisButton.siblings('.description');
  var key = textArea.attr('id');
  localStorage.setItem(key, textArea.val());

  
  
});

    // retrieve from local storage
var saved7 = localStorage.getItem('text7am');
text7am.innerHTML = saved7;

var saved8 = localStorage.getItem('text8am');
text8am.innerHTML = saved8;

var saved9 = localStorage.getItem('text9am');
text9am.innerHTML = saved9;

var saved10 = localStorage.getItem('text10am');
text10am.innerHTML = saved10;

var saved11 = localStorage.getItem('text11am');
text11am.innerHTML = saved11;

var saved12 = localStorage.getItem('text12pm');
text12pm.innerHTML = saved12;

var saved1 = localStorage.getItem('text1pm');
text1pm.innerHTML = saved1;

var saved2 = localStorage.getItem('text2pm');
text2pm.innerHTML = saved2;

var saved3 = localStorage.getItem('text3pm');
text3pm.innerHTML = saved3;

var saved4 = localStorage.getItem('text4pm');
text4pm.innerHTML = saved4;

var saved5 = localStorage.getItem('text5pm');
text5pm.innerHTML = saved5;

var saved6 = localStorage.getItem('text6pm');
text6pm.innerHTML = saved6;

var saved7p = localStorage.getItem('text7pm');
text7pm.innerHTML = saved7p;

var saved8p = localStorage.getItem('text8pm');
text8pm.innerHTML = saved8p;


  });
  