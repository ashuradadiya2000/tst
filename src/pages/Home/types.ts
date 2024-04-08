export interface EventProps {
    _id: string
    name: string
    venueId: string
    date: string
    time: string
    desctiption: string
    about_artist: string
    terms_condition: string
    desclaimer: string
    artist_name: string
    floor_type: string
    drafts: boolean
    banner: string
    main_banner: string
    sitting_map: string
    organiserId: string[]
    createdAt: string
    updatedAt: string
    slug: string
    organiserBy: OrganiserBy[]
    venue: Venue
}

export interface OrganiserBy {
    value: string
    label: string
}

export interface Venue {
    address: string
    city: string
    state: string
    postcode: string
    label: string
    value: string
}