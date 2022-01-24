import {CatalogProduct} from "../../modules/product/types";

const API = {
	product: {
		getAll: async (): Promise<CatalogProduct[]> =>
			fetch("db/products.json", {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}).then(
				(response) => response.json()
			),
	},
};

export {API};
