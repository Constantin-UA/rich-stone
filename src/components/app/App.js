import { lazy, Suspense } from 'react';
import Spiner from '../spiner/Spiner';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import './app.scss';
import { lang } from './data';
const MainPage = lazy(() => import('../pages/mainPage/MainPage'));

function App() {
	const { ua, ru } = lang;
	return (
		<main className="app">
			<ErrorBoundary>
				<Suspense fallback={<Spiner />}>
					<MainPage data={ua.data} />
				</Suspense>
			</ErrorBoundary>
		</main>
	);
}

export default App;
