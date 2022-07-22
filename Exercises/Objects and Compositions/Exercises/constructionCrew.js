function constructionCrew(person) {
    if (person.dizziness) {
        person.levelOfHydrated += 0.1 * person.weight * person.experience
        person.dizziness = false;
    }
    return person
}

console.log(constructionCrew({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
))
