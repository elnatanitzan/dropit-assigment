export interface TableColumn<Item> {
  key: keyof Item | string;
  title: string;
  width?: number;
  renderCell: (item: Item) => JSX.Element;
}

export type GetKeyRow<Item> = (item: Item) => string;
