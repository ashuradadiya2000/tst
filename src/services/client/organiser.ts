import { AxiosResponse } from "axios";
import { http } from "../http";

export const listUserOrganiser = async (): Promise<AxiosResponse> => {
    return await http.get(`/organiser/list`).then((res) => res);
};
