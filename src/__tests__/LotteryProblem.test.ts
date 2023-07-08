import { ticket, lottery_problem } from "../LotteryProblem";


test("test if it works", () => {
        const ticket1: ticket = {
            ticket: 0,
            birthday: "3102",
        }

        const ticket2: ticket = {
            ticket: 53,
            birthday: "3103",
        }

        let tickets = [ticket1, ticket1, ticket2];
        const cash_prize = 1_000_000
        let result = lottery_problem(tickets, cash_prize);
        expect(result[0][0].ticket).toBe(53);
        expect(result[0][0].birthday).toBe("3103");

})

function pad(num:number): string{
    return num < 10 ? "0" + num.toString() : num.toString()
};

function random_birthday(): string {
    let list2 = [4, 6, 9, 11]
    let random_month = ~~(Math.random() * 12 + 1)
    let i = 0;
    if (list2.includes(random_month)) {
        i = 1;
    } else if (random_month == 2) {
        i = 3;
    }
    let random_day = ~~(Math.random() * 31 + 1 - i);
    return pad(random_month) + pad(random_day);
}

function generate_tickets(amount: number):ticket[] {
    let tickets: ticket[] = [];
    for(let i = 0; i < amount; i++) {
        const ticket: ticket = {
            ticket: i,
            birthday: random_birthday()
        }

        tickets.push(ticket);
    }
    return tickets;
}
