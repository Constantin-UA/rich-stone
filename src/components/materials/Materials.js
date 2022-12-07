import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import MaterialCard from '../materialCard/MaterialCard';
//images imports
import matImg_0 from '../../assets/materials/Granit-1-min.webp';
import matImg_1 from '../../assets/materials/Marmor-1-min.webp';
import matImg_2 from '../../assets/materials/Aqril-1-min.webp';
import matImg_3 from '../../assets/materials/Quarz-1-min.webp';

//scss imports
import './materials.scss';
const dataImg = [matImg_0, matImg_1, matImg_2, matImg_3]; //
const cardsData = {
	dataTitle: ['Граніт', 'Мармур', 'Акрил', 'Кварц'],
	dataDescr: [
		{
			V: "Об'ємна вага 2680 кг/м3",
			M: 'Міцність при стисканні 180 – 210 МРа',
			Z: 'Зносостійкість 0,45 – 0,48 г/см',
			W: 'Водопоглинання 0,1 - 0,16%',
		},
		{
			V: "Об'ємна вага 2600 – 2640 кг/м3",
			M: 'Міцність при стисканні 240 МРа',
			Z: 'Зносостійкість 0,3 – 2,5 г/см',
			W: 'Водопоглинання 0,15 - 1,02%',
		},
		{
			V: "Об'ємна вага 2800 кг/м3",
			M: 'Міцність при стисканні 142 МРа',
			Z: 'Зносостійкість 0,60 г/см',
			W: 'Водопоглинання 0,21%',
		},
		{
			V: "Об'ємна вага 2600 – 2640 кг/м3",
			M: 'Міцність при стисканні 240 МРа',
			Z: 'Зносостійкість 0,3 – 2,5 г/см',
			W: 'Водопоглинання 0,15 - 1,02%',
		},
	],
};

const toggleOn = (elem, all) => {
	if (all) {
		document
			.querySelectorAll(`${elem}`)
			.forEach((item) => item.classList.remove('animate__zoomOut'));
		document.querySelectorAll(`${elem}`).forEach((item) => item.classList.add('animate__zoomIn'));
	} else {
		document.querySelector(`${elem}`).classList.remove('animate__zoomOut');
		document.querySelector(`${elem}`).classList.add('animate__zoomIn');
	}
};
const toggleOff = (elem, all) => {
	if (all) {
		document
			.querySelectorAll(`${elem}`)
			.forEach((item) => item.classList.remove('animate__zoomIn'));
		document.querySelectorAll(`${elem}`).forEach((item) => item.classList.add('animate__zoomOut'));
	} else {
		document.querySelector(`${elem}`).classList.remove('animate__zoomIn');
		document.querySelector(`${elem}`).classList.add('animate__zoomOut');
	}
};
function Materials({ data }) {
	//effect for animation start/stop
	useEffect(() => {
		const clientHeight = document.querySelector('.mainPage').clientHeight,
			home = document.querySelector('.home').clientHeight,
			mater = document.querySelector('.materials').clientHeight,
			contacts = document.querySelector('.contacts').clientHeight;

		const min = clientHeight - home - contacts - mater / 2;
		const max = clientHeight - home - contacts / 2;

		if (data >= min && data <= max) {
			toggleOn('.materials-box', false);
			toggleOn('.materials-item', true);
		} else {
			toggleOff('.materials-box', false);
			toggleOff('.materials-item', true);
		}
	}, [data]);
	return (
		<section id="materials" className="materials">
			<Container className="materials-wrapper">
				<div className="materials-box animate__animated">
					{dataImg.map((elem, idx) => {
						return (
							<div className="materials-item animate__animated" key={idx}>
								<MaterialCard
									cardImg={elem}
									cardTitle={cardsData.dataTitle[idx]}
									cardDescr={cardsData.dataDescr[idx]}
								/>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
export default Materials;
