import { Tooltip } from "@mui/material";
import React, { useCallback, useMemo } from "react";

import { GetKeyRow, TableColumn } from "../../tools/ui_components/Table/types";
import { AddToCartIcon } from "../../tools/icons";

import { CatalogProduct } from "../product/types";

interface Props {
  onAddItem: (item: CatalogProduct) => void;
}

function useCatalogTable({ onAddItem }: Props) {
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
            alt=""
            src={item.image}
            style={{ width: 60, objectFit: "contain" }}
          />
        ),
      },
      {
        key: "title",
        title: "Title",
        renderCell: (item) => <a>{item.title}</a>,
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
          <div style={{ cursor: "pointer" }} onClick={() => onAddItem(item)}>
            <Tooltip title={"Add to Cart"}>
              <AddToCartIcon />
            </Tooltip>
          </div>
        ),
      },
    ],
    [onAddItem]
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
