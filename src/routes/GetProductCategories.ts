import { ProductCategory } from "../models/ProductCategory";
import { GetProductCategoriesResponse } from "../models/responses/GetProductCategoriesResponse";
import { IRoute } from "./IRoute";

export class GetProductCategories extends IRoute<GetProductCategoriesResponse> {
    path = "seller/categories";

    method = "GET";

    async getData() {
        const data = await this.fetchData();
        const json = await data.data;

        let returnObj = new GetProductCategoriesResponse();
        json.forEach((category: any) => {
            let item = new ProductCategory();
            item.id = category.id;
            item.name = category.name;
            item.thumbnailUrl = category.thumbnail_url;
            item.productsCount = category.products_count;
            item.createdAt = new Date(category.created_at);
            item.updatedAt = new Date(category.updated_at);
            returnObj.categories.push(item);
        })

        return returnObj;
    }

    constructor() {
        super();
    }
}
