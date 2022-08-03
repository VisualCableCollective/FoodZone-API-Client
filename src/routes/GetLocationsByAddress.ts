import { GetLocationsByAddressResponse } from "../models/responses/GetLocations/GetLocationsByAddressResponse";
import { Seller } from "../models/responses/GetLocations/Models/Seller";
import { IRoute } from "./IRoute";

export class GetLocationsByAddress extends IRoute<GetLocationsByAddressResponse> {
    path = "locations/";

    method = "GET";

    async getData(address: string) {
        this.requestParams.push({name: "address", value: address});

        const data = await this.fetchData();
        const json = await data.json();

        let returnObj = new GetLocationsByAddressResponse();
        returnObj.sellers = json.sellers as Seller[];
        returnObj.userCoordinates = {latitude: json.user_coords.lat, longitude: json.user_coords.lng};

        return returnObj;
    }

    constructor() {
        super();
    }
}
