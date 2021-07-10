import $ from '../core';

$.prototype.addClass = function(...classNames) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}

		this[i].classList.add(...classNames);
	}

	return this;
};

$.prototype.removeClass = function(...classNames) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}
		
		this[i].classList.remove(...classNames);
	}

	return this;
};

$.prototype.toggleClass = function(...classNames) {
	if (classNames.length === 0) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if (!this[i].classList) {
			continue;
		}

		this[i].classList.toggle(...classNames);
	}

	return this;
};
