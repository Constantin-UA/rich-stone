import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useEffect } from 'react';
//images imports
import matImg_0 from '../../assets/materials/1.jpg';
import matImg_1 from '../../assets/materials/2.jpg';
import matImg_2 from '../../assets/materials/3.jpg';
import matImg_3 from '../../assets/materials/4.jpg';
import matImg_4 from '../../assets/materials/5.jpg';
import matImg_5 from '../../assets/materials/6.jpg';
import matImg_6 from '../../assets/materials/7.jpg';
import matImg_7 from '../../assets/materials/8.jpg';
import matImg_8 from '../../assets/materials/9.jpg';

//scss imports
import './materials.scss';
const dataImg = [
	matImg_0,
	matImg_1,
	matImg_2,
	matImg_3,
	matImg_4,
	matImg_5,
	matImg_6,
	matImg_7,
	matImg_8,
];
const dataNames = [];
for (let i = 0; i < 9; i++) {
	dataNames.push(`matImg_${i}`);
}

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
	useEffect(() => {
		const clientHeight = document.querySelector('.mainPage').clientHeight,
			home = document.querySelector('.home').clientHeight,
			mater = document.querySelector('.materials').clientHeight,
			contacts = document.querySelector('.contacts').clientHeight;

		const min = clientHeight - home - contacts - mater / 2;
		const max = clientHeight - home - contacts / 2;

		console.log('material min: ', min);
		console.log('material max: ', max);

		if (data >= min && data <= max) {
			toggleOn('.materials-item', true);
		} else {
			toggleOff('.materials-item', true);
		}
	}, [data]);
	return (
		<section id="materials" className="materials">
			<Container className="materials-wrapper">
				<div className="materials-box">
					{dataImg.map((elem, idx) => {
						return (
							<div className="materials-item animate__animated" key={idx}>
								<Image className="materials-item-img" alt={dataNames[idx]} src={elem} />
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
export default Materials;
