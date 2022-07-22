function createAssemblyLine() {

    return {
        hasClima: (object) => {

            object.temp = 21
            object.tempSettings = 21;
            object.adjustTemp = function() {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            }
        },


        hasAudio: (object) => {
            {
                object.currentTrack = {
                    name: null,
                    artist: null
                };
                object.nowPlaying = function() {
                    if (this.currentTrack.name === null || this.currentTrack.artist === null) {
                        return
                    }
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`)
                }
            }
        },
        hasParktronic: (object) => {
            {
                //•	checkDistance – function, which takes a single argument distance (number) and prints a message on the console, depending on its value:
                // distance < 0.1 – "Beep! Beep! Beep!"
                // 0.1 <= distance < 0.25 – "Beep! Beep!"
                // 0.25 <= distance < 0.5 – "Beep!"
                // In any other case, print an empty string.
                object.checkDistance = (distance) => {
                    if (distance < 0.1) {
                        console.log("Beep! Beep! Beep!")
                    } else if (distance >= 0.1 && distance < 0.25) {
                        console.log("Beep! Beep!");
                    } else if (distance >= 0.25 && distance < 0.5) {
                        console.log("Beep!")
                    } else {
                        console.log([])
                    }

                }
            }
        }
    }
}

const assemblyLine = createAssemblyLine();//now this is an object of objects
// console.log(assemblyLine)

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
console.log(myCar)
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
