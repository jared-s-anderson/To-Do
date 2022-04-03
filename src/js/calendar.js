import Calendar from './calendarClass.js';


function displayCurrentMonth(){
    let today = new Date()
    let calendar = new Calendar(today.getFullYear(), today.getMonth());
    calendar.init();
}

displayCurrentMonth();