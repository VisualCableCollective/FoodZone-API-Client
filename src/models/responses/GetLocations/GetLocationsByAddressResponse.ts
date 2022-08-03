import { Seller } from "./Models/Seller";

export class GetLocationsByAddressResponse {
    sellers: Seller[] = [];
    userCoordinates: {latitude: number, longitude: number} = {latitude: 0, longitude: 0}
}