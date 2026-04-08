export interface IBooking {
    name: string;
    email: string;
    phonenumber?: string;
    type: string;
    maxPersons: number;
    startDate: Date;
    endDate:Date
    date: string;
}
