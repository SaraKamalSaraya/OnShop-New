import { defaultAPI } from "src/_api/axios";
import { API_ENDPOINTS } from "src/utils/constants";

export const getOrders = async(body: any) => {
    // console.log('body',body.params)
    const {data} = await defaultAPI.get(API_ENDPOINTS.ORDERS,body);
    return data;
}

export const singleOrder = async(body: any) => {
    console.log('body',body)
    const {data} = await defaultAPI.get(API_ENDPOINTS.ORDERS ,body);
    return data;
}

export const CreateOrder = async (body: any) => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.ORDERS , body);
    return data;
};