import axios from "axios";
import { FoodZone } from "..";
import { FoodZoneOptions } from "../models/FoodZoneOptions";

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

    protected requiresAuth = false;

    defaultHeaders = [
        {name: "Accept", value: "application/json"}
    ];

    protected requestParams: Record<string, any> = {};

    protected pathParams: Record<string, any> = {};

    protected requestHeaders: Record<string, string | number | boolean> = {};

    constructor() {
        this.defaultHeaders.forEach(header => {
            this.requestHeaders[header.name] = header.value;
        });
    }

    buildUrl() {
        let fullUrl = (this.useApiServer ? FoodZone.Config.ApiServerUrl : FoodZone.Config.ServerUrl)
        + this.path;

        for (var key in this.pathParams) {
            var value = this.pathParams[key];
            fullUrl = fullUrl.replace("{" + key + "}", value);
        }

        return fullUrl;
    }

    async postForm(options: FoodZoneOptions) {
        let url = this.buildUrl();

        if(this.requiresAuth && FoodZone.Config.AuthorizationToken) {
            this.requestHeaders["Authorization"] = FoodZone.Config.AuthorizationToken;
        }

        function onUploadProgress(progressEvent: any) {
            if (!options.onProgress) return;
            let uploadProgress =  Math.round((progressEvent.loaded / progressEvent.total)*100);
            options.onProgress(uploadProgress);
        }

        // we are not tracking download progress, because it can only be used for large files

        var response = await axios.postForm(url, this.requestParams, {
            headers: this.requestHeaders,
            withCredentials: true,
            onUploadProgress
        })

        return response;
    }

    async fetchData() {
        let url = this.buildUrl();

        if (this.method == "GET") {
            //url += "?";
            /*this.requestParams.forEach(param => {
                url += param.name + "=" + param.value + "&";
            });*/
            //url.slice(0, -1)
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