import { ApiConfig } from "./ApiConfig";
import { FoodZoneOptions } from "./models/FoodZoneOptions";
import { AuthResponse } from "./models/responses/Auth/AuthResponse";
import { CreateResponseBase } from "./models/responses/CreateResponseBase";
import { GetLocationsByAddressResponse } from "./models/responses/GetLocations/GetLocationsByAddressResponse";
import { Location } from "./models/responses/GetLocations/Models/Location";
import { Seller } from "./models/responses/GetLocations/Models/Seller";
import { GetProductCategoriesResponse } from "./models/responses/GetProductCategoriesResponse";
import { ActAsUser } from "./routes/ActAsUser";
import { CreateProductCategory } from "./routes/CreateProductCategory";
import { GetLocationsByAddress } from "./routes/GetLocationsByAddress";
import { GetProductCategories } from "./routes/GetProductCategories";
import { SetCsrfCookie } from "./routes/SetCsrfCookie";

class FoodZoneApiClient {
    Config = new ApiConfig();

    init() {
        let csrfRoute = new SetCsrfCookie();
        return csrfRoute.getData();
    }

    getLocationsByAddress(address: string) {
        let route = new GetLocationsByAddress();
        return route.getData(address);
    }

    createProductCategory(name: string, thumbnail: File, options: FoodZoneOptions) {
        let route = new CreateProductCategory();
        return route.getData(name, thumbnail, options);
    }

    actAsUser(userId: string | number) {
        let route = new ActAsUser();
        return route.getData(userId);
    }

    getCategories() {
        let route = new GetProductCategories();
        return route.getData();
    }
}

export const FoodZone = new FoodZoneApiClient();

export const useFoodZone = () => FoodZone;

export {
    GetLocationsByAddressResponse,
    CreateResponseBase,
    AuthResponse,
    Location,
    Seller,
    FoodZoneOptions,
    GetProductCategoriesResponse
}