import { FoodZoneOptions } from "../models/FoodZoneOptions";
import { CreateResponseBase } from "../models/responses/CreateResponseBase";
import { IRoute } from "./IRoute";

export class CreateProductCategory extends IRoute<CreateResponseBase> {
    path = "seller/categories";

    method = "POST";

    protected requiresAuth = true;

    async getData(name: string, thumbnail: File, options: FoodZoneOptions) {
        this.requestParams["thumbnail"] = thumbnail;
        this.requestParams["name"] = name;

        const data = await this.postForm(options);
        const json = await data.data;

        return json as CreateResponseBase;
    }

    constructor() {
        super();
    }
}
