export interface IBooking {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber?: string;
    tourType?: string;
    taxiType?: string;
    maxPersons: number;
    serviceType: string;
    startDate: Date;
    endDate:Date;
    createdAt: Date;

    
}
