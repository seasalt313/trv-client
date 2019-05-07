export class Hotel {
    id: number;
    name: string;
    description: string;
    distance_to_venue: number;
    rating: number;
    price_category: string;
    ammenities: [string, string, string];
    address: string;
    city: string;
    country: string;
    phone: string;
    date: string;
    image: string;
    room1: {
        id: number;
        name: string;
        description: string;
        max_occupancy: number;
        price_in_usd: string;
    };
    room2: {
        id: number;
        name: string;
        description: string;
        max_occupancy: number;
        price_in_usd: string;
    };
    room3: {
        id: number;
        name: string;
        description: string;
        max_occupancy: number;
        price_in_usd: string;
    };
};


