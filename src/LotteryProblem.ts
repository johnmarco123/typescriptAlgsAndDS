// 1589 people
// unique birthday wins the cash prize
// given a list of tickets with birthdays find the winner
// input will look like this {"ticket": 1, "birthday": 0124}
// the order for birthday is MONTH-DAY

export type ticket = {
    ticket: number,
    birthday: string
}


// SOLUTION CODE BELOW THIS POINT
export function lottery_problem(tickets: ticket[], cash_prize: number): ticket[]{
    const tally = new Map();
    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i]
        const birthday = ticket.birthday
        if (!tally.get(birthday)) {
            tally.set(birthday, [ticket]);
        } else {
            tally.set(birthday, 'lost');
        }
    }
    const winners: ticket[] = [];
    for (let value of tally.values()) {
        if (value !== 'lost') {
            winners.push(value);
        }
    }
    const individual_prize = Math.floor(cash_prize/winners.length)
    console.log(`We have ${winners.length} winners!`)
    console.log(`They get $${individual_prize} each!`)
    return winners
}
