
export class Card {
    firstName: String;
        lastname: string;
        votes: number;
    constructor(
        firstName: String,
        lastname: string,
        votes: number
    ){
        this.firstName = firstName;
        this.lastname = lastname;
        this.votes = votes; 

    }
    get name(): string{
        return this.firstName+ ' ' +this.lastname;
    }
}
