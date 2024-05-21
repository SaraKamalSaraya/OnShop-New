import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getProducts = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.PRODUCTS,body);
    return data;
}

export const getProductsThemes = async(body: any) => {
    const {data} = await defaultAPI.get(API_ENDPOINTS.PRODUCTS_THEMES ,body);
    return data;
}

export const singleProduct = async(body: any) => {
    console.log('body',body)
    const {data} = await defaultAPI.get(API_ENDPOINTS.PRODUCTS ,body);
    return data;
}

export const CreateProduct = async (body: any) => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.PRODUCTS , body);
    return data;
};