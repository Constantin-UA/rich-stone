export function useToggler() {
	const toggler = (elem, remove, add, AllMarker = false) => {
		if (AllMarker) {
			document.querySelectorAll(`${elem}`).forEach((el) => {
				el.classList.remove(remove);
				el.classList.add(add);
			});
		} else {
			document.querySelector(`${elem}`).classList.remove(`${remove}`);
			document.querySelector(`${elem}`).classList.add(`${add}`);
		}
	};
	const togglerToSlider = (elem, remove, add) => {
		document.querySelector(`${elem}`).classList.remove(...remove);
		document.querySelector(`${elem}`).classList.add(...add);
	};
	return { toggler, togglerToSlider };
}
