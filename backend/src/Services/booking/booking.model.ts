export interface IBooking {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber?: string;
    tourType: string;
    maxPersons: number;
    startDate: Date;
    endDate:Date
    createdAt: Date;

    
}
