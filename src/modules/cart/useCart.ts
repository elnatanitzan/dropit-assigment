import { useCallback, useState, useMemo, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";

import { CartProduct } from "../product/types";
import useFlag from "../../tools/hooks/useFlag";
import useCartTable from "./useCartTable";
import { sumItems } from "../../reducers/cart.reducer";

const useCart = () => {

  const dispatch  = useDispatch();

  const cartProductsFromReducer = useSelector((state: any) => state.cart.items);
  
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
      
    },
    []
    // eslint-disable-line
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