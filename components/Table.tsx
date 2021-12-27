import React from "react";
import {
  ColumnGroup,
  HeaderGroup,
  Row,
  TableInstance,
  useSortBy,
  useTable,
  usePagination,
  CellProps,
} from "react-table";

interface TablePropTypes {
  columns: Array<{ Header: string; accessor: string }>;
  data: any;
}

const Table = ({ columns, data }: TablePropTypes) => {
  const tableInstance: TableInstance = useTable(
    {
      columns: columns,
      data: data,
      initialState: { pageIndex: 0, pageSize: 30 },
    },
    useSortBy,
    usePagination
  );
  console.log(tableInstance.headerGroups);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // instead of row us page which has the row for current page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
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
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
            page.map((row: Row) => {
              // Prepare Row for display
              prepareRow(row);
              return (
                // Apply row props
                <tr {...row.getRowProps()}>
                  {
                    // loop over cells in row
                    row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>{" "}
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export { Table };
