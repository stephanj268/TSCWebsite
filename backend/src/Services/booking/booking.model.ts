export interface IBooking {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber?: string;
    type: string;
    maxPersons: number;
    startDate: Date;
    endDate:Date
    date: string;
}
