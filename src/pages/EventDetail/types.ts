export interface EventDetail {
    _id: string
    name: string
    date: string
    time: string
    desctiption: string
    about_artist: string
    terms_condition: string
    desclaimer: string
    artist_name: string
    floor_type: string
    banner: string
    main_banner: string
    sitting_map: string
    slug: string
    venue: Venue
    organisedBy: OrganisedBy[]
    categories: Category[]
    description: string
  }

  export interface Venue {
    _id: string
    venue: string
    address: string
    slug: string
  }

  export interface OrganisedBy {
    _id: string
    organiser_name: string
    organiser_photo: string
  }

  export interface Category {
    _id: string
    name: string
    price: number
    stage_position: string
    active: boolean
    total?: number
    qty?: number
  }
