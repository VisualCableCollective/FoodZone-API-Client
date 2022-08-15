import { IRoute } from "./IRoute";

export class DeleteProductCategory extends IRoute<boolean> {
    path = "seller/categories/{categoryId}";

    method = "DELETE";

    protected requiresAuth = true;

    async getData(id: string) {
        this.pathParams["categoryId"] = id;

        const data = await this.fetchData();

        return data.status == 204;
    }

    constructor() {
        super();
    }
}
