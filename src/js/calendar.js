import Calendar from './calendarClass.js';
import ExternalServices from './externalServices.js';

const services = new ExternalServices();


function displayCurrentMonth(){
    let today = new Date()
    let calendar = new Calendar(today.getFullYear(), today.getMonth(), today.getDate(), today.getDay());
    calendar.init();
    
    if (window.location.pathname === '/view/calendar.html'){
        calendar.displayCalendar();
    }
    if (window.location.pathname === '/view/week.html'){
        calendar.populateWeekView();
    }
}


async function getTasks(){
    const userID = localStorage.getItem('userID');
    // console.log(userID);
    const res = await services.getDataByUser(userID)
    console.log(res)

}

displayCurrentMonth();
getTasks();