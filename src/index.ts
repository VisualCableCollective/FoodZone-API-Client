import { ApiConfig } from "./ApiConfig";

class FoodZoneApiClient {
    Config = new ApiConfig();
}

export const FoodZone = new FoodZoneApiClient();

export const useFoodZone = () => FoodZone;