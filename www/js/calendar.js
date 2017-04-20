$(document).ready(function() {
  $('#calendar').fullCalendar({
    defaultDate: '2017-04-20',
    editable: true,
    eventLimit: true // allow "more" link when too many events
  })
});
