import { FoodZone } from "..";

export abstract class IRoute<ReturnType> {
    /**
     * Path after the ApiServerUrl
     */
    abstract path: string;

    abstract method: string;

    defaultHeaders = [
        {name: "Accept", value: "application/json"}
    ];

    protected requestHeaders = new Headers();

    constructor() {
        this.defaultHeaders.forEach(header => {
            this.requestHeaders.set(header.name, header.value);
        });
    }

    async fetchData() {
        var response = await fetch(FoodZone.Config.ApiServerUrl + this.path, {
            method: this.method,
            headers: this.requestHeaders
        });

        return response;
    }
}