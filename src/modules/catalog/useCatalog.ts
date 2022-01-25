import { useCallback, useState, useMemo } from "react";
import { useSelector } from 'react-redux';

import { CatalogProduct } from "../product/types";
import useFlag from "../../tools/hooks/useFlag";

import useCatalogTable from "./useCatalogTable";

const useCatalog = () => {

  const productsFromReducer = useSelector((state: any) => state.catalog.products)
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

  useMemo(
    () => {
      setProducts(productsFromReducer);
      onEndLoading()
    },[productsFromReducer, onEndLoading]
    );

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
  };
}; 
  
export default useCatalog;