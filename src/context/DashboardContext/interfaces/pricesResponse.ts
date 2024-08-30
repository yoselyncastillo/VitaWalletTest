export interface PricesResponse {
    prices:      { [key: string]: { [key: string]: number } };
    valid_until: Date;
}
