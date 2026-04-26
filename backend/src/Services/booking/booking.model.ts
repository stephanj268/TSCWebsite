export interface IBooking {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber?: string;
    tourType: string;
    maxPersons: number;
    serviceType: string;
    taxiType: string;
    startDate: Date;
    endDate:Date;
    createdAt: Date;

    
}
