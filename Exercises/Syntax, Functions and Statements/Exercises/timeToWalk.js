function timeToWalk(steps, footPrintInMeters, speedKmH) {
//   // // let fullDistanceMeters = steps * footPrintInMeters;
    //  let restMinutes = Math.floor(fullDistanceMeters / 500)
    //  // let speedMetersSeconds = speedKmH / 3.6;
    //  console.log(fullDistanceMeters)
    //  let speedMetersPerHour = speedKmH * 1000;
    //  console.log(speedMetersPerHour)
    //  let speedMetersPerSecond = speedMetersPerHour / 3600;
    //  console.log(speedMetersPerSecond);
    //  let timeInSeconds = fullDistanceMeters * speedMetersPerSecond
    //  console.log(timeInSeconds)
    //  let minutes = 0;
    //  while(timeInSeconds >=60){
    //      minutes++
    //      timeInSeconds-=60;
    //  }
    //  console.log(minutes)
    //  console.log(timeInSeconds)
    let distancePerMeters = footPrintInMeters * steps;
    let rest = Math.floor(distancePerMeters / 500);
    let speedMetersPerSecond = speedKmH / 3.6;
    // console.log(speedMetersPerSecond)
    let timeInSeconds = distancePerMeters / speedMetersPerSecond;
    // console.log(timeInSeconds)
    let timeMin = Math.floor(timeInSeconds / 60);
    // console.log(timeMin)
    let timeHour = Math.floor(timeMin / 60)
    // console.log(timeHour)
    let timeSec = Math.round(timeInSeconds - timeMin * 60);//because one minute has 60 seconds.
    // console.log(timeSec)
    console.log((timeHour <= 9 ? '0' : '') + timeHour + ":" + (timeMin+rest <= 9 ? "0" : '') + (timeMin+rest) + ":"+(timeSec <= 9 ? "0" : '') + timeSec)


}

timeToWalk(4000, 0.60, 5)
