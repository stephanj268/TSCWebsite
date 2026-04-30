import { Injectable } from "@angular/core"


export interface ITaxi {
    _id: number,
    name: string,
    description: string,
    opertaionTime?: Date,
    available: boolean
    thumbnail: string,
    alt: string,
    lat?: number,
    lng?: number,
    taxiOptions?: object[],

}

@Injectable()
export class TaxiService {
    defaultImg = 'https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png'

    allTours: ITaxi[] = [
        {
            _id: 1,
            name: 'Stingray City',
            description: 'Visitors can safely interact with friendly southern stingrays in crystal-clear Caribbean waters.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/st-johns-anu/anf1-stingray-and-kayak-adventure/stock-photo-stingrays-at-stingray-city-in-grand-cayman-islands-284293250.jpg?w=1440',
            alt: 'string',
            lat: 17.10202,
            lng: -61.72411,

            taxiOptions: [
                { label: 'Enjoy a seamless, stress-free experience with private round-trip transportation in a clean, '},
                { label: 'fully air-conditioned vehicle. Your professional driver ensures a smooth, scenic journey while'},
                { label: 'Flexible pickup times allow you to travel at your convenience, and you’ll have ample time to '},
                { label: 'enjoy the experience without feeling rushed. After your visit, relax in comfort on your return'},
                { label: 'trip directly to your hotel, villa, or cruise port.' }
            ]

        },

        {
            _id: 2,
            name: 'VIP Airport Transfer',
            description: 'Enjoy a seamless and luxurious travel experience with our VIP airport transfer service.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://antigua.news/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-26-at-8.42.36-AM-e1740573825587.jpeg',
            alt: 'string',
            lat: 17.14413,
            lng: -61.79006,


            taxiOptions: [
                { label: 'Professional Chauffeur Service: Our experienced and courteous chauffeurs will ensure a safe and comfortable journey to and from the airport.' },
                { label: 'Luxury Vehicles: Travel in style with our fleet of high-end vehicles, including sedans, SUVs, and limousines, all equipped with modern amenities for your comfort.' },
                { label: '24/7 Availability: We understand that flight schedules can be unpredictable, which is why our VIP airport transfer service is available around the clock to accommodate your needs.' },
                { label: 'Flight Monitoring: We keep track of your flight status to ensure timely pickups and drop-offs, even in the case of delays or early arrivals.' },
                { label: 'Personalized Service: Whether you need assistance with luggage or have specific preferences for your ride, our team is dedicated to providing a personalized experience tailored to your requirements.' }
            ]

        },

        {
            _id: 3,
            name: 'Restaurant',
            description: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/5fdf8b5351e6b539731d8347/1611267122663-AMYCZRLP7AFLG80WK0HO/P1150835__ed.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Enjoy a convenient and comfortable ride to your favorite dining spots. '},
                { label: 'This service includes pickup and drop-off in a clean, air-conditioned vehicle, with the '},
                { label: 'option for your driver to wait or return at a scheduled time. Whether it’s a quick meal or '},
                { label: 'a long dinner, your transportation is handled with flexibility and ease.' }
            ]

        },

        {
            _id: 4,
            name: 'CJ\'s ',
            description: 'Enjoy a cosy and relaxing meal at a private restaurant on the island',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://visit.ecija.mx/wp-content/uploads/2024/02/the-ritz-carlton-mexico-3.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500

        },

        {
            _id: 5,
            name: 'Zipline',
            description: 'An adrenaline activity where you glide along cables high above the ground, usually through forests or scenic landscapes.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://mediaim.expedia.com/localexpert/307516/388d0227-b286-4590-9ec8-97aced0908ee.jpg',
            alt: 'string',
            lat: 17.04289,
            lng: -61.82283,
            taxiOptions: [
                { label: 'Travel in comfort to your adventure with round-trip transportation in a modern, air-conditioned vehicle.'},
                { label: 'Your driver ensures timely arrival so you never miss your booking. After your activity, enjoy a relaxed return'},
                { label: 'journey with flexible pickup arrangements, allowing you to fully enjoy the experience without worrying about transportation.' },
                { label: 'Experience the thrill of ziplining with our convenient transportation service. We provide safe and reliable rides to and from zipline locations, '},
                {label: 'ensuring you can focus on the excitement of soaring through the air while we handle your transportation needs.' }
            ]


        },


        {
            _id: 6,
            name: 'Heritage Quay',
            description: 'bustling waterfront shopping and cruise port area with duty-free stores and local vendors.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://www.gpsmycity.com/img/gd_sight/63080.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,

            taxiOptions: [
                { label: 'Enjoy a convenient and comfortable ride to your favorite shopping and dining spots. '},
                { label: 'This service includes pickup and drop-off in a clean, air-conditioned vehicle, with the '},
                { label: 'option for your driver to wait or return at a scheduled time. Whether it’s a quick meal or '},
                { label: 'a long dinner, your transportation is handled with flexibility and ease.' }
            ]

        },



        {
            _id: 7,
            name: 'Shirley Heights',
            description: 'A scenic hilltop lookout famous for panoramic views and lively sunset parties.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://www.visitantiguabarbuda.com/wp-content/uploads/2024/11/Shirley-Heights-officers-quarters-ruins-1.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Experience one of the island’s most iconic viewpoints with reliable round-trip transportation. '},
                { label: 'Ride in comfort in an air-conditioned vehicle while enjoying scenic hillside views along the way.'},
                { label: 'Your driver accommodates flexible timing, especially for sunset visits or special events, and provides return service once you’re ready—no need to rush or worry about finding a ride back.'},
                    { label: 'Whether you’re visiting for the breathtaking views or the lively atmosphere, our transportation service ensures a seamless and enjoyable experience at Shirley Heights.' }

            ]

        },


        {
            _id: 8,
            name: 'Nelson Dockyard',
            description: 'A restored 18th-century British naval dockyard now serving as a marina, museum, and cultural site.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/5f4ef170d347c007483edd76/a19430ba-ebd2-42b4-b928-5f0114d8d427/NelsonDockyard-8574.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Discover the rich maritime history of Nelson Dockyard with our convenient round-trip transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to explore the dockyard at your own pace without worrying about transportation.'},
                { label: 'Whether you’re interested in the historical exhibits, marina, or cultural events, our transportation service ensures a seamless and enjoyable visit to Nelson Dockyard.' }
            ]

        },


        {
            _id: 9,
            name: 'Beach',
            description: 'A natural limestone arch carved by the Atlantic Ocean, known for its dramatic waves and blowholes.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://www.visitantiguabarbuda.com/wp-content/uploads/2024/11/darkwood-beach-768x512-1.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Experience the beauty of the beach with our convenient round-trip transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to relax and enjoy the beach at your own pace.'},
                { label: 'Whether you’re looking for a peaceful retreat or an exciting adventure, our transportation service ensures a seamless and enjoyable visit to the beach.' }
            ]


        },



        {
            _id: 10,
            name: 'Devil\'s Bridge',
            description: 'A natural limestone arch carved by the Atlantic Ocean, known for its dramatic waves and blowholes.',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://i0.wp.com/icouldshowyoutheworld.com/wp-content/uploads/2023/02/devils-bridge.jpg?resize=1024%2C768&ssl=1',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Explore the natural beauty of Devil\'s Bridge with our convenient round-trip transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to take in the stunning surroundings at your own pace.'},
                { label: 'Whether you’re a nature enthusiast or simply looking for a unique experience, our transportation service ensures a seamless and enjoyable visit to Devil\'s Bridge.' }
            ]

        },


        {
            _id: 11,
            name: 'Night Club',
            description: 'A great place to enjoy music, dancing, and vibrant nightlife',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/05/3c/c6/nightclub.jpg?w=900&h=500&s=1',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Get to the night club in style with our convenient transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to make the most of your night out.'},
                { label: 'Whether you’re a local or visitor, our transportation service ensures a seamless and enjoyable visit to the night club.' }
            ]

        },


        {
            _id: 12,
            name: 'Supermarket',
            description: 'A convenient stop to pick up snacks, drinks, and daily essentials',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://dadlidirectory.com/wp-content/uploads/2023/12/supermarket-epicurean-antigua-768x1024-1.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Visit the local supermarket with our convenient transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to shop at your own pace.'},
                { label: 'Whether you’re a local or visitor, our transportation service ensures a seamless and enjoyable visit to the supermarket.' }
            ]

        },

        {
            _id: 13,
            name: 'Local Market',
            description: 'A bustling market where you can find fresh produce, local crafts, and unique souvenirs',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://bigadventureswithlittlefeet.com/wp-content/uploads/2023/12/market-1.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Explore the local market with our convenient transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to browse and shop at your own pace.'},
                { label: 'Whether you’re a local or visitor, our transportation service ensures a seamless and enjoyable visit to the local market.' }
            ]


        },


        {
            _id: 14,
            name: 'Local Church',
            description: 'A historic church where you can experience the local culture and community',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://www.encirclephotos.com/wp-content/uploads/Antigua-St-John-s-St-John-s-Cathedral.jpg',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Visit the local church with our convenient transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to participate in services and events at your own pace.'},
                { label: 'Whether you’re a local or visitor, our transportation service ensures a seamless and enjoyable visit to the local church.' }
            ]

        },



        {
            _id: 15,
            name: 'Museum',
            description: 'A historic museum showcasing the local history and culture',
            opertaionTime: new Date(),
            available: true,
            thumbnail: 'https://islandpressbox.com/wp-content/uploads/2023/12/Untitled-design_20231229_111238_0000.png',
            alt: 'string',
            lat: 17.9000,
            lng: -61.7500,
            taxiOptions: [
                { label: 'Visit the museum with our convenient transportation service. '},
                { label: 'Travel in comfort in a clean, air-conditioned vehicle while enjoying scenic views along the way.'},
                { label: 'Your driver accommodates flexible timing, allowing you to explore the exhibits at your own pace.'},
                { label: 'Whether you’re a local or visitor, our transportation service ensures a seamless and enjoyable visit to the museum.' }
            ]


        },




    ]


    getTaxiById(id: number): ITaxi | undefined {
        return this.allTours.find(t => t._id === id);
    }

}