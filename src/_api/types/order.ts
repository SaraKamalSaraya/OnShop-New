interface GenericResponse<T> {
    data: T;
    status: number;
    message: string;
}

export interface Order{
    id: number,
    customer_id: number,
    total_price:number,
    status: number,
    payment_status: number,
    order_type: number,
    payment_method: number,
    store_payment_gateway_id: number|undefined,
    typeable_type: number,
    typeable_id: number,
    created_at: string,
    updated_at: string
}
export type OrdersResponse=GenericResponse<Order[]>