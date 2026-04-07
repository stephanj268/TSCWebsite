import { Injectable, EventEmitter } from "@angular/core"

export interface ITours {
    _id: number,
    name: string,
    type: string,
    img: string,
    alt: string,
    description: string
}

@Injectable()
export class TourService {
    defaultImg = 'https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png'

    allTours: ITours[] = [
        {
            _id: 1,
            img: this.defaultImg,
            alt: 'dummy alt',
            name: 'testTOur',
            type: 'Full Day Tours',
            description: 'tour info goes here...'
        },

        {
            _id: 2,
            img: 'https://img.icons8.com/pulsar-color/1200/placeholder-thumbnail-document.jpg',
            alt: 'dummy alt',
            name: 'testTOur',
            type: 'Half Day Tours',
            description: 'tour info goes here...'
        }
    ]

    getToursEvent = new EventEmitter<ITours>

    onGetToursEvent(data: ITours) {
        this.getToursEvent.emit(data);
    }
}