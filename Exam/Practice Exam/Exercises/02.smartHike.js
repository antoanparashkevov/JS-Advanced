class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};//KVP peak: altitude
        this.listOfHikes = [];
        this.resources = 100;


    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak) === true) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`

    }

    hike(peak, time, difficultyLevel) {
        if (this.goals.hasOwnProperty(peak) === false) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        const needResource = time * 10
        if ((this.resources - needResource) < 0) {
            return "You don't have enough resources to complete the hike"
        }
        this.resources -= needResource;
        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        // if (criteria === 'hard') {
        //    const hardHikes =  this.listOfHikes.filter(obj=>obj.difficultyLevel === 'hard')
        //     if(hardHikes.length === 0){
        //        return `${this.username} has not done any ${criteria} hiking yet`
        //     }
        //     const bestTime = Math.min(...hardHikes.map(obj=>obj.time))
        //     const bestHike = this.listOfHikes.find(obj=>obj.time === bestTime)
        //     return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        //
        // } else if (criteria === 'easy') {
        //     const easyHikes =  this.listOfHikes.filter(obj=>obj.difficultyLevel === 'easy')
        //         if(easyHikes.length === 0){
        //             return `${this.username} has not done any ${criteria} hiking yet`
        //     }
        //     const bestTime = Math.min(...easyHikes.map(obj=>obj.time))
        //     const bestHike = this.listOfHikes.find(obj=>obj.time === bestTime)
        //     return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        // }
        if (criteria === 'hard' || criteria === 'easy') {
           let  hikesWithGivenCriteria = this.listOfHikes.filter(obj=>obj.difficultyLevel === criteria)
                if(hikesWithGivenCriteria.length === 0){
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
            const bestTime = Math.min(...hikesWithGivenCriteria.map(obj=>obj.time))
            const bestHike = hikesWithGivenCriteria.find(obj=>obj.time === bestTime)

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        } else if(criteria === 'all') {
            let result = "All hiking records:\n"
            this.listOfHikes.forEach(obj => result += `${this.username} hiked ${obj.peak} for ${obj.time} hours\n`)
            return result.trim()
        }
    }

}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));



