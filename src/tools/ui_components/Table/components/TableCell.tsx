import { TableCell as MaterialTableCell } from "@mui/material";
import React, { FC } from "react";

interface Props {
  width?: number;
}

const TableCell: FC<Props> = ({ width, children }) => {
  return (
    <MaterialTableCell
      style={{
        height: "100%",
        width,
        paddingInline: 4,
      }}
    >
      {children}
    </MaterialTableCell>
  );
};

export default TableCell;
