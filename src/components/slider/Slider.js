import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { useReducer, useState, useEffect } from 'react';

import './slider.scss';
function CarouselFade({ dataLang, slides }) {
	const { countertops, facing, fireplaces, pavement, facades, interior, floors } = slides.desktop;
	function reducer(state, action) {
		switch (action.type) {
			case 0:
				return countertops;
			case 1:
				return facing;
			case 2:
				return fireplaces;
			case 3:
				return pavement;
			case 4:
				return facades;
			case 5:
				return interior;
			case 6:
				return floors;
			default:
				throw new Error();
		}
	}
	const [state, dispatch] = useReducer(reducer, countertops);
	const showPhoto = (array) => {
		return array.map((src, idx) => {
			return (
				<Carousel.Item key={idx}>
					<img className="slide-bg" src={src} alt="bg" />
				</Carousel.Item>
			);
		});
	};

	const [index, setIndex] = useState(0);
	const handleSelect = (selectIndex, e) => {
		setIndex(selectIndex);
	};
	const [activeBtn, setActiveBtn] = useState(0);
	useEffect(() => {
		document.querySelectorAll('.slide-btn-text').forEach((item, idx) => {
			item.classList.remove('activeBtn');
			if (idx === activeBtn) item.classList.add('activeBtn');
		});
	}, [activeBtn]);
	return (
		<Container className="work-wrapper">
			<Carousel
				className="animate__animated"
				controls={true}
				activeIndex={index}
				onSelect={handleSelect}
				indicators={false}
				interval={24000}
				fade
			>
				{showPhoto(state)}
			</Carousel>
			<ul className="slide-btn-box">
				{dataLang.sliderBtns.map((item, idx) => {
					return (
						<li
							key={idx}
							className="slide-btn"
							onClick={() => {
								dispatch({ type: idx });
								setIndex(0);
								setActiveBtn(idx);
							}}
						>
							<span className="slide-btn-text">{item}</span>
						</li>
					);
				})}
			</ul>
		</Container>
	);
}

export default CarouselFade;

/// import and render
/*
import Slider from '../slider/Slider';
<Slider scrollY={scrollY} dataLang={dataLang} slides={slides} />
*/

/* <picture>
<source media="(max-width: 536px)" srcSet={data.slides.Mobile[idx]} />
<source media="(max-width: 769px)" srcSet={data.slides.Tablet[idx]} />
<img className="slide-bg" src={src} alt="bg" />
</picture> */

/* 
			{slides.Desktop.map((src, idx) => {
				return (
					<Carousel.Item key={idx}>
						<img className="slide-bg" src={src} alt="bg" />
					</Carousel.Item>
				);
			})}
*/
