interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
}
export interface Store        {
    id: number,
    subdomain: string,
    custom_domain: string,
    name: any,
    description: string,
    phone: string,
    email: string,
    revenue: string,
    media: string,
    business_user_id: number,
    created_at:string,
    updated_at:string
}

export type StoresResponses=GenericResponse<Store[]>