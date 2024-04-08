import { AxiosResponse } from "axios";
import { http } from "../http";

export const userLogin = async ( data: unknown ): Promise<AxiosResponse> => {
    return await http.post("/webusers/login", data).then((res) => res);
};
