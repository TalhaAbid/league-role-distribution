import React from "react";
import { TableInstance, useTable } from "react-table";

interface TablePropTypes {
  columns: Array<{ Header: string; accessor: string }>;
  data: any;
}

const Table = ({ columns, data }: TablePropTypes) => {
  const tableInstance: TableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table
      {...getTableProps()}
      className="border border-black table-auto bg-emerald-200"
    >
      <thead>
        {
          // loop over the header rows
          headerGroups.map((headerGroup) => (
            // apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // loop over the header in each row
                headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          // loop over table rows
          rows.map((row) => {
            // Prepare Row for display
            prepareRow(row);
            return (
              // Apply row props
              <tr {...row.getRowProps()}>
                {
                  // loop over cells in row
                  row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export { Table };
