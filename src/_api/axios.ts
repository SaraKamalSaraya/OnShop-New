import axios from "axios";
import { GetServerSidePropsContext } from 'next/types';
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, BASE_URL } from "src/utils/constants";
const VALIDATION_ERRORS_RESPONSE = 422;
const UNAUTHENTICATED_ERROR = 401;

export const defaultAPI = axios.create({
    baseURL: BASE_URL,
});

const isServer = () => {
    return typeof window === "undefined";
};

let locale = "";
let context = <GetServerSidePropsContext>{};

export const setLocale = (_locale: string) => {
    locale = _locale;
};

export const getLocale = () => locale;

export const setContext = (_context: GetServerSidePropsContext) => {
    context = _context;
};

defaultAPI.interceptors.response.use(
    function (response) {
        console.log('running ... ');
        // console.log('response',response);
        const SHOW_TOAST = false;
        if (SHOW_TOAST) {
            if (response.data.message ) {
                toast.dismiss();
                toast.success(response.data.message);
            }
        }

        return response;
    },
    function (error) {
        const STATUS_CODE = error.response.status;
        const errorMessage=error.response.data.message
        if (STATUS_CODE === VALIDATION_ERRORS_RESPONSE) {
            const responseErrors = error.response.data.data;
            // const firstErrorKey = Object.keys(responseErrors)[0];

            toast.dismiss();

            // toast.error(`${errorMessage}`);
        } else if (
            STATUS_CODE === UNAUTHENTICATED_ERROR &&
            error.config.url !== "/signin"
        ) {
            Cookies.remove(ACCESS_TOKEN);
            localStorage.removeItem(ACCESS_TOKEN);
            return (window.location.href = "/signin");
        } else {
            toast.dismiss();
            // toast.error(error.response.data.message);
        }

        return Promise.reject(error);
    }
);

defaultAPI.interceptors.request.use(
    (config) => {
        config.headers!.Authorization = `Bearer ${Cookies.get(
            ACCESS_TOKEN
        )}`;
        // if (!isServer()) {
        //     config.headers.Locale = window.location.pathname.slice(1, 3) == 'ar' ? "ar" : "en";
        // }
        // if (isServer() && context?.req?.cookies) {
        //     config.headers.Locale = context?.req?.cookies?.NEXT_LOCALE || "en";
        // }
        config.headers!.Accept = "application/json";
        // console.log('config',config)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);