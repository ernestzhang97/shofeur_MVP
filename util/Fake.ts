import { Cadillac_Images, Audi_Images } from './import';

export interface Rides {
  id: number
  title: string,
  type: string,
  rate: string,
  reviews: number,
  rating: number,
  occupancy: number,
  location: string,
  date: Date,
  images: Array<string>,
  description: string
}

const placeholder: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const Fake: Rides[] = [
  {
    id: 0,
    title: 'Ride SUV',
    type: '2023 Cadillac Escalade-V',
    rate: '$150/hr',
    reviews: 1,
    rating: 4,
    occupancy: 6,
    location: 'Los Angeles',
    date: new Date(),
    images: Cadillac_Images,
    description: placeholder
  },
  {
    id: 1,
    title: 'Come Rent My Ride!',
    type: '2016 Audi A8L',
    rate: '$250/hr',
    reviews: 10,
    rating: 4.5,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Audi_Images,
    description: placeholder
  },
  {
    id: 2,
    title: 'Rentals for Cheap',
    type: '2016 Audi A8L',
    rate: '$100/hr',
    reviews: 3,
    rating: 3.5,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Audi_Images,
    description: placeholder
  },
  {
    id: 3,
    title: 'Cadillac Rental Near LAX',
    type: '2023 Cadillac Escalade-V',
    rate: '$200/hr',
    reviews: 25,
    rating: 4,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Cadillac_Images,
    description: placeholder
  },
  {
    id: 4,
    title: 'LA Rentals Here We Go!',
    type: '2023 Cadillac Escalade-V',
    rate: '$300/hr',
    reviews: 10,
    rating: 3,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Cadillac_Images,
    description: placeholder
  },
  {
    id: 5,
    title: 'Rent Rent Rent Rent!',
    type: '2016 Audi A8L',
    rate: '$250/hr',
    reviews: 11,
    rating: 5,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Audi_Images,
    description: placeholder
  },
  {
    id: 6,
    title: 'Come Rent My Ride!',
    type: '2016 Audi A8L',
    rate: '$400/hr',
    reviews: 10,
    rating: 2,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Audi_Images,
    description: placeholder
  },
  {
    id: 7,
    title: 'Come Rent My Ride!',
    type: '2016 Audi A8L',
    rate: '$250/hr',
    reviews: 10,
    rating: 0,
    occupancy: 5,
    location: 'Los Angeles',
    date: new Date(),
    images: Audi_Images,
    description: placeholder
  }
];