export interface EventsTypes {
    _id: string;
    name: string;
    venueId: string;
    date: string;
    time: string;
    desctiption: string;
    banner: string;
    organiserId: string[];
    createdAt: string;
    updatedAt: string;
    slug: string;
    organiserBy: OrganiserBy[];
    venue: Venue;
    drafts: boolean;
    floor_type: string;
    totalSheetsCount: number;
    bookedSheetsCount: number;
}

export interface OrganiserBy {
    _id: string;
    organiser: string;
}

export interface Venue {
    _id: string;
    venue: string;
    address: string;
}
