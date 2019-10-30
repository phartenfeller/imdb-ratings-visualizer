import React from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination, useSortBy } from 'react-table';

const nextText = (
  <span>
    <span style={{ verticalAlign: 'middle' }}>Next</span>
    <i className="material-icons pagination-icon">keyboard_arrow_right</i>
  </span>
);

const previousText = (
  <span>
    <i className="material-icons pagination-icon left-pagination-icon">
      keyboard_arrow_left
    </i>
    <span>Previous</span>
  </span>
);

const Table = ({ data, columns, defaultSorted, defaultPageSize }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
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
    <div className="w-full card">
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
                    {column.render('Header')}{' '}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="material-icons align-middle">
                            arrow_drop_down
                          </i>
                        ) : (
                          <i className="material-icons align-middle">
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
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()}>
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
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <i className="material-icons">keyboard_arrow_left</i>
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <i className="material-icons">keyboard_arrow_right</i>
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
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
  defaultPageSize: PropTypes.number,
};

export default Table;
