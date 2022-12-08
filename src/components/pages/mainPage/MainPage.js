//import component
import { useEffect, useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Spiner from '../../spiner/Spiner';
import OffNav from '../../offNav/OffNav';
import MenuNavigation from '../../menuNavigation/MenuNavigation';
import Home from '../../home/Home';
import About from '../../about/About';
//import Work from '../../work/Work';
//CSS
import './mainPage.scss';

const Materials = lazy(() => import('../../materials/Materials'));
const Partnership = lazy(() => import('../../partnership/Partnership'));
const Contacts = lazy(() => import('../../contacts/Contacts'));
const Work = lazy(() => import('../../work/Work'));
const MainPage = () => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = (event) => {
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	//Render MainPage
	const view = loading ? <Spiner /> : <View show={show} setShow={setShow} scrollY={scrollY} />;
	return <div className="mainPage">{view}</div>;
};
function View({ scrollY, show, setShow }) {
	return (
		<>
			<Helmet>
				<link rel="apple-touch-icon" sizes="57x57" href="./public/favicons/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="./public/favicons/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="./public/favicons/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="./public/favicons/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="./favicons/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="./favicons/apple-icon-120x120.png" />
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="./public/favicons/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="./public/favicons/apple-icon-152x152.png"
				/>
				<link rel="apple-touch-icon" sizes="180x180" href="./favicons/apple-icon-180x180.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="./favicons/android-icon-192x192.png"
				/>
				<link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="./favicons/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />

				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="./favicons/ms-icon-144x144.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta name="theme-color" content="#ffffff" />

				<title>Ｒｉｃｈ Ｓｔｏｎｅ - вироби із каменю, граніту, мармуру.</title>
				<meta name="title" content="Rich Stone - вироби із каменю, граніту, мармуру." />
				<meta
					name="description"
					content="Виготовлення виробів з натурального каменю (травертину, оніксу, мармуру та граніту).
Фігурне різання мармуру та граніту."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://test.constantine-web.space/" />
				<meta property="og:title" content="Rich Stone - вироби із каменю, граніту, мармуру" />
				<meta
					property="og:description"
					content="Виготовлення виробів з натурального каменю (травертину, оніксу, мармуру та граніту).
Фігурне різання мармуру та граніту."
				/>
				<meta property="og:image" content="./favicons/seoLogo.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://test.constantine-web.space/" />
				<meta property="twitter:title" content="Rich Stone - вироби із каменю, граніту, мармуру" />
				<meta
					property="twitter:description"
					content="Виготовлення виробів з натурального каменю (травертину, оніксу, мармуру та граніту).
Фігурне різання мармуру та граніту."
				/>
				<meta property="twitter:image" content="./favicons/seoLogo.png" />
			</Helmet>
			<OffNav show={show} setShow={setShow} />
			<MenuNavigation show={setShow} />
			<Home data={scrollY} />
			<About data={scrollY} />
			<Suspense fallback={<Spiner />}>
				<Work data={scrollY} />
				<Partnership data={scrollY} />
				<Materials data={scrollY} />
				<Contacts data={scrollY} />
			</Suspense>
		</>
	);
}
export default MainPage;
