import { ApiConfig } from "./ApiConfig";
import { GetLocationsByAddressResponse } from "./models/responses/GetLocations/GetLocationsByAddressResponse";
import { Location } from "./models/responses/GetLocations/Models/Location";
import { Seller } from "./models/responses/GetLocations/Models/Seller";
import { CreateProductCategory } from "./routes/CreateProductCategory";
import { GetLocationsByAddress } from "./routes/GetLocationsByAddress";
import { SetCsrfCookie } from "./routes/SetCsrfCookie";

class FoodZoneApiClient {
    Config = new ApiConfig();

    init() {
        var csrfRoute = new SetCsrfCookie();
        csrfRoute.getData();
    }

    getLocationsByAddress(address: string) {
        var route = new GetLocationsByAddress();
        return route.getData(address);
    }

    createProductCategory(name: string, thumbnail: File) {
        var route = new CreateProductCategory();
        return route.getData(name, thumbnail);
    }
}

export const FoodZone = new FoodZoneApiClient();

export const useFoodZone = () => FoodZone;

export {
    GetLocationsByAddressResponse,
    Location,
    Seller
}