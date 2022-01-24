import React, { FC } from "react";

import { TableRow as MaterialTableRow } from "@mui/material";

const TableRow: FC = ({ children }) => {
  return <MaterialTableRow>{children}</MaterialTableRow>;
};

export default TableRow;
