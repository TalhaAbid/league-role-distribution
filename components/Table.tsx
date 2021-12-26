import React from "react";
import {
  ColumnGroup,
  HeaderGroup,
  Row,
  TableInstance,
  useSortBy,
  useTable,
} from "react-table";

interface TablePropTypes {
  columns: Array<{ Header: string; accessor: string }>;
  data: any;
}

const Table = ({ columns, data }: TablePropTypes) => {
  const tableInstance: TableInstance = useTable(
    { columns: columns, data: data },
    useSortBy
  );
  console.log(tableInstance.headerGroups);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  const firstPage = rows.slice(0, 30);
  return (
    <table
      {...getTableProps()}
      className="border border-black table-auto bg-emerald-200"
    >
      <thead>
        {
          // loop over the header rows

          headerGroups.map((headerGroup: HeaderGroup) => (
            // apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // loop over the header in each row
                headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {
                      // Render the header
                      column.render("Header")
                    }
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
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
          firstPage.map((row: Row) => {
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
