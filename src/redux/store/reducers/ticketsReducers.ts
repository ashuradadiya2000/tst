import { REMOVE_SEATS_DATA, SELECTED_SEATS, SET_TICKETS_CATEGORY_DETAILS, } from "../actions/ticketsAction";

const initialState = {
    tickets_category_details: null,
    selectedSeats: [],
    totalAmount: 0,
};

const SelectSeats = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECTED_SEATS:
            return {
                ...state,
                selectedSeats: action?.payload?.selectedSeats,
                totalAmount: action?.payload?.totalAmount,
            };
        case SET_TICKETS_CATEGORY_DETAILS:
            return {
                ...state,
                tickets_category_details: action?.payload,
            };
        case REMOVE_SEATS_DATA:
            return {
                ...state,
                tickets_category_details: null,
                selectedSeats: [],
                totalAmount: 0,
            };
        default:
            return state;
    }
};

export default SelectSeats;
