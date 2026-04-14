import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL, PORT } from "../../../environment";
import { error } from "console";


@Injectable()
export class BookingService {
    route: string = "booking";

    constructor(
        private http: HttpClient
    ){

    }


    createBooking(data: any){
        const httpheader = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        
        return this.http.post(`${URL}:${PORT}/booking`, data, {headers: httpheader})
    }



    set _FieldError(error: string) {
        error = error
    }

    get FieldError() {
        return this._FieldError
    }
}