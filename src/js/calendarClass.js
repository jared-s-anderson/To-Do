export default class Calendar {
    constructor(year, month, date, day){
        this.year = year;
        this.month = month;
        this.date = date;
        this.day = day;
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
        this.week = [];
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

            const addElement = document.createElement('img');
            addElement.style.height = '25px';
            addElement.style.width = '25px';
            addElement.addEventListener('mouseover', () => {
                addElement.style.transitionDuration = '1s';
                addElement.style.transform = 'rotate(-90deg)'
            });
            addElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });
            addElement.src = '../icons/plus.png';

            const minusElement = document.createElement('img');
            minusElement.style.height = '25px';
            minusElement.style.width = '25px';

            minusElement.addEventListener('mouseover', () => {
                minusElement.style.transitionDuration = '1s';
                minusElement.style.transform = 'rotate(-90deg)'
            });
            minusElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });

            minusElement.src = '../icons/minus.png';


            individDay.appendChild(dayOfMonthElement);
            individDay.appendChild(addElement);
            individDay.appendChild(minusElement);
            month.appendChild(individDay);
        }
        
        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][1];

            const addElement = document.createElement('img');
            addElement.style.height = '25px';
            addElement.style.width = '25px';
            addElement.addEventListener('mouseover', () => {
                addElement.style.transitionDuration = '1s';
                addElement.style.transform = 'rotate(-90deg)'
            });
            addElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });
            addElement.src = '../icons/plus.png';

            const minusElement = document.createElement('img');
            minusElement.style.height = '25px';
            minusElement.style.width = '25px';

            minusElement.addEventListener('mouseover', () => {
                minusElement.style.transitionDuration = '1s';
                minusElement.style.transform = 'rotate(-90deg)'
            });
            minusElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });

            minusElement.src = '../icons/minus.png';

            individDay.appendChild(dayOfMonthElement);
            individDay.appendChild(addElement);
            individDay.appendChild(minusElement);
            month.appendChild(individDay);
        }
        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][2];

            const addElement = document.createElement('img');
            addElement.style.height = '25px';
            addElement.style.width = '25px';
            addElement.addEventListener('mouseover', () => {
                addElement.style.transitionDuration = '1s';
                addElement.style.transform = 'rotate(-90deg)'
            });
            addElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });
            addElement.src = '../icons/plus.png';

            const minusElement = document.createElement('img');
            minusElement.style.height = '25px';
            minusElement.style.width = '25px';

            minusElement.addEventListener('mouseover', () => {
                minusElement.style.transitionDuration = '1s';
                minusElement.style.transform = 'rotate(-90deg)'
            });
            minusElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });

            minusElement.src = '../icons/minus.png';

            individDay.appendChild(dayOfMonthElement);
            individDay.appendChild(addElement);
            individDay.appendChild(minusElement);
            month.appendChild(individDay);
        }

        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][3];

            const addElement = document.createElement('img');
            addElement.style.height = '25px';
            addElement.style.width = '25px';
            addElement.addEventListener('mouseover', () => {
                addElement.style.transitionDuration = '1s';
                addElement.style.transform = 'rotate(-90deg)'
            });
            addElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });
            addElement.src = '../icons/plus.png';

            const minusElement = document.createElement('img');
            minusElement.style.height = '25px';
            minusElement.style.width = '25px';

            minusElement.addEventListener('mouseover', () => {
                minusElement.style.transitionDuration = '1s';
                minusElement.style.transform = 'rotate(-90deg)'
            });
            minusElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });

            minusElement.src = '../icons/minus.png';

            individDay.appendChild(dayOfMonthElement);
            individDay.appendChild(addElement);
            individDay.appendChild(minusElement);
            month.appendChild(individDay);
        }
        
        
        for (let i = 0; i < 7; i++){
            const individDay = document.createElement('li');
            const individDayClassList = individDay.classList;
            individDayClassList.add('day');

            const dayOfMonthElement = document.createElement('span');
            dayOfMonthElement.innerHTML = this.aMonth[i][4];

            const addElement = document.createElement('img');
            addElement.style.height = '25px';
            addElement.style.width = '25px';
            addElement.addEventListener('mouseover', () => {
                addElement.style.transitionDuration = '1s';
                addElement.style.transform = 'rotate(-90deg)'
            });
            addElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });
            addElement.src = '../icons/plus.png';

            const minusElement = document.createElement('img');
            minusElement.style.height = '25px';
            minusElement.style.width = '25px';

            minusElement.addEventListener('mouseover', () => {
                minusElement.style.transitionDuration = '1s';
                minusElement.style.transform = 'rotate(-90deg)'
            });
            minusElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });

            minusElement.src = '../icons/minus.png';

            individDay.appendChild(dayOfMonthElement);
            individDay.appendChild(addElement);
            individDay.appendChild(minusElement);
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

            const addElement = document.createElement('img');
            addElement.style.height = '25px';
            addElement.style.width = '25px';
            addElement.addEventListener('mouseover', () => {
                addElement.style.transitionDuration = '1s';
                addElement.style.transform = 'rotate(-90deg)'
            });
            addElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });
            addElement.src = '../icons/plus.png';

            const minusElement = document.createElement('img');
            minusElement.style.height = '25px';
            minusElement.style.width = '25px';

            minusElement.addEventListener('mouseover', () => {
                minusElement.style.transitionDuration = '1s';
                minusElement.style.transform = 'rotate(-90deg)'
            });
            minusElement.addEventListener('click', () => {
                window.location.href = '../view/to-do.html';
            });

            minusElement.src = '../icons/minus.png';

            individDay.appendChild(dayOfMonthElement);
            individDay.appendChild(addElement);
            individDay.appendChild(minusElement);
            month.appendChild(individDay);
        }
        console.log(month)
        calendarElement.appendChild(month);

    }

    populateWeekView(){
        document.querySelector('#current-month-year').innerHTML = `${this.months[this.month]} ${this.year}`;


        const weekElement = document.querySelector('#week');
        const week = document.createElement('div');
        const weekClassList = week.classList;
        weekClassList.add('week');

        console.log(this.aMonth)

        console.log(this.date)

        for (let i = 0; i < 7; i++){
            const weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const weekDays = document.createElement('li');
            const weekDaysClassList = weekDays.classList;
            weekDaysClassList.add('weekDaysHeader');
            const daysHeader = document.createElement('span');
            daysHeader.innerHTML = weekDaysArr[i];

            weekDays.appendChild(daysHeader);
            week.appendChild(weekDays);
        }

        if (this.firstWeek.includes(this.date)){
            for (let i = 0; i < this.firstWeek.length; i++){
                const individDay = document.createElement('li');
                const individDayClassList = individDay.classList;
                //individDayClassList.add('day');

                this.week.push(this.firstWeek[i]);

                if (this.week > 7){
                    individDayClassList.add('prevMonthDay');
                } else {
                    individDayClassList.add('day');
                }

                const dayOfMonthElement = document.createElement('span');
                dayOfMonthElement.innerHTML = this.week[i];

                const addElement = document.createElement('img');
                addElement.style.height = '25px';
                addElement.style.width = '25px';
                addElement.addEventListener('mouseover', () => {
                    addElement.style.transitionDuration = '1s';
                    addElement.style.transform = 'rotate(-90deg)'
                });
                addElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
                addElement.src = '../icons/plus.png';

                const minusElement = document.createElement('img');
                minusElement.style.height = '25px';
                minusElement.style.width = '25px';

                minusElement.addEventListener('mouseover', () => {
                    minusElement.style.transitionDuration = '1s';
                    minusElement.style.transform = 'rotate(-90deg)'
                });
                minusElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });

                minusElement.src = '../icons/minus.png';


                individDay.appendChild(dayOfMonthElement);
                individDay.appendChild(addElement);
                individDay.appendChild(minusElement);
                week.appendChild(individDay);
                
            }
            
        }

        if(this.secondWeek.includes(this.date)){
            for (let i = 0; i < 7; i++){
                const individDay = document.createElement('li');
                const individDayClassList = individDay.classList;
                individDayClassList.add('day');
    
                this.week.push(this.secondWeek[i]);
                const dayOfMonthElement = document.createElement('span');
                dayOfMonthElement.innerHTML = this.week[i];
    
                const addElement = document.createElement('img');
                addElement.style.height = '25px';
                addElement.style.width = '25px';
                addElement.addEventListener('mouseover', () => {
                    addElement.style.transitionDuration = '1s';
                    addElement.style.transform = 'rotate(-90deg)'
                });
                addElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
                addElement.src = '../icons/plus.png';
    
                const minusElement = document.createElement('img');
                minusElement.style.height = '25px';
                minusElement.style.width = '25px';
    
                minusElement.addEventListener('mouseover', () => {
                    minusElement.style.transitionDuration = '1s';
                    minusElement.style.transform = 'rotate(-90deg)'
                });
                minusElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
    
                minusElement.src = '../icons/minus.png';
    
                individDay.appendChild(dayOfMonthElement);
                individDay.appendChild(addElement);
                individDay.appendChild(minusElement);
                week.appendChild(individDay);
            }
        }

        else if(this.thirdWeek.includes(this.day)){
            for (let i = 0; i < 7; i++){
                const individDay = document.createElement('li');
                const individDayClassList = individDay.classList;
                individDayClassList.add('day');

                this.week.push(this.thirdWeek[i]);
    
                const dayOfMonthElement = document.createElement('span');
                dayOfMonthElement.innerHTML = this.week[i];
    
                const addElement = document.createElement('img');
                addElement.style.height = '25px';
                addElement.style.width = '25px';
                addElement.addEventListener('mouseover', () => {
                    addElement.style.transitionDuration = '1s';
                    addElement.style.transform = 'rotate(-90deg)'
                });
                addElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
                addElement.src = '../icons/plus.png';
    
                const minusElement = document.createElement('img');
                minusElement.style.height = '25px';
                minusElement.style.width = '25px';
    
                minusElement.addEventListener('mouseover', () => {
                    minusElement.style.transitionDuration = '1s';
                    minusElement.style.transform = 'rotate(-90deg)'
                });
                minusElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
    
                minusElement.src = '../icons/minus.png';
    
                individDay.appendChild(dayOfMonthElement);
                individDay.appendChild(addElement);
                individDay.appendChild(minusElement);
                week.appendChild(individDay);
            }
        }

        else if(this.fourthWeek.includes(this.day)){
            for (let i = 0; i < 7; i++){
                const individDay = document.createElement('li');
                const individDayClassList = individDay.classList;
                individDayClassList.add('day');

                this.week.push(this.fourthWeek[i]);
    
                const dayOfMonthElement = document.createElement('span');
                dayOfMonthElement.innerHTML = this.week[i];
    
                const addElement = document.createElement('img');
                addElement.style.height = '25px';
                addElement.style.width = '25px';
                addElement.addEventListener('mouseover', () => {
                    addElement.style.transitionDuration = '1s';
                    addElement.style.transform = 'rotate(-90deg)'
                });
                addElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
                addElement.src = '../icons/plus.png';
    
                const minusElement = document.createElement('img');
                minusElement.style.height = '25px';
                minusElement.style.width = '25px';
    
                minusElement.addEventListener('mouseover', () => {
                    minusElement.style.transitionDuration = '1s';
                    minusElement.style.transform = 'rotate(-90deg)'
                });
                minusElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
    
                minusElement.src = '../icons/minus.png';
    
                individDay.appendChild(dayOfMonthElement);
                individDay.appendChild(addElement);
                individDay.appendChild(minusElement);
                week.appendChild(individDay);
            }
        }

         else if(this.fifthWeek.includes(this.day)){
            for (let i = 0; i < 7; i++){
                const individDay = document.createElement('li');
                const individDayClassList = individDay.classList;
                individDayClassList.add('day');

                this.week.push(this.fifthWeek[i]);
    
                const dayOfMonthElement = document.createElement('span');
                dayOfMonthElement.innerHTML = this.week[i];
    
                const addElement = document.createElement('img');
                addElement.style.height = '25px';
                addElement.style.width = '25px';
                addElement.addEventListener('mouseover', () => {
                    addElement.style.transitionDuration = '1s';
                    addElement.style.transform = 'rotate(-90deg)'
                });
                addElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
                addElement.src = '../icons/plus.png';
    
                const minusElement = document.createElement('img');
                minusElement.style.height = '25px';
                minusElement.style.width = '25px';
    
                minusElement.addEventListener('mouseover', () => {
                    minusElement.style.transitionDuration = '1s';
                    minusElement.style.transform = 'rotate(-90deg)'
                });
                minusElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
    
                minusElement.src = '../icons/minus.png';
    
                individDay.appendChild(dayOfMonthElement);
                individDay.appendChild(addElement);
                individDay.appendChild(minusElement);
                week.appendChild(individDay);
            }
        }

        else if(this.sixthWeek.includes(this.day)){
            for (let i = 0; i < 7; i++){
                const individDay = document.createElement('li');
                const individDayClassList = individDay.classList;
                individDayClassList.add('day');

                this.week.push(this.sixthWeek[i]);
    
                const dayOfMonthElement = document.createElement('span');
                dayOfMonthElement.innerHTML = this.week[i];
    
                const addElement = document.createElement('img');
                addElement.style.height = '25px';
                addElement.style.width = '25px';
                addElement.addEventListener('mouseover', () => {
                    addElement.style.transitionDuration = '1s';
                    addElement.style.transform = 'rotate(-90deg)'
                });
                addElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
                addElement.src = '../icons/plus.png';
    
                const minusElement = document.createElement('img');
                minusElement.style.height = '25px';
                minusElement.style.width = '25px';
    
                minusElement.addEventListener('mouseover', () => {
                    minusElement.style.transitionDuration = '1s';
                    minusElement.style.transform = 'rotate(-90deg)'
                });
                minusElement.addEventListener('click', () => {
                    window.location.href = '../view/to-do.html';
                });
    
                minusElement.src = '../icons/minus.png';
    
                individDay.appendChild(dayOfMonthElement);
                individDay.appendChild(addElement);
                individDay.appendChild(minusElement);
                week.appendChild(individDay);
            }
        }
        weekElement.appendChild(week);
    }
}