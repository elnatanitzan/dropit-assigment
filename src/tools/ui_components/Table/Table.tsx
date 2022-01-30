import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";

import TableCell from "./components/TableCell";
import TableRow from "./components/TableRow";
import { sumItems } from "../../../reducers/cart.reducer";
import { GetKeyRow, TableColumn } from "./types";
import useCart from "../../../modules/cart/useCart";

interface Props<Item> {
  columns: TableColumn<Item>[];
  data: Item[];
  getKeyRow: GetKeyRow<Item>;
}

function Table<Item>({ data, columns, getKeyRow, }: Props<Item>) {
  
  const { total, itemCount } = useCart();

  return (
    <TableContainer component={Paper}>
      <MaterialTable aria-label="simple table">
        <TableHead>
            <TableRow >
              {columns.map(({ key, title, width }) => (
                <TableCell key={key.toString()} width={width}>
                  {title}
                </TableCell>
              ))}
            </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (    
              <TableRow key={getKeyRow( item)}>
                  {columns.map(({ key, width, renderCell }) => (
                    <TableCell key={key.toString()} width={width}>
                      {renderCell(item)}
                    </TableCell>
                  ))}
              </TableRow>
          ))}
          {data.find((item: any) => item.quantity) && (
            <TableRow key="summary">
              <TableCell key="sumProducts"><p>Total Products: </p><h4>{data.length}</h4></TableCell>
              <TableCell key="sumItems"><p>Total Items: </p><h4>{itemCount}</h4></TableCell>
              <TableCell key="sumPayment"><p>Total Payment: </p><h4>{total}</h4></TableCell>
            </TableRow>
          )}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

export default Table;
