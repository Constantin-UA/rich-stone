import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import MaterialCard from '../materialCard/MaterialCard';
import { useToggler } from '../hook/useToggler.hook';

//scss imports
import './materials.scss';

function Materials({ scrollY, dataLang, materialImg }) {
	const { toggler } = useToggler();

	useEffect(() => {
		const clientHeight = document.querySelector('.mainPage').clientHeight;
		const home = document.querySelector('.home').clientHeight;
		const mater = document.querySelector('.materials').clientHeight;
		const min = clientHeight - home - mater - mater / 2;

		if (scrollY >= min) {
			//	toggler('.materials-box', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.materials-item', 'animate__fadeOutRight', 'animate__fadeInRight', true);
		} else {
			//	toggler('.materials-box', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.materials-item', 'animate__fadeInRight', 'animate__fadeOutRight', true);
		}
	}, [scrollY, toggler]);

	return (
		<section id="materials" className="materials">
			<Container className="materials-wrapper">
				<ul className="materials-box animate__animated">
					{materialImg.map((elem, idx) => {
						return (
							<li className="materials-item animate__animated" key={idx}>
								<MaterialCard
									cardImg={elem}
									cardTitle={dataLang.materialData.dataTitle[idx]}
									cardDescription={dataLang.materialData.dataDescription[idx]}
								/>
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}
export default Materials;
