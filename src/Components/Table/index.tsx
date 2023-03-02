import TableCell from './TableCell';
import aulasJSON from '../../aulas.json';
import moment from 'moment';
import './styles.css';

export interface Aula {
	sigla: string;
	nome: string;
	professor: string;
	sala: string;
	teamsURL: string;
}

export default () => {
	const aulas: Aula[] = aulasJSON.aulas;

	const aulasPreIntervalo = aulas.filter((_, i) => i % 2 === 0);
	const aulasPosIntervalo = aulas.filter((_, i) => i % 2 !== 0);

	moment.locale('pt-br');
	const todayWeekday = moment().weekday() + 1;

	return (
		<table className='table'>
			<tbody>
				<TableHeader todayWeekday={todayWeekday} />

				<tr className='table-column'>
					<td className='table-time'>13:30 - 15:35</td>
					{aulasPreIntervalo.map((aula, i) => (
						<TableCell key={i} aula={aula} isToday={i === todayWeekday - 2} />
					))}
				</tr>

				<tr className='table-column'>
					<td className='table-time'>15:35 - 15:55</td>
					<td className='interval-table-cell' colSpan={5}>
						<div className='table-cell-content'>
							<div className='table-cell-content-title'>Intervalo</div>
						</div>
					</td>
				</tr>

				<tr className='table-column'>
					<td className='table-time'>15:55 - 18:00</td>
					{aulasPosIntervalo.map((aula, i) => (
						<TableCell key={i} aula={aula} isToday={i === todayWeekday - 2} />
					))}
				</tr>
			</tbody>
		</table>
	);
};

const TableHeader = ({ todayWeekday }: { todayWeekday: number }) => {
	const tableHeaderClass = (number: number) =>
		todayWeekday === number ? 'today-table-header' : 'table-header';

	return (
		<tr>
			<th className='table-header'>Horário</th>
			<th className={tableHeaderClass(2)}>Segunda-feira</th>
			<th className={tableHeaderClass(3)}>Terça-feira</th>
			<th className={tableHeaderClass(4)}>Quarta-feira</th>
			<th className={tableHeaderClass(5)}>Quinta-feira</th>
			<th className={tableHeaderClass(6)}>Sexta-feira</th>
		</tr>
	);
};
