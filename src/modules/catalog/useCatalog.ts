import { useCallback, useEffect, useState } from "react";

import { API } from "../../contexts/api";
import { CatalogProduct } from "../product/types";
import useFlag from "../../tools/hooks/useFlag";

import useCatalogTable from "./useCatalogTable";

const useCatalog = () => {
  const [products, setProducts] = useState<CatalogProduct[]>([])
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    // TODO
    console.log("handleAddProductToCart");
    console.log("product", product);
  }, []);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      API.product.getAll().then(setProducts).finally(onEndLoading);
    },
    []// eslint-disable-line
    );

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
  };
}; 
  
export default useCatalog;
