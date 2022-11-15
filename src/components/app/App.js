import { MainPage } from '../pages';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import './app.scss';

function App() {
	return (
		<main className="app">
			<ErrorBoundary>
				<MainPage />
			</ErrorBoundary>
		</main>
	);
}

export default App;
