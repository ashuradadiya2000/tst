export interface EventSheetDetail {
    _id: string;
    eventId: string;
    name: string;
    price: number;
    stage_position: string;
    active: boolean;
    blocks: Block[];
    createdAt: string;
    updatedAt: string;
    event: Event;
    venue: Venue;
}

export interface Block {
    position_number: number;
    rows: Row[];
    _id: string;
}

export interface Row {
    row: string;
    sheets: Sheet[];
    _id: string;
}

export interface Sheet {
    delete: boolean;
    accessible: boolean;
    booked?: boolean;
    hold?: boolean;
    number: number;
    _id: string;
}

export interface Event {
    _id: string;
    name: string;
    venueId: string;
    date: string;
    time: string;
    desctiption: string;
    about_artist: string;
    terms_condition: string;
    desclaimer: string;
    artist_name: string;
    banner: string;
    main_banner: string;
    sitting_map: string;
}

export interface Venue {
    _id: string;
    venue: string;
    address: string;
}
