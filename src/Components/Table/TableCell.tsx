import { Aula } from '.';

interface TableCellProps {
	aula: Aula;
	isToday?: boolean;
}

export default ({ aula, isToday }: TableCellProps) => {
	return (
		<td className={isToday ? 'today-table-cell' : 'table-cell'}>
			<div className='table-cell-content'>
				<div className='table-cell-content-title'>{aula.sigla}</div>
				<div className='table-cell-content-subtitle'>{aula.nome}</div>
				<div className='table-cell-content-subtitle'>
					<b>Prof:</b> {aula.professor}
				</div>
				<div className='table-cell-content-subtitle'>
					<b>Sala:</b> {aula.sala}
				</div>
				<a href={aula.teamsURL} target='_blank' rel='noreferrer'>
					<div className='table-cell-content-subtitle'>Equipe no Teams</div>
				</a>
			</div>
		</td>
	);
};
