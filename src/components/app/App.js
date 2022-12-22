import { useState, lazy, Suspense } from 'react';
import Spiner from '../spiner/Spiner';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import OffNav from '../offNav/OffNav';
import MenuNavigation from '../menuNavigation/MenuNavigation';

import { lang } from '../../data';
import './app.scss';
const MainPage = lazy(() => import('../pages/mainPage/MainPage'));

function App() {
	const { ua, ru } = lang;
	const [dataLang, setData] = useState(ua);
	const [show, setShow] = useState(false);
	const setLang = (code) => {
		if (code === 'UA') setData(ua);
		if (code === 'RU') setData(ru);
	};
	return (
		<main className="app">
			<ErrorBoundary>
				<Suspense fallback={<Spiner />}>
					<OffNav show={show} setShow={setShow} dataLang={dataLang} setLang={setLang} />
					<MenuNavigation show={setShow} dataLang={dataLang} setLang={setLang} />
					<MainPage dataLang={dataLang} />
				</Suspense>
			</ErrorBoundary>
		</main>
	);
}

export default App;
