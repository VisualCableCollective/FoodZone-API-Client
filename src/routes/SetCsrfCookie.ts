import axios from "axios";
import { FoodZone } from "..";
import { IRoute } from "./IRoute";

export class SetCsrfCookie extends IRoute<boolean> {
    path = "sanctum/csrf-cookie";

    method = "GET";

    protected useApiServer = false;

    async getData() {
        axios.get(FoodZone.Config.ServerUrl + 'sanctum/csrf-cookie', {withCredentials: true}).then(response => {
        });
        return true;
    }

    constructor() {
        super();
    }
}
