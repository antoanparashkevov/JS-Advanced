function sortTheArrayBy2Criteria(array) {
    array.sort(sorting)

    function sorting(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b)
        }
        return a.length - b.length
    }

    return array.join('\n')
}

console.log(sortTheArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
))
