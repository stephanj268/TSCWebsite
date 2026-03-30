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
    defaultImg = 'https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png'

    allTours: ITours[] = [
        {
            _id: 1,
            name: 'Stingray City',
            descrition: 'sacdasc',
            price: 300,
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/st-johns-anu/anf1-stingray-and-kayak-adventure/stock-photo-stingrays-at-stingray-city-in-grand-cayman-islands-284293250.jpg?w=1440',
            alt: 'string',

        },

        {
            _id: 2,
            name: 'Jolly Harbour',
            descrition: 'Come and enjoy a beautiful tour at the best hotel in Antigua',
            price: 240,
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://i.travelapi.com/hotels/1000000/30000/23600/23522/ea725b9b_z.jpg',
            alt: 'string',

        }, 

        {
            _id: 3,
            name: 'C & C Wine',
            descrition: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            price: 540,
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/5fdf8b5351e6b539731d8347/1611267122663-AMYCZRLP7AFLG80WK0HO/P1150835__ed.jpg',
            alt: 'string',

        }, 

        {
            _id: 4,
            name: 'CJ\'s ',
            descrition: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            price: 400,
            opertaionTime: new Date(),
            available: true,
            thumbnail: '',
            alt: 'string',

        }, 

        {
            _id: 5,
            name: 'No Name',
            descrition: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            price: 0,
            opertaionTime: new Date(),
            available: true,
            thumbnail: this.defaultImg,
            alt: 'string',

        }, 
    ]


    getAllTours = new EventEmitter<ITours[]>();

    get(tours: ITours[]) {
        this.getAllTours.emit(tours);

    }

}