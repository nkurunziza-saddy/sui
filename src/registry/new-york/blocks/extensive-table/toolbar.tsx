"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./view-options";
import { DataTableSearch } from "./search";
import { DataTableDashFilter } from "./faceted-filter";
import { productCategories } from "./column";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DefaultDataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-2">
        <DataTableSearch table={table} placeholder="Filter ..." />
        {table.getColumn("category") && (
          <DataTableDashFilter
            column={table.getColumn("category")}
            title="Categories"
            options={productCategories}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
