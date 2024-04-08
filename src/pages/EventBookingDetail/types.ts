export interface UserRegister {
    firstname: string;
    lastname: string;
    state: string;
    city: string;
    phone_number: string;
    address: string;
    email: string;
    // profile_image: string;
    postcode: string;
    password: string;
    confirm_password: string;
}

export interface EventDetail {
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
  }