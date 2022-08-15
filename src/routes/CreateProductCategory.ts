import { FoodZoneOptions } from "../models/FoodZoneOptions";
import { ProductCategory } from "../models/ProductCategory";
import { IRoute } from "./IRoute";

export class CreateProductCategory extends IRoute<ProductCategory> {
    path = "seller/categories";

    method = "POST";

    protected requiresAuth = true;

    async getData(name: string, thumbnail: File, options: FoodZoneOptions) {
        this.requestParams["thumbnail"] = thumbnail;
        this.requestParams["name"] = name;

        const data = await this.postForm(options);
        const json = await data.data;

        let item = new ProductCategory();
        item.id = json.id;
        item.name = json.name;
        item.thumbnailUrl = json.thumbnail_url;
        item.productsCount = 0;
        item.createdAt = new Date(json.created_at);
        item.updatedAt = new Date(json.updated_at);

        return item;
    }

    constructor() {
        super();
    }
}
