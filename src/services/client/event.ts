import { AxiosResponse } from "axios";
import { http } from "../http";

export const listUserEvent = async (search: string): Promise<AxiosResponse> => {
    return await http.get(`/event-list?search=${search}`).then((res) => res);
};

export const listUserPastEvent = async (pastEvent: string): Promise<AxiosResponse> => {
    return await http.get(`/past-event?pastEvent=${pastEvent}`).then((res) => res);
};

export const listUserEventCategory = async ( slug: string ): Promise<AxiosResponse> => {
    return await http.get(`/event/${slug}`).then((res) => res);
};

export const eventCategorySeats = async (categoryId: string): Promise<AxiosResponse> => {
    return await http.get(`/event/category/${categoryId}`).then((res) => res);
};

export const listUserEventHoldSheet = async (): Promise<AxiosResponse> => {
    return await http.get(`/seat-hold-list`).then((res) => res);
};

export const createRegister = async (data: FormData): Promise<AxiosResponse> => {
    return await http.post("/webusers/register", data);
};

export const createSeatBooking = async (data: unknown): Promise<AxiosResponse> => {
    return await http.post("/seat-hold", data).then((res) => res);
};
interface confirmPaymentPayload {
    session_id: string;
    payment_mode: string;
    payment_status: string;
}
export const confirmPayment = async (data: confirmPaymentPayload) =>{
    return await http.post(`/confirm-payment`, {...data}).then((res) => res);
}

export const eventDetail = async (id: string): Promise<AxiosResponse> => {
    return await http.get('/event-detail/'+id).then((res) => res);
};

export const orderDetails = async (id: string): Promise<AxiosResponse> => {
    return await http.get('/order/'+id).then((res) => res);
};