import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import React from "react";

import TableCell from "./components/TableCell";
import TableRow from "./components/TableRow";

import { GetKeyRow, TableColumn } from "./types";

interface Props<Item> {
  columns: TableColumn<Item>[];
  data: Item[];
  getKeyRow: GetKeyRow<Item>;
}

function Table<Item>({ data, columns, getKeyRow }: Props<Item>) {
  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(({ key, title, width }) => (
              <TableCell key={key.toString()} width={width}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={getKeyRow(item)}>
              {columns.map(({ key, width, renderCell }) => (
                <TableCell key={key.toString()} width={width}>
                  {renderCell(item)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

export default Table;
