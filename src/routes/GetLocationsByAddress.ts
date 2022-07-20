import { GetLocationsByAddressResponse } from "../models/responses/GetLocations/GetLocationsByAddressResponse";
import { IRoute } from "./IRoute";

export class GetLocationsByAddress extends IRoute<GetLocationsByAddressResponse> {
    path = "locations/";

    method = "GET";

    async getData(address: string) {
        const data = await this.fetchData();
        const json = await data.json();
        return json as GetLocationsByAddressResponse;
    }

    constructor() {
        super();
    }
}
