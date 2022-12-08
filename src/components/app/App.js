import { lazy, Suspense } from 'react';
import Spiner from '../spiner/Spiner';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import './app.scss';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));

function App() {
	return (
		<main className="app">
			<ErrorBoundary>
				<Suspense fallback={<Spiner />}>
					<MainPage />
				</Suspense>
			</ErrorBoundary>
		</main>
	);
}

export default App;
