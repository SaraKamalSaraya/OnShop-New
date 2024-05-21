import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getBanners = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.BANNERS,body);
    return data;
}

export const getBannersThemes = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.BANNERS_THEMES ,body);
    return data;
}