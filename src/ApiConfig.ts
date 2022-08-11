import { Environment } from "./enums/Environment";

export class ApiConfig {
    private environment: Environment = Environment.Production;
    devUrl = "http://localhost:8000/";
    prodUrl = "https://api.foodzone.eu/v1/";
    ApiServerUrl = "";
    ServerUrl = "";

    constructor() {
        this.setEnvironment("production");
    }

    /**
     * Set the environment for the API client.
     * @param env Possible values are: "development" & "production". Defaults to production.
     */
    setEnvironment(env: string) {
        switch (env) {
            case "development":
                this.environment = Environment.Development;
                this.ApiServerUrl = this.devUrl + "api/";
                this.ServerUrl = this.devUrl;
                break;
        
            case "production":
            default:
                this.environment = Environment.Production;
                this.ApiServerUrl = this.prodUrl;
                this.ServerUrl = this.prodUrl;
                break;
        }
    }
}