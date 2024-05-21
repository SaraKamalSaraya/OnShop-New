import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getStores = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.STORES,body);
    return data;
}

export const CreateStore = async(body: any) => {
    const {data} = await defaultAPI.post(API_ENDPOINTS.STORES,body);
    return data;
}

export const UpdateStore = async(body: any) => {
    const {data} = await defaultAPI.put(API_ENDPOINTS.STORES + `/${body?.store_id}`,body);
    return data;
}

export const GetSingleStore = async(body: any) => {
    console.log(body)
    const {data} = await defaultAPI.get(API_ENDPOINTS.STORES + `/${body?.store_id}`,body);
    return data;
}

export const DeleteStore = async(body: any) => {
    const {data} = await defaultAPI.delete(API_ENDPOINTS.STORES + `/${body?.store_id}`,body);
    return data;
}

