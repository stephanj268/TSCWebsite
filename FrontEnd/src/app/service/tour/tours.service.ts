import { Injectable, EventEmitter } from "@angular/core"

export interface ITours {
    _id: number,
    name: string,
    img: string,
    alt: string,
    description: string,
    miniDesc: string,
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
            img: 'https://www.atastefortravel.ca/wp-content/uploads/2022/02/Shirley-Heights-Daytime.webp',
            alt: 'dummy alt',
            name: 'Full Day Tours',
            slogo: 'ALL DAY',
            type: [],
            duration: 6,
            tourOptions: [
                { label: "Optional Lunch" },
                { label: "24/7 wifi" },
                { label: "View Beaches" }
            ],

            description: 'Make the most of your time with our full day tours, designed for a deeper and more immersive experience. Explore top attractions, hidden gems, and local culture at a relaxed pace, with plenty of time to take in the sights, enjoy activities, and create lasting memories.',
            miniDesc: 'Immersive full-day experiences through top attractions, hidden gems, and local culture at a pace you\'ll actually enjoy.'
        
        },

        {
            _id: 2,
            img: 'https://www.nationalparksantigua.com/wp-content/uploads/elementor/thumbs/7-copy-scaled-qgxbxqgqhauv2gc599wqywtgc6l9yf8c6x0rtll2fc.jpg',
            alt: 'dummy alt',
            name: 'Half Day Tours',
            slogo: 'SHORT',
            type: [],
            duration: 4,
            tourOptions: [
                { label: "Lunch/Drinks stop" },
                { label: "pickup/drop-off" },
                { label: "Guided sightseeing" },
                { label: "Short photo stops at scenic locations" },

            ],

            description: 'Enjoy the perfect balance with our half day tours ideal for exploring key highlights without taking up your entire day. Discover top sights, local culture, and scenic spots in a well-paced experience that leaves you time to relax or continue your adventures.',
            miniDesc: "The perfect balance key highlights, local culture, and scenic spots, with the rest of your day still yours."
        },

        {
            _id: 3,
            img: 'https://www.vincentvacations.com/sandals/images/Shirley-Heights-Antigua-Harbor-View.jpg',
            alt: 'dummy alt',
            name: 'Short Tours',
            slogo: 'A FEW HOURS',
            type: [],
            duration: 1,
            tourOptions: [
                { label: "Pickup/drop-off" },
                { label: "Local guide / driver" },
                { label: "Photo stops at viewpoints" },
            ],

            description: 'Discover the highlights in just a few hours with our short day tours—perfect for travelers on a tight schedule. Enjoy guided visits to top attractions, scenic views, and cultural hotspots, all carefully planned to give you a memorable experience without taking up your entire day.',
            miniDesc: 'Tight schedule? No problem. Guided visits to top sights and cultural hotspots, carefully curated for maximum impact.'
        },

        {
            _id: 4,
            img: 'https://antiguacruiseport.com/wp-content/uploads/sites/58/2025/12/FortJames.jpg',
            alt: 'dummy alt',
            slogo: 'YOUR SATISFACTION',
            name: 'Custom Tours',
            type: [],
            duration: 0,
            description: 'Create your perfect experience with our custom tours, tailored to match your interests, schedule, and travel style. Whether you’re seeking adventure, relaxation, or cultural exploration, we design a personalized journey just for you—so every moment is exactly how you want it.',
            miniDesc: 'Your trip, your rules. Tell us where you want to go and we\'ll build the perfect experience around you.'
        },

        {
            _id: 5,
            img: 'https://www.shoreexcursionsgroup.com/img/tour/CAAGTWOBCH-2.jpg',
            alt: 'dummy alt',
            slogo: 'BEACH VIEWS',
            name: 'Beach Hopping Tours',
            type: [],
            duration: 5,
            description: 'Soak up the sun with our beach hopping tours, taking you to some of the most stunning spots in one unforgettable trip. Swim in crystal-clear waters, relax on soft, and experience the unique vibe of each beach—all in a fun and refreshing island adventure.',
            miniDesc: ''
        
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