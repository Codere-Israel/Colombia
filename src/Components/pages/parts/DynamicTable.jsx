import React from 'react';

function DynamicTable({ table }) {
	const { headers, rows } = table;

	return (
		<div>
			<table className="mb-3 table table-dark table-striped table-bordered table-hover" style={{ backgroundColor: 'transparent' }}>
				{headers && headers.length > 0 && (
					<thead>
					<tr>
						{headers.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
					</thead>
				)}
				<tbody>
				{rows.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{Object.entries(row).map(([key, value], columnIndex) => {
							// do not display IDs
							if (key === 'id') {
								return null;
							}
							return <td key={columnIndex}>{value}</td>;
						})}
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
}

export default DynamicTable;
