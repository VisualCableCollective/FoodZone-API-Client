import { ApiConfig } from "./ApiConfig";
import { GetLocationsByAddressResponse } from "./models/responses/GetLocations/GetLocationsByAddressResponse";
import { GetLocationsByAddress } from "./routes/GetLocationsByAddress";

class FoodZoneApiClient {
    Config = new ApiConfig();

     getLocationsByAddress(address: string) {
        var route = new GetLocationsByAddress();
        return route.getData(address);
    }
}

export const FoodZone = new FoodZoneApiClient();

export const useFoodZone = () => FoodZone;

export {
    GetLocationsByAddressResponse
}