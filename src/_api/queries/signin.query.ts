import { API_ENDPOINTS } from "src/utils/constants";
import { defaultAPI } from "../axios";
import { SigninInput } from "../types/signin";

export const signin = async (body: SigninInput) => {
    const { data } = await defaultAPI.post(API_ENDPOINTS.SIGNIN, body);
    return data;
};