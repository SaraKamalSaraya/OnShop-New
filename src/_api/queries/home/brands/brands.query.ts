import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getBrands = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.BRANDS,body);
    return data;
}

export const GetSingleBrand = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.BRANDS ,body);
    return data;
}

export const getBrandsThemes = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.CATEGORIES_THEMES ,body);
    return data;
}

export const CreateBrandSlice = async(body: any) => {
    const {data} = await defaultAPI.post(API_ENDPOINTS.BRANDS,body);
    return data;
}

export const UpdateBrandSlice = async(body: any) => {
    console.log('body',body);
    const {data} = await defaultAPI.put(API_ENDPOINTS.BRANDS + `/${body?.brand_id}`,body);
    return data;
}

export const DeleteBrand = async(body: any) => {
    const {data} = await defaultAPI.delete(API_ENDPOINTS.BRANDS + `/${body?.brand_id}`,body);
    return data;
}