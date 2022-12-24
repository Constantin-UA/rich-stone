import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spiner from '../spiner/Spiner';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import OffNav from '../offNav/OffNav';
import MenuNavigation from '../menuNavigation/MenuNavigation';
import { lang, dataImg, dataLinks } from '../../data';
import './app.scss';
const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const SliderPage = lazy(() => import('../pages/sliderPage/SliderPage'));
const ErrorPage = lazy(() => import('../pages/errorPage/ErrorPage'));

function App() {
	const { ua, ru } = lang;
	const [dataLang, setData] = useState(ua);
	const [show, setShow] = useState(false);
	const setLang = (code) => {
		if (code === 'UA') setData(ua);
		if (code === 'RU') setData(ru);
	};
	const { slides } = dataImg;
	const { linksNames } = dataLinks;
	const [page, setPage] = useState('main');
	const changePage = (elem) => {
		setPage(elem);
	};
	return (
		<Router>
			<main className="app">
				<Suspense fallback={<Spiner />}>
					<ErrorBoundary>
						<OffNav
							show={show}
							setShow={setShow}
							dataLang={dataLang}
							setLang={setLang}
							page={page}
							dataLinks={dataLinks}
						/>
						<MenuNavigation
							show={setShow}
							dataLang={dataLang}
							setLang={setLang}
							page={page}
							changePage={changePage}
						/>
					</ErrorBoundary>
					<ErrorBoundary>
						<Routes>
							<Route path="/" element={<MainPage dataLang={dataLang} changePage={changePage} />} />
							{slides.map((item, idx) => {
								return (
									<Route
										path={linksNames[idx]}
										element={
											<SliderPage
												slides={dataImg.slides[idx]}
												title={dataLang.sliderBtns[idx]}
												changePage={changePage}
											/>
										}
										key={idx}
									/>
								);
							})}
							<Route path="*" element={<ErrorPage />} />
						</Routes>
					</ErrorBoundary>
				</Suspense>
			</main>
		</Router>
	);
}

export default App;
