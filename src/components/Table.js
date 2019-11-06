import PropTypes from 'prop-types';
import React from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';

const disabledClasses = isDisabled => {
  return isDisabled ? 'text-gray-700' : '';
};

const Table = ({ data, columns, defaultSorted }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for th active page

    // The rest of these thing are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 1 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="card">
      <div className="mx-8">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    className="align-middle"
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <span className="font-normal text-lg text-purple-300 uppercase">
                      {column.render('Header')}{' '}
                    </span>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="material-icon align-middle">
                            arrow_drop_down
                          </i>
                        ) : (
                          <i className="material-icon align-middle">
                            arrow_drop_up
                          </i>
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(
              (row, i) =>
                prepareRow(row) || (
                  <tr
                    {...row.getRowProps()}
                    className="border-t border-solid border-gray-800 text-gray-500"
                  >
                    {row.cells.map(cell => {
                      return (
                        <td
                          key={cell.id}
                          {...cell.getCellProps()}
                          className="py-3"
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination mt-6">
        <button
          className={'ml-6 px-2 py-1 ' + disabledClasses(!canPreviousPage)}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <i className="material-icons align-middle" style={{ width: '8px' }}>
            keyboard_arrow_left
          </i>
          <i className="material-icons align-middle">keyboard_arrow_left</i>
        </button>
        <button
          className={'px-2 py-1 ' + disabledClasses(!canPreviousPage)}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <i className="material-icons align-middle">keyboard_arrow_left</i>
        </button>
        <span className="mx-8">
          Page
          <input
            className="bg-gray-800 rounded appearance-none border-2 border-gray-800 w-16 py-1 px-2 py-1 mx-3"
            type="number"
            defaultValue={pageIndex + 1}
            value={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            min="1"
            max={pageOptions.length}
          />
          of {pageOptions.length}
        </span>
        <button
          className={'px-2 py-1 ' + disabledClasses(!canNextPage)}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <i className="material-icons align-middle">keyboard_arrow_right</i>
        </button>
        <button
          className="px-2 py-1"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <i className="material-icons align-middle" style={{ width: '8px' }}>
            keyboard_arrow_right
          </i>
          <i className="material-icons align-middle">keyboard_arrow_right</i>
        </button>
        <select
          className="form-select bg-gray-800 border-2 border-gray-800 py-1 float-right mr-6"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>

    // <ReactTable
    //   data={data}
    //   // resolveData={data => data.map(row => row)}
    //   columns={columns}
    //   className="-striped -highlight"
    //   defaultSorted={defaultSorted}
    //   defaultPageSize={defaultPageSize}
    //   pageSizeOptions={[5, 10, 15, 25, 50, 100, 250, 1000]}
    //   nextText={nextText}
    //   previousText={previousText}
    //   minRows={0}
    // />
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  defaultSorted: PropTypes.array,
};

export default Table;
