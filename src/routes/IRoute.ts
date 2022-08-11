import axios from "axios";
import { FoodZone } from "..";

interface LooseObject {
    [key: string]: any
}

export abstract class IRoute<ReturnType> {
    /**
     * Path after the ApiServerUrl
     */
    abstract path: string;

    abstract method: string;

    protected useApiServer = true;

    defaultHeaders = [
        {name: "Accept", value: "application/json"}
    ];

    protected requestParams: Record<string, any> = {};

    protected requestHeaders: Record<string, string | number | boolean> = {};

    constructor() {
        this.defaultHeaders.forEach(header => {
            this.requestHeaders[header.name] = header.value;
        });
    }

    async fetchData() {
        let url = (this.useApiServer ? FoodZone.Config.ApiServerUrl : FoodZone.Config.ServerUrl) 
                    + this.path;

        if (this.method == "GET") {
            url += "?";
            /*this.requestParams.forEach(param => {
                url += param.name + "=" + param.value + "&";
            });*/
            url.slice(0, -1)
        }

        var response = await axios({
            url,
            method: this.method,
            headers: this.requestHeaders,
            data: this.requestParams,
            withCredentials: true // for CSRF cookie
        });

        return response;
    }
}