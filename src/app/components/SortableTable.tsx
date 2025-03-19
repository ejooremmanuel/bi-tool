"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TableSortLabel,
  TablePagination,
} from "@mui/material";

interface Data {
  id: number;
  name: string;
  age: number;
  country: string;
}

const initialData: Data[] = [
  { id: 1, name: "Alice", age: 28, country: "USA" },
  { id: 2, name: "Bob", age: 34, country: "Canada" },
  { id: 3, name: "Charlie", age: 22, country: "UK" },
  { id: 4, name: "David", age: 30, country: "Germany" },
  { id: 5, name: "Eve", age: 26, country: "France" },
];

export default function SortableFilterableTable() {
  const [filter, setFilter] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Data | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle Sorting
  const handleSort = (column: keyof Data) => {
    const isAsc = sortColumn === column && sortDirection === "asc";
    setSortColumn(column);
    setSortDirection(isAsc ? "desc" : "asc");
  };

  // Filter and Sort Data
  const filteredData = initialData
    .filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (!sortColumn) return 0;
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
      }
      return sortDirection === "asc"
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });

  // Handle Pagination
  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className="p-4">
      {/* Filter Input */}
      <TextField
        label="Filter by Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === "name"}
                  direction={sortColumn === "name" ? sortDirection : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === "age"}
                  direction={sortColumn === "age" ? sortDirection : "asc"}
                  onClick={() => handleSort("age")}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "inherit",
                  }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.country}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
