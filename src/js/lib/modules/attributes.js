import $ from '../core';

$.prototype.setAttr = function(name, value) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].attributes) {
			continue;
		}

		this[i].setAttribute(name, value);
	}

	return this;
};

$.prototype.removeAttr = function(name, value) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].attributes) {
			continue;
		}
		
		this[i].removeAttribute(name, value);
	}

	return this;
};
