function tickets(arrayOfTickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    const resultArray = []
    for (let ticketInfo of arrayOfTickets) {
        let [dest, price, status] = ticketInfo.split('|');
        price = +price
        const oneTicket = new Ticket(dest, price, status)
        resultArray.push(oneTicket)

    }
    // console.log(resultArray)
    return resultArray.sort((a, b) => {
        if (typeof a[criteria] === 'number') {
            return a[criteria] - b[criteria]
        } else {
            return a[criteria].localeCompare(b[criteria])
        }
    })
}

console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))
