import { CreateResponseBase } from "../models/responses/CreateResponseBase";
import { IRoute } from "./IRoute";

export class CreateProductCategory extends IRoute<CreateResponseBase> {
    path = "seller/categories";

    method = "POST";

    async getData(name: string, thumbnail: File) {
        this.requestParams["thumbnail"] = thumbnail;
        this.requestParams["name"] = name;

        const data = await this.fetchData();
        const json = await data.data;

        return json as CreateResponseBase;
    }

    constructor() {
        super();
    }
}
