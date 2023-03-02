import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import MobileTable from './Components/MobileTable';
import Table from './Components/Table';
import Title from './Components/Title';

export default function App() {
	const detectScreenSize = () => {
		const width = window.innerWidth;
		return width < 768;
	};

	const [isMobile, setIsMobile] = useState(detectScreenSize());

	window.addEventListener('resize', () => setIsMobile(detectScreenSize()));

	return (
		<div className='App'>
			<Title />
			{isMobile ? <MobileTable /> : <Table />}
			<Footer />
		</div>
	);
}
