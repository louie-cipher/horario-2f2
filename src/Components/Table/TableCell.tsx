interface TableCellProps {
	sigla: string;
	nome: string;
	professor: string;
	sala: string;
	isToday?: boolean;
	teamsURL?: string;
}

export default ({ sigla, nome, professor, sala, isToday, teamsURL }: TableCellProps) => {
	return (
		<td className={isToday ? 'today-table-cell' : 'table-cell'}>
			<div className='table-cell-content'>
				<div className='table-cell-content-title'>{sigla}</div>
				<div className='table-cell-content-subtitle'>{nome}</div>
				<div className='table-cell-content-subtitle'>
					<b>Prof:</b> {professor}
				</div>
				<div className='table-cell-content-subtitle'>
					<b>Sala:</b> {sala}
				</div>
				{teamsURL && (
					<a href={teamsURL} target='_blank' rel='noreferrer'>
						<div className='table-cell-content-subtitle'>Equipe no Teams</div>
					</a>
				)}
			</div>
		</td>
	);
};
