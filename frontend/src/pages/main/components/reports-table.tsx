import { ColumnDef, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react";


type Report = {
    id: string;
    preview: string;
    status: "active" | "archived" | "draft";
    name: string;
    database: null;
    apiEndpoint: null;
    createdAt: string;
};

const data: Report[] = [
    {
        id: "1",
        preview: "",
        status: "active",
        name: "Invoicing",
        database: null,
        apiEndpoint: null,
        createdAt: "09-15-2024"
    }
];

const columns: ColumnDef<Report>[] = [
    {
        accessorKey: "id",
        header: () => <></>
    },
    {
        accessorKey: "preview",
        header: () => <></>
    },
    {
        accessorKey: "name",
        header: () => <span>Name</span>
    },
    {
        accessorKey: "database",
        header: () => <span>Database</span>
    },
    {
        accessorKey: "apiEndpoint",
        header: () => <span>API Endpoint</span>
    },
    {
        accessorKey: "createdAt",
        header: () => <span>Created At</span>
    }
]

export default function ReportsTable() {
    // States
    const [sorting, setSorting] = useState<Report>();
    const [globalFilter, setGlobalFilter] = useState<string>("");

    // Hooks
    const reactTable = useReactTable<Report>({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
            globalFilter
        }
    });


    return <>
        
    </>
}