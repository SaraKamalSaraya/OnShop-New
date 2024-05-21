import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getVariants = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.VARIANT,body);
    return data;
}

export const GetSingleVariant = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.VARIANT ,body);
    return data;
}

export const getVariantsThemes = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.CATEGORIES_THEMES ,body);
    return data;
}

export const CreateVariantSlice = async(body: any) => {
    const {data} = await defaultAPI.post(API_ENDPOINTS.VARIANT,body);
    return data;
}

export const UpdateVariantSlice = async(body: any) => {
    const {data} = await defaultAPI.put(API_ENDPOINTS.VARIANT + `/${body?.variant_id}`,body);
    return data;
}

export const DeleteVariant = async(body: any) => {
    const {data} = await defaultAPI.delete(API_ENDPOINTS.VARIANT + `/${body?.variant_id}`,body);
    return data;
}