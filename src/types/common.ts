import { store } from "@/redux/store";
export type ObjectType = {
    [key: string]: string | null | number
}


export type RootState = ReturnType<typeof store.getState>