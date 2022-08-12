import { FoodZone } from "..";
import { AuthResponse } from "../models/responses/Auth/AuthResponse";
import { IRoute } from "./IRoute";

export class ActAsUser extends IRoute<AuthResponse> {
    path = "users/act-as/{userId}";

    method = "GET";

    async getData(userId: string | number) {
        this.pathParams["userId"] = userId;

        const data = await this.fetchData();
        const res = (await data.data) as AuthResponse;

        FoodZone.Config.AuthorizationToken = "Bearer " + res.token;

        return res;
    }

    constructor() {
        super();
    }
}
