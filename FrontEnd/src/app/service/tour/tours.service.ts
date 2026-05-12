import { Injectable, EventEmitter } from "@angular/core"

export interface ITours {
    _id: number,
    name: string,
    img: string,
    alt: string,
    description: string,
    slogo?: string,
    type: [],
    tourOptions?: object[],
    duration: number
}

@Injectable()
export class TourService {
    defaultImg = 'https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png'

    allTours: ITours[] = [
        {
            _id: 1,
            img: this.defaultImg,
            alt: 'dummy alt',
            name: 'Full Day Tours',
            type: [],
            duration: 6,
            tourOptions: [
                { label: "Optional Lunch" },
                { label: "24/7 wifi" },
                { label: "View Beaches" }
            ],

            description: 'Make the most of your time with our full day tours, designed for a deeper and more immersive experience. Explore top attractions, hidden gems, and local culture at a relaxed pace, with plenty of time to take in the sights, enjoy activities, and create lasting memories.'
        },

        {
            _id: 2,
            img: 'https://img.icons8.com/pulsar-color/1200/placeholder-thumbnail-document.jpg',
            alt: 'dummy alt',
            name: 'Half Day Tours',
            type: [],
            duration: 4,
            tourOptions: [
                { label: "Lunch/Drinks stop" },
                { label: "pickup/drop-off" },
                { label: "Guided sightseeing" },
                { label: "Short photo stops at scenic locations" },

            ],

            description: 'Enjoy the perfect balance with our half day tours ideal for exploring key highlights without taking up your entire day. Discover top sights, local culture, and scenic spots in a well-paced experience that leaves you time to relax or continue your adventures.'
        },

        {
            _id: 3,
            img: 'https://img.icons8.com/pulsar-color/1200/placeholder-thumbnail-document.jpg',
            alt: 'dummy alt',
            name: 'Short Tours',
            type: [],
            duration: 1,
            tourOptions: [
                { label: "Pickup/drop-off" },
                { label: "Local guide / driver" },
                { label: "Photo stops at viewpoints" },
            ],

            description: 'Discover the highlights in just a few hours with our short day tours—perfect for travelers on a tight schedule. Enjoy guided visits to top attractions, scenic views, and cultural hotspots, all carefully planned to give you a memorable experience without taking up your entire day.'
        },

        {
            _id: 4,
            img: 'https://img.icons8.com/pulsar-color/1200/placeholder-thumbnail-document.jpg',
            alt: 'dummy alt',
            name: 'Custom Tours',
            type: [],
            duration: 0,
            description: 'Create your perfect experience with our custom tours, tailored to match your interests, schedule, and travel style. Whether you’re seeking adventure, relaxation, or cultural exploration, we design a personalized journey just for you—so every moment is exactly how you want it.'
        },

        {
            _id: 5,
            img: 'https://img.icons8.com/pulsar-color/1200/placeholder-thumbnail-document.jpg',
            alt: 'dummy alt',
            name: 'Beach Hopping Tours',
            type: [],
            duration: 5,
            description: 'Soak up the sun with our beach hopping tours, taking you to some of the most stunning spots in one unforgettable trip. Swim in crystal-clear waters, relax on soft, and experience the unique vibe of each beach—all in a fun and refreshing island adventure.'
        },

    ]




    getToursEvent = new EventEmitter<ITours[]>();

    onGetToursEvent(data: ITours[]) {
        this.getToursEvent.emit(data);
    }

    getImages() {
        return this;
    }

}