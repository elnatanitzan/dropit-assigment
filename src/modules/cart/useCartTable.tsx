import { Tooltip } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import routesApp from "../../contexts/navigation/routesApp";
import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";
import { CartProduct } from "../product/types";

interface Props {
  onAddItem: (item: CartProduct) => void;
}

function useCartTable({ onAddItem }: Props) {

  const dispatch  = useDispatch();

  const history = useHistory();

  const handleId = (item: any) => {
    const productId = item.id;
    history.push(routesApp.getProduct({productId}));
    dispatch({type: 'SEND_PRODUCT', item: item.id});
  }

  const columns: TableColumn<CartProduct>[] = useMemo(
    () => [
      {
        key: "id",
        title: "ID",
        renderCell: (item) => <a>{item.id}</a>,
      },
      {
        key: "image",
        title: "Image",
        renderCell: (item) => (
          <img
            className="HoverPointer"
            onClick={() => handleId(item)}
            alt=""
            src={item.image}
            style={{ width: 60, objectFit: "contain" }}
          />
        ),
      },
      {
        key: "title",
        title: "Title",
        renderCell: (item) => <a className="HoverPointer" onClick={() => handleId(item)}>{item.title}</a>,
      },
      {
        key: "price",
        title: "Price",
        renderCell: (item) => <a>{item.price}</a>,
      },
      {
        key: "quantity",
        title: "Quantity",
        renderCell: (item) => <a>{item.quantity}</a>,
      },
      {
        key: "total price",
        title: "Total price",
        renderCell: (item) => <a>{item.totalPrice}</a>,
      },
      // {
      //   key: "action",
      //   title: "",
      //   renderCell: (item) => (
      //     <div className="tooltip" style={{ cursor: "pointer", zIndex: '10' }} onClick={ () => onAddItem(item)}>
      //       <Tooltip title={"Add to Cart"}>
      //         <AddToCartIcon/>
      //       </Tooltip>
      //     </div>
      //   ),
      // },
    ],[onAddItem]
  );


  const getKeyRow: GetKeyRow<CartProduct> = useCallback(
      (item) => item.id.toString(),
    []
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCartTable;
