import { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination, useFilters } from 'react-table';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import FormSelect from 'react-bootstrap/FormSelect';
import ColumnFilter from './ColumnFilter';

const ReactTable = ({ columns, data }) => {
	const [currentData, setCurrentData] = useState([]);
	const [currentColumns, setCurrentColumns] = useState([]);
	const paginationItemsLimit = 5;
	const paginationItems = [1, 2, 3, 4, 5];

	const [itemsSize, setItemsSize] = useState(0);
	const [isPosibleShowAll, setIsPosibleShowAll] = useState(true);
	const [separatorAtEnd, setSeparatorAtEnd] = useState(false);
	const [separatorAtStart, setSeparatorAtStart] = useState(false);
	const [separatorAtAround, setSeparatorAtAround] = useState(false);

	useEffect(() => {
		setCurrentColumns(columns);
	}, [columns]);

	useEffect(() => {
		setCurrentData(data);
		setItemsSize(data.length);
	}, [data]);

	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
			disableFilters: true,
		};
	}, []);

	// const initialState = { hiddenColumns: ['id'] };

	const tableInstance = useTable(
		{
			columns: currentColumns,
			data: currentData,
			defaultColumn,
			// initialState
		},
		useFilters,
		usePagination,
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		prepareRow,
		pageOptions,
		state: { pageIndex, pageSize },
		gotoPage,
		pageCount,
		setPageSize,
	} = tableInstance;

	useEffect(() => {
		setIsPosibleShowAll(pageCount <= paginationItemsLimit);
	}, [pageCount]);

	useEffect(() => {
		setSeparatorAtEnd(pageIndex < paginationItemsLimit);
	}, [pageIndex]);

	useEffect(() => {
		const currentPage = pageIndex + 1;
		const diffPageCountToLimit = pageCount - paginationItemsLimit;

		const showSeparatorAtAround =
			currentPage >= paginationItemsLimit &&
			pageCount > paginationItemsLimit &&
			pageCount > currentPage;

		const showSeparatorAtStart =
			pageIndex > diffPageCountToLimit &&
			diffPageCountToLimit > paginationItemsLimit;

		setSeparatorAtAround(showSeparatorAtAround);
		setSeparatorAtStart(showSeparatorAtStart);
	}, [pageIndex, pageCount]);

	return (
		<>
			<Table responsive striped bordered hover size='sm' {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()} className={column?.className}>
									{column.render('Header')}
									<div>{column.canFilter ? column.render('Filter') : null}</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => (
									<td
										{...cell.getCellProps()}
										className={cell.column?.className}
									>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</Table>

			{currentData.length > 10 && (
				<div className='d-flex justify-content-between align-items-center flex-wrap'>
					{pageCount > 0 && (
						<div className='d-flex justify-content-between align-items-center py-1'>
							<div className='pe-2'>
								Página
								<span className='fw-bold'> {pageIndex + 1}</span> de
								<span className='fw-bold'> {pageCount}</span>. Total
								<span className='fw-bold'> {itemsSize}</span> registros
							</div>
							<FormSelect
								size='sm'
								className='w-auto'
								value={pageSize}
								onChange={e => {
									setPageSize(Number(e.target.value));
								}}
							>
								{[10, 20, 30, 40, 50].map(pagingSize => (
									<option key={pagingSize} value={pagingSize}>
										{pagingSize}
									</option>
								))}
							</FormSelect>
						</div>
					)}

					{pageCount > 1 && (
						<Pagination size='sm' className='pagination mb-0 ms-auto'>
							<Pagination.First
								onClick={() => gotoPage(0)}
								disabled={!canPreviousPage}
							/>
							<Pagination.Prev
								onClick={() => previousPage()}
								disabled={!canPreviousPage}
							/>
							{isPosibleShowAll &&
								pageOptions.map(pageNumber => (
									<Pagination.Item
										key={pageNumber}
										active={pageNumber === pageIndex}
										onClick={() => gotoPage(pageNumber)}
									>
										{pageNumber + 1}
									</Pagination.Item>
								))}
							{separatorAtEnd &&
								!separatorAtAround &&
								!isPosibleShowAll &&
								paginationItems.map((pageNumber, i) => {
									const currentPage = pageNumber - 1;

									return (
										<Pagination.Item
											key={pageNumber}
											active={currentPage === pageIndex}
											onClick={() => gotoPage(currentPage)}
										>
											{pageNumber}
										</Pagination.Item>
									);
								})}
							{separatorAtEnd && !separatorAtAround && !isPosibleShowAll && (
								<>
									<Pagination.Ellipsis disabled />
									<Pagination.Item onClick={() => gotoPage(pageCount - 1)}>
										{pageCount}
									</Pagination.Item>
								</>
							)}

							{separatorAtAround && !separatorAtStart && !isPosibleShowAll && (
								<>
									<Pagination.Item onClick={() => gotoPage(0)}>
										1
									</Pagination.Item>
									<Pagination.Ellipsis disabled />

									<Pagination.Item onClick={() => gotoPage(pageIndex - 1)}>
										{pageIndex}
									</Pagination.Item>
									<Pagination.Item active onClick={() => gotoPage(pageIndex)}>
										{pageIndex + 1}
									</Pagination.Item>
									<Pagination.Item onClick={() => gotoPage(pageIndex + 1)}>
										{pageIndex + 2}
									</Pagination.Item>

									<Pagination.Ellipsis disabled />
									<Pagination.Item onClick={() => gotoPage(pageCount - 1)}>
										{pageCount}
									</Pagination.Item>
								</>
							)}

							{separatorAtStart && (
								<>
									<Pagination.Item onClick={() => gotoPage(0)}>
										1
									</Pagination.Item>
									<Pagination.Ellipsis disabled />
								</>
							)}

							{separatorAtStart &&
								paginationItems.map((pageNumber, i) => {
									const currentPage =
										pageCount - (paginationItemsLimit - i) + 1;
									const activePage = pageIndex + 1;

									return (
										<Pagination.Item
											key={pageNumber}
											active={currentPage === activePage}
											onClick={() => gotoPage(currentPage - 1)}
										>
											{currentPage}
										</Pagination.Item>
									);
								})}

							<Pagination.Next
								onClick={() => nextPage()}
								disabled={!canNextPage}
							/>
							<Pagination.Last
								onClick={() => gotoPage(pageCount - 1)}
								disabled={!canNextPage}
							/>
						</Pagination>
					)}
				</div>
			)}
		</>
	);
};

export default ReactTable;
