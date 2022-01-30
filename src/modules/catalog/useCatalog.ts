import { useCallback, useState, useMemo, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";

import { API } from "../../contexts/api";
import { CatalogProduct } from "../product/types";
import useFlag from "../../tools/hooks/useFlag";
import useCatalogTable from "./useCatalogTable";

const useCatalog = () => {

  const dispatch  = useDispatch();

  const productsFromReducer = useSelector((state: any) => state.catalog.products);
  // const cartProducts = useSelector((state: any) => state.cart.items);

  const [products, setProducts] = useState<CatalogProduct[]>([])
  
  const [isLoading, onEndLoading] = useFlag(true);

  const handleAddProductToCart = useCallback((product: CatalogProduct) => {
    dispatch({type: 'ADD_ITEM_TO_CART', product: product});
  },[dispatch]);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      API.product.getAll()
      .then((res: any) => {
        dispatch({type: 'GET_INITIAL', products: res})
      })
      .finally(onEndLoading);
    },
    []
    // eslint-disable-line
    );
    
    useMemo(
      () => {
        setProducts(productsFromReducer);
      },[productsFromReducer]
    );

  return {
    isLoading,
    products,
    columns,
    getKeyRow,
  };
}; 
  
export default useCatalog;