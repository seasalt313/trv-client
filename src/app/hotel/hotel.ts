export class Hotel {
  id: number;
  name: string;
  description: string;
  distance_to_venue: number;
  rating: number;
  price_category: string;
  address: string;
  image: string;
  rooms: [
    {
      id: number;
      name: string;
      description: string;
      max_occupancy: number;
      price_in_usd: number;
    },
    {
      id: number;
      name: string;
      description: string;
      max_occupancy: number;
      price_in_usd: number;
    },
    {
      id: number;
      name: string;
      description: string;
      max_occupancy: number;
      price_in_usd: number;
    }
  ];
}
