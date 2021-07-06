// (() => {
// 	const $ = (selector) => {
// 		const elements = document.querySelectorAll(selector);
// 		const obj = {};

// 		obj.hide = () => {
// 			elements.forEach(elem => {
// 				elem.style.display = 'none';
// 			});
// 			return obj;
// 		};

// 		obj.show = () => {
// 			elements.forEach(elem => {
// 				elem.style.display = '';
// 			});
// 			return obj;
// 		};

// 		return obj;
// 	};

// 	window.$ = $;
// })();

const $ = (selector) => {
	return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
	if (!selector) {
		return this; // {}
	}
	document.querySelectorAll(selector);
};