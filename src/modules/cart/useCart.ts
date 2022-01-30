import { useCallback, useState, useMemo, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";

import { CartProduct } from "../product/types";
import useCartTable from "./useCartTable";
import { sumItems } from "../../reducers/cart.reducer";

const useCart = () => {

  const dispatch  = useDispatch();

  const cartProductsFromReducer = useSelector((state: any) => state.cart.items);
  const Snackbar = useSelector((state: any) => state.cart.openSnackBar);
  
  const [products, setProducts] = useState<CartProduct[]>([])
  
  const { total, itemCount } = sumItems(cartProductsFromReducer);
  console.log("total: ", total)
  console.log("count: ", itemCount)

  const handleAddProductToCart = useCallback((product: CartProduct) => {
  },[]);

  const { columns, getKeyRow } = useCartTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      if (Snackbar) dispatch({type: 'CLOSE_SNACK'});
    },
    []// eslint-disable-line
    );
    
    useMemo(
      () => {
        setProducts(cartProductsFromReducer);
      },[cartProductsFromReducer]
    );

  return {
    products,
    columns,
    getKeyRow,
    total,
    itemCount
  };
}; 
  
export default useCart;