import { useMemo } from 'react';
import Form from 'react-bootstrap/Form';

const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter, preFilteredRows } = column;
	const count = preFilteredRows?.length ?? 0;

	return (
		<Form.Control
			className='form-control-xs'
			value={filterValue || ''}
			onChange={e => {
				setFilter(e.target.value || undefined);
			}}
			placeholder={`Buscar ${count} registros...`}
		/>
	);
};

function SelectColumnFilter({
	column: { filterValue, setFilter, preFilteredRows, id },
}) {
	// Calculate the options for filtering
	// using the preFilteredRows
	const options = useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach(row => {
			options.add(row.values[id]);
		});
		return [...options.values()];
	}, [id, preFilteredRows]);

	// Render a multi-select box
	return (
		<Form.Select
			className='form-control-xs'
			value={filterValue}
			onChange={e => {
				setFilter(e.target.value || undefined);
			}}
		>
			<option value=''>All</option>
			{options.map((option, i) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</Form.Select>
	);
}

export { ColumnFilter, SelectColumnFilter };

export default ColumnFilter;
