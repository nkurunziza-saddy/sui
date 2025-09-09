import { exampleProducts, productColumns } from "./column";
import { DataTable } from "./data-table";

export const ProductsTable = () => {
  return <DataTable columns={productColumns} data={exampleProducts} />;
};
