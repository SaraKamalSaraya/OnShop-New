import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getSettings = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.SETTINGS,body);
    return data;
}

export const getSettingsTheme = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.THEMES ,body);
    return data;
}

export const updateSettings = async(body: any) => {
    const {data} = await defaultAPI.put(API_ENDPOINTS.SETTINGS + `/${body?.store_id}`   ,body);
    return data;
}