import { ApiConfig } from "./ApiConfig";
import { GetLocationsByAddress } from "./routes/GetLocationsByAddress";

class FoodZoneApiClient {
    Config = new ApiConfig();

    async getLocationsByAddress(address: string) {
        var route = new GetLocationsByAddress();
        return await route.getData(address);
    }
}

export const FoodZone = new FoodZoneApiClient();

export const useFoodZone = () => FoodZone;