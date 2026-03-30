import { Injectable, EventEmitter } from "@angular/core"


export interface ITours {
    _id: number,
    name: string,
    descrition: string,
    price: number,
    opertaionTime?: Date,
    available: boolean
    thumbnail: string,
    alt: string,

}

@Injectable()
export class ToursService {

    allTours: ITours[] = [
        {
            _id: 1,
            name: 'Stingray City',
            descrition: 'sacdasc',
            price: 300,
            opertaionTime: new Date(),
            available: true,
            thumbnail: '',
            alt: 'string',

        },

        {
            _id: 2,
            name: 'Jolly Harbour',
            descrition: 'Come and enjoy a beautiful tour at the best hotel in Antigua',
            price: 240,
            opertaionTime: new Date(),
            available: true,
            thumbnail: '',
            alt: 'string',

        }, 

        {
            _id: 3,
            name: 'CJ\'s Fine & Wine',
            descrition: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            price: 540,
            opertaionTime: new Date(),
            available: true,
            thumbnail: '',
            alt: 'string',

        }, 

        {
            _id: 4,
            name: 'CJ\'s Fine & Wine',
            descrition: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            price: 240,
            opertaionTime: new Date(),
            available: true,
            thumbnail: '',
            alt: 'string',

        }, 
    ]


    getAllTours = new EventEmitter<ITours[]>();

    get(tours: ITours[]) {
        this.getAllTours.emit(tours);

    }

}