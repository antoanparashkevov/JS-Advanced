function attachEventsListeners() {
    console.log('TODO:...');
    let button = document.getElementById('convert')
    button.addEventListener('click', onClick)

    let metricUnits = {
        //ex: 1 km -> metres ? 1000
        //ex: 1 m -> metres ? 1
        //ex: 1cm -> metres ? 0.01
        //ex: 1mm -> metres ? 0.1 * 0.01 = 0.001
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,//almost 1 meter
        ft: 0.3048,
        in: 0.0254//because 1 inch = 2.54 cm, 2.54 / 100 => 0.0254
    }

    function onClick() {
        //on every option tag we have an attribute named value
        let fromValue = document.getElementById('inputUnits').value
        let toValue = document.getElementById('outputUnits').value
        // console.log(fromValue, toValue)

        let enteredValue = +document.getElementById('inputDistance').value//1 km
        let outputDistanceElement = document.getElementById('outputDistance')


        //ex from km to meters
        let enteredValueInMeters = enteredValue * metricUnits[fromValue]//1 km * 1000 = 1000 m
        let convertedValue = enteredValueInMeters / metricUnits[toValue]//1000 / 1 = 1000 m

        outputDistanceElement.value = convertedValue

    }

}
