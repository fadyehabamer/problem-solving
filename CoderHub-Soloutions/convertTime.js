function convertTime(time) {
    var timeArray = time.split(":");
    var hour = timeArray[0];
    var minute = timeArray[1].split(' ');
    var ampm = minute[1];
    var newHour = 0;
    // console.log(timeArray , minute , ampm);
    if (ampm) {
        if (ampm == "am") {
            if (hour == 12) {
                newHour = 0;
            } else {
                newHour = parseInt(hour);
            }

            return (newHour + ":" + minute[0]).replace(',', ' ');
        } else if (ampm == 'pm') {
            if (hour == 12) {
                newHour = 12;
            } else {
                newHour = parseInt(hour) + 12;
            }
            return (newHour + ":" + minute[0]).replace(',', ' ');
        }
    } else {
        if (hour >= 12) {
            newHour = parseInt(hour) - 12;
            return (newHour + ":" + minute[0]).replace(',', ' ') + ' pm';
        } else {
            return (hour + ":" + minute[0]).replace(',', ' ') + ' am';
        }
    }




}

console.log(convertTime('21:00'));