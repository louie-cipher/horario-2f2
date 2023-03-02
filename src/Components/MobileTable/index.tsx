import aulasJSON from '../../aulas.json';
import TableCell from '../Table/TableCell';
import moment from 'moment';
import { Aula } from '../Table';
import './styles.css';

export default () => {
	const aulas: Aula[] = aulasJSON.aulas;

	moment.locale('pt-br');
	const todayWeekday = moment().weekday() + 1;

	const tableCellClass = (number: number) =>
		todayWeekday === number ? 'mobile-today-table-day' : 'mobile-table-day';

	return (
		<table className='table'>
			<tbody>
				<tr>
					<th></th>
					<th className='mobile-table-header'>13:30<br/>-<br/>15:35</th>
					<th className='mobile-interval-table-header'>15:35<br/>-<br/>15:55</th>
					<th className='mobile-table-header'>15:55<br/>-<br/>18:00</th>
				</tr>

				<tr>
					<td className={tableCellClass(2)}>Segunda-feira</td>
					<TableCell aula={aulas[0]} isToday={todayWeekday === 2} />
					<td className='mobile-interval-table-cell'></td>
					<TableCell aula={aulas[1]} isToday={todayWeekday === 2} />
				</tr>

				<tr>
					<td className={tableCellClass(3)}>Terça-feira</td>
					<TableCell aula={aulas[2]} isToday={todayWeekday === 3} />
					<td className='mobile-interval-table-cell'></td>
					<TableCell aula={aulas[3]} isToday={todayWeekday === 3} />
				</tr>

				<tr>
					<td className={tableCellClass(4)}>Quarta-feira</td>
					<TableCell aula={aulas[4]} isToday={todayWeekday === 4} />
					<td className='mobile-interval-table-cell'></td>
					<TableCell aula={aulas[5]} isToday={todayWeekday === 4} />
				</tr>

				<tr>
					<td className={tableCellClass(5)}>Quinta-feira</td>
					<TableCell aula={aulas[6]} isToday={todayWeekday === 5} />
					<td className='mobile-interval-table-cell'></td>
					<TableCell aula={aulas[7]} isToday={todayWeekday === 5} />
				</tr>

				<tr>
					<td className={tableCellClass(6)}>Sexta-feira</td>
					<TableCell aula={aulas[8]} isToday={todayWeekday === 6} />
					<td className='mobile-interval-table-cell'></td>
					<TableCell aula={aulas[9]} isToday={todayWeekday === 6} />
				</tr>

			</tbody>
		</table>
	);
};
