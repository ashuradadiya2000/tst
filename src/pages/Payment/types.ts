export interface order {
    _id: string
    seats: Seat[]
    price: number
    quantity: number
    event: Event
    venue: Venue
    category: string
  }

  export interface Seat {
    categoryId: string
    block_id: string
    row_id: string
    seat_id: string
    row: string
    number: number
    _id: string
  }

  export interface Event {
    _id: string
    venueId: string
    date: string
    time: string
    artist_name: string
  }

  export interface Venue {
    _id: string
    venue: string
  }