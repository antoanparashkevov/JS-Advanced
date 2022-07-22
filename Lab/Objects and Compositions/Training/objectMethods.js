function solve() {
//methods === functions
    //methods are stored as a property into the object
    let person = {
        firstName: "Antoan",
        secondName: "Parashkevov",
        sayHi() {
            console.log('Hello, Tony')
        }
        //like this, we can create a libraries, like the embedded and static one named "Math".
    }
    person.sayHi()
}

solve()


function solve2() {
    let count = 5;
    let parser = {
        increasing() {
            count++
        },
        decreasing() {
            count -= 2
        }
    }
    // let command = 'increasing'//6
    // parser[command]()
    // parser['decreasing']()//6-2=4
    let action = parser['increasing']
    console.log(count)
    console.log(typeof action)
    if (typeof action === 'function') {
        action()
    } else {
        //default case ...
    }
}

solve2()
