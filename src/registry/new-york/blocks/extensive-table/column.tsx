"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Accessibility, Book, SwitchCamera, Tv } from "lucide-react";

// --- Example Type ---
type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  createdAt: string;
};

// --- Example Columns ---
export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    },
  },
];

// --- Example Data ---
export const exampleProducts: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    createdAt: "2024-06-01",
  },
  {
    id: "2",
    name: "T-Shirt",
    price: 25,
    category: "Clothing",
    createdAt: "2024-06-05",
  },
  {
    id: "3",
    name: "Water Bottle",
    price: 15.5,
    category: "Accessories",
    createdAt: "2024-06-10",
  },
  {
    id: "4",
    name: "Book",
    price: 12.99,
    category: "Books",
    createdAt: "2024-06-15",
  },
];

// --- Example Data ---

export const productCategories = [
  {
    label: "Books",
    value: "Books",
    icon: Book,
  },
  {
    label: "Accessories",
    value: "Accessories",
    icon: Accessibility,
  },
  {
    label: "Clothing",
    value: "Clothing",
    icon: SwitchCamera,
  },
  {
    label: "Electronics",
    value: "Electronics",
    icon: Tv,
  },
];
