export default class Calendar {
    constructor(year, month){
        this.year = year;
        this.month = month;
        this.sun = [];
        this.mon = [];
        this.tue = [];
        this.wed = [];
        this.thu = [];
        this.fri = [];
        this.sat = [];
        this.aMonth = [this.sun, this.mon, this.tue, this.wed, this.thu, this.fri, this.sat];
        this.firstWeek = [];
        this.secondWeek = [];
        this.thirdWeek = [];
        this.fourthWeek = [];
        this.fifthWeek = [];
        this.sixthWeek = [];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    init(){
        this.firstDayCurrentMonth  = this.getFirstDay(this.year, this.month);
        this.lastDateCurrentMonth = this.getLastDateCurrent(this.year, this.month);
        this.lastDatePrevMonth = this.getLastDatePrev(this.year, this.month);
        this.lastSunDateOfPrevMonth = this.getLastSunDateOfPrevMonth(this.year, this.month);
        this.lastDayPrevMonth = this.getLastDayPrev(this.year, this.month);
        
        if (this.lastDayPrevMonth === 6){
            this.populateCalWhenStartOnSun();
        } else {
            this.populateCalWhenNotStartOnSun();
        }

        this.displayCalendar();
        
    }

    getFirstDay(year, month){
        //this gets the first weekday of the current month
        //returns an int (Sunday is 0)
        return new Date(year, month, 1).getDay();
    }

    getLastDateCurrent(year, month){
        //this gets the last date of the current month
        return new Date(year, month + 1, 0).getDate();
    }

    getLastDatePrev(year, month){
        //this gets the last date of the previous month so we can fill the empty slots in the calendar before the start of the current month if the current month doesn't start on a Sunday
        return new Date(year, month, 0).getDate();
    }

    getLastDayPrev(year, month){
        //this gets the last date of the previous month so we can fill the empty slots in the calendar before the start of the current month if the current month doesn't start on a Sunday
        return new Date(year, month, 0).getDay();
    }

    getLastSunDateOfPrevMonth(year, month){
        let lastSunDate = new Date(year, month, 0);
        let diff = lastSunDate.getDay();
        lastSunDate.setDate(lastSunDate.getDate() - diff);
        
        return lastSunDate;
    }

    populateCalWhenStartOnSun(){
        let date = 1;
        for (let i = 0; i < 7; i++){
            this.firstWeek[i] = date;
            date++;
        }

        for (let i = 0; i < 7; i++) {
            this.secondWeek[i] = date;
            date++;
        }

        for (let i = 0; i < 7; i++){
            this.thirdWeek[i] = date;
            date++;
        }
        
        for (let i = 0; i < 7; i++){
            this.fourthWeek[i] = date;
            date++;
        }

        for (let i = 0; i < 7; i++){
            this.fifthWeek[i] = date;
            date++;
            if (date > this.lastDateCurrentMonth){
                date = 1;
            }
        }

        for (let i = 0; i < this.firstWeek.length; i++){
            this.aMonth[i][0] = this.firstWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][1] = this.secondWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][2] = this.thirdWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][3] = this.fourthWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][4] = this.fifthWeek[i];
        }

        

        return this.aMonth;

    }

    populateCalWhenNotStartOnSun(){
        let diff = this.lastDayPrevMonth;

        let date = this.lastSunDateOfPrevMonth.getDate();
        for (let i = 0; i <= diff; i++){
            this.firstWeek[i] = date;
            date++;
        }

        date = 1;
        for (let i = diff + 1; i < 7; i++){
            this.firstWeek[i] = date;
            date++;
        }

        for (let i = 0; i < 7; i++) {
            this.secondWeek[i] = date;
            date++;
        }

        for (let i = 0; i < 7; i++){
            this.thirdWeek[i] = date;
            date++;
        }
        
        for (let i = 0; i < 7; i++){
            this.fourthWeek[i] = date;
            date++;
        }

        for (let i = 0; i < 7; i++){
            this.fifthWeek[i] = date;
            date++;
            if (date > this.lastDateCurrentMonth){
                date = 1;
            }
        }

        for (let i = 0; i < 7; i++){
            this.sixthWeek[i] = date;
            date++;
            if (date > this.lastDateCurrentMonth){
                date = 1;
            }
        }
        

        for (let i = 0; i < this.firstWeek.length; i++){
            this.aMonth[i][0] = this.firstWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][1] = this.secondWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][2] = this.thirdWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][3] = this.fourthWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][4] = this.fifthWeek[i];
        }

        for (let i = 0; i < this.secondWeek.length; i++){
            this.aMonth[i][5] = this.sixthWeek[i];
        }

        return this.aMonth;
    }

    displayCalendar(){
        document.querySelector('#current-month-year').innerHTML = `${this.months[this.month]} ${this.year}`;


        const calendarElement = document.querySelector('#calendar');
        const month = document.createElement('div');
        const monthClassList = month.classList;
        monthClassList.add('month');

        for (let i = 0; i < 7; i++){
            const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const weekDays = document.createElement('li');
            const weekDaysClassList = weekDays.classList;
            weekDaysClassList.add('weekDaysHeader');
            const daysHeader = document.createElement('span');
            daysHeader.innerHTML = weekDaysArr[i];

            weekDays.appendChild(daysHeader);
            month.appendChild(weekDays);
        }
        


        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            //individDayClassList.add('day');

            if (this.aMonth[i][0] > 7){
                individDayClassList.add('prevMonthDay');
            } else {
                individDayClassList.add('day');
            }

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][0];

            individDay.appendChild(dayOfMonthElement);
            
            month.appendChild(individDay);
        }
        
        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][1];

            individDay.appendChild(dayOfMonthElement);
            
            month.appendChild(individDay);
        }
        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][2];

            individDay.appendChild(dayOfMonthElement);
            
            month.appendChild(individDay);
        }

        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][3];

            individDay.appendChild(dayOfMonthElement);
            
            month.appendChild(individDay);
        }
        
        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][4];

            individDay.appendChild(dayOfMonthElement);
            
            month.appendChild(individDay);
        }
        

        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            //individDayClassList.add('day');

            if (this.aMonth[1][5] < 28){
                individDayClassList.add('nextMonthDay');
            } else {
                individDayClassList.add('day');
            }

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][5];

            individDay.appendChild(dayOfMonthElement);
            
            month.appendChild(individDay);
        }
        calendarElement.appendChild(month);

    }

}