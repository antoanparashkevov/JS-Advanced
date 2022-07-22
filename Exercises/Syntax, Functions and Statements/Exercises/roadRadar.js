function roadRadar(kmH, area) {
//`Driving {speed} km/h in a {speed limit} zone`
//`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
    let limitKmH = 0;
    switch (area) {
        case 'city':
            limitKmH = 50;
            break;
        case 'interstate':
            limitKmH = 90;
            break;
        case 'motorway':
            limitKmH = 130;
            break
        case 'residential':
            limitKmH = 20;
            break;

    }
    if (limitKmH < kmH) {
        let status = ''
        if (kmH - limitKmH <= 20) {
            status = 'speeding';
        } else if (kmH - limitKmH <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
       return `The speed is ${kmH - limitKmH} km/h faster than the allowed speed of ${limitKmH} - ${status}`
    }else{
        return `Driving ${kmH} km/h in a ${limitKmH} zone`

    }
}

console.log(roadRadar(40, 'city'))
