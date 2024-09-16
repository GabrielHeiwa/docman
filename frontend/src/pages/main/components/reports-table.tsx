import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef, ColumnFiltersState, ColumnSort, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { ChevronDown, ChevronUp, ExternalLink, Eye, Filter, Pencil, Plus, Trash, View, X } from "lucide-react";
import { useRef, useState } from "react";


type Report = {
    id: string;
    preview: string;
    status: "active" | "archived" | "draft";
    name: string;
    database: null;
    apiEndpoint: null;
    createdAt: string;
    actions?: null;
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
    },
    {
        id: "2",
        preview: "",
        status: "active",
        name: "SLA",
        database: null,
        apiEndpoint: null,
        createdAt: "09-17-2024"
    },
    {
        id: "3",
        preview: "",
        status: "draft",
        name: "IT Asset Management",
        database: null,
        apiEndpoint: null,
        createdAt: "09-19-2024"
    },
    {
        id: "4",
        preview: "",
        status: "archived",
        name: "HelpDesk Support Open",
        database: null,
        apiEndpoint: null,
        createdAt: "08-10-2024"
    },
    {
        id: "5",
        preview: "",
        status: "archived",
        name: "Cost X Resource Uses",
        database: null,
        apiEndpoint: null,
        createdAt: "06-28-2024"
    },
    {
        id: "6",
        preview: "",
        status: "draft",
        name: "Client Satisfaction Level",
        database: null,
        apiEndpoint: null,
        createdAt: "06-01-2024"
    },
    {
        id: "7",
        preview: "",
        status: "active",
        name: "Network Traffic",
        database: null,
        apiEndpoint: null,
        createdAt: "09-30-2024"
    },
    {
        id: "8",
        preview: "",
        status: "draft",
        name: "Project Status/Deliveries",
        database: null,
        apiEndpoint: null,
        createdAt: "07-25-2024"
    },
    {
        id: "9",
        preview: "",
        status: "active",
        name: "Workers Occupation",
        database: null,
        apiEndpoint: null,
        createdAt: "09-19-2024"
    },
    {
        id: "10",
        preview: "",
        status: "draft",
        name: "Hard Drive Occupation",
        database: null,
        apiEndpoint: null,
        createdAt: "09-02-2024"
    },
    {
        id: "11",
        preview: "",
        status: "draft",
        name: "Draft Report Eleven",
        database: null,
        apiEndpoint: null,
        createdAt: "09-19-2024"
    },
    {
        id: "12",
        preview: "",
        status: "archived",
        name: "Archived Report twelve",
        database: null,
        apiEndpoint: null,
        createdAt: "09-19-2024"
    },
    {
        id: "13",
        preview: "",
        status: "active",
        name: "Active Report threeteen",
        database: null,
        apiEndpoint: null,
        createdAt: "09-19-2024"
    }
];

const columns: ColumnDef<Report>[] = [
    {
        accessorKey: "id",
        header: () => <span>ID</span>,
        enableSorting: true
    },
    {
        accessorKey: "preview",
        header: () => <></>,
        enableSorting: false
    },
    {
        accessorKey: "name",
        header: () => <span>Name</span>,
        enableSorting: true
    },
    {
        accessorKey: "status",
        header: () => <span>Status</span>,
        enableSorting: false
    },
    {
        accessorKey: "database",
        header: () => <span>Database</span>,
        enableSorting: false
    },
    {
        accessorKey: "apiEndpoint",
        header: () => <span>API Endpoint</span>,
        enableSorting: false
    },
    {
        accessorKey: "createdAt",
        header: () => <span>Created At</span>,
        enableSorting: true
    },
    {
        accessorKey: "actions",
        header: () => <span className="flex flex-1 justify-center">Actions</span>,
        enableSorting: false,
        cell: () => <div className="flex gap-x-2 justify-center">
            <Button variant={"ghost"}>
                <ExternalLink className="h-4 w-4"/>
            </Button>

            <Button variant={"default"}>
                <Pencil className="h-4 w-4" />
            </Button>

            <Button variant={"destructive"}>
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    }
];

export default function ReportsTable() {
    // States
    const [sorting, setSorting] = useState<ColumnSort[]>([]);
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 10, //default page size
    });

    // Hooks
    const reactTable = useReactTable<Report>({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        rowCount: data.length,
        state: {
            sorting,
            globalFilter,
            columnFilters,
            pagination,
        }
    });

    // Refs
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Functions
    function handleClearFilters() {
        if (searchInputRef.current) searchInputRef.current.value = "";

        setGlobalFilter("");
        setColumnFilters([]);
    }

    return <div>
        <Card x-chunk="">
            <CardHeader className="flex flex-row justify-between">
                <div>
                    <CardTitle>Report</CardTitle>
                    <CardDescription>
                        Manage your reports.
                    </CardDescription>
                </div>

                <div className="flex gap-x-2">
                    <Input
                        ref={searchInputRef}
                        placeholder="Search..."
                        onChange={ev => setGlobalFilter(ev.target.value)}
                    />

                    <Button
                        variant={"outline"}
                        onClick={handleClearFilters}
                        className="flex flex-row gap-x-2"
                        disabled={!columnFilters.length && !globalFilter.length}
                    >
                        <X className="h-4 w-4" />
                        Clear Filters
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={"outline"}
                                onClick={() => { }}
                                className="flex gap-x-2"
                            >
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => setColumnFilters([{ id: "status", value: "active" }])}
                            >
                                Active
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setColumnFilters([{ id: "status", value: "archived" }])}
                            >
                                Archived
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => setColumnFilters([{ id: "status", value: "draft" }])}
                            >
                                Draft
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        onClick={() => { }}
                        className="flex gap-x-2"
                    >
                        <Plus className="h-4 w-4" />
                        Add Report
                    </Button>
                </div>

            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        {
                            reactTable.getHeaderGroups().map((headerGroup) => (
                                <TableRow
                                    key={headerGroup.id}
                                >
                                    {
                                        headerGroup.headers.map((header) => (<TableHead
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="cursor-pointer"
                                        >
                                            <span className="flex flex-row gap-x-4">
                                                {
                                                    flexRender(header.column.columnDef.header, header.getContext())
                                                }
                                                {
                                                    {
                                                        "asc": <ChevronUp className="h-5 w-5" />,
                                                        "desc": <ChevronDown className="h-5 w-5" />
                                                    }[header.column.getIsSorted() as string]
                                                }
                                            </span>
                                        </TableHead>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableHeader>

                    <TableBody>
                        {reactTable.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>

            <CardFooter>
                {/* <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                </div> */}

                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => reactTable.getCanPreviousPage() ? reactTable.previousPage() : {}}
                                isActive={reactTable.getCanPreviousPage()}
                            />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink isActive={false} href="#">{pagination.pageIndex + 1}</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => reactTable.getCanNextPage() ? reactTable.nextPage() : {}}
                                isActive={reactTable.getCanNextPage()}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    </div>
}