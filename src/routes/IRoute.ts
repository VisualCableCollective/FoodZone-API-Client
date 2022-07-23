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

    defaultHeaders = [
        {name: "Accept", value: "application/json"}
    ];

    protected requestParams: Array<{name: string, value: string}> = [];

    protected requestHeaders = new Headers();

    constructor() {
        this.defaultHeaders.forEach(header => {
            this.requestHeaders.set(header.name, header.value);
        });
    }

    async fetchData() {
        let url = FoodZone.Config.ApiServerUrl + this.path;
        let requestBody: string | null = null;

        if (this.method == "GET") {
            url += "?";
            this.requestParams.forEach(param => {
                url += param.name + "=" + param.value + "&";
            });
            url.slice(0, -1)
        }
        else if (this.method == "POST") {
            let newRequestBody: LooseObject = {};
            this.requestParams.forEach(param => {
                newRequestBody[param.name] = param.value;
            });
            requestBody = JSON.stringify(newRequestBody);
        }

        var response = await fetch(url, {
            method: this.method,
            headers: this.requestHeaders,
            body: requestBody
        });

        return response;
    }
}