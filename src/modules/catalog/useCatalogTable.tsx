import { Tooltip } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import routesApp from "../../contexts/navigation/routesApp";
import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";
import { AddToCartIcon } from "../../tools/icons";
import { CatalogProduct } from "../product/types";

interface Props {
  onAddItem: (item: CatalogProduct) => void;
}

function useCatalogTable({ onAddItem }: Props) {

  const dispatch  = useDispatch();

  const history = useHistory();

  const handleId = (item: any) => {
    const productId = item.id;
    history.push(routesApp.getProduct({productId}));
    dispatch({type: 'SEND_PRODUCT', item: item.id});
  }

  const columns: TableColumn<CatalogProduct>[] = useMemo(
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
        key: "action",
        title: "",
        renderCell: (item) => (
          <div className="tooltip" style={{ cursor: "pointer", zIndex: '10' }} onClick={ () => onAddItem(item)}>
            <Tooltip title={"Add to Cart"}>
              <AddToCartIcon/>
            </Tooltip>
          </div>
        ),
      },
    ],[onAddItem]
  );


  const getKeyRow: GetKeyRow<CatalogProduct> = useCallback(
      (item) => item.id.toString(),
    []
  );

  return {
    columns,
    getKeyRow,
  };
}

export default useCatalogTable;
