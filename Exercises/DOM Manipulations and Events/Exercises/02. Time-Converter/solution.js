function attachEventsListeners() {

    console.log('TODO:...');


    let daysBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hoursBtn')
    let minutesBtn = document.getElementById('minutesBtn')
    let secondsBtn = document.getElementById('secondsBtn')

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    daysBtn.addEventListener('click', onConvert)
    hoursBtn.addEventListener('click', onConvert)
    minutesBtn.addEventListener('click', onConvert)
    secondsBtn.addEventListener('click', onConvert)

    let proportions = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convertTime(value, unit) {
        let days = value / proportions[unit]
        //ex: value = 24, unit = hours => 24/24 = 1 day
        //ex: value = 2880, unit = minutes => 2880/1440 = 2 days
        return {
            days: days,
            hours: days * proportions['hours'],
            minutes: days * proportions['minutes'],
            seconds: days * proportions['seconds']
        }
    }


    function onConvert(event) {
        let inputField = event.target.parentElement.querySelector('input[type="text"]')
        //we gone step further to the parent element, and searching a element which attribute is equal to type='text'
        // console.log(inputField);
        let time = convertTime(Number(inputField.value), inputField.id)//time variable now is object
        // console.log(time)//input.id is equal to the value from id property

        daysInput.value = time.days
        hoursInput.value = time.hours
        minutesInput.value = time.minutes
        secondsInput.value = time.seconds
    }

}
