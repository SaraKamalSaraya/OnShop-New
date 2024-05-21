import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getCategories = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.CATEGORIES,body);
    return data;
}

export const GetSingleCategory = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.CATEGORIES ,body);
    return data;
}

export const getCategoriesThemes = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.CATEGORIES_THEMES ,body);
    return data;
}


export const CreateCategorySlice = async(body: any) => {
    const {data} = await defaultAPI.post(API_ENDPOINTS.CATEGORIES,body);
    return data;
}

export const UpdateCategorySlice = async(body: any) => {
    console.log('body',body);
    const {data} = await defaultAPI.put(API_ENDPOINTS.CATEGORIES + `/${body?.category_id}`,body);
    return data;
}

export const DeleteCategory = async(body: any) => {
    const {data} = await defaultAPI.delete(API_ENDPOINTS.CATEGORIES + `/${body?.category_id}`,body);
    return data;
}