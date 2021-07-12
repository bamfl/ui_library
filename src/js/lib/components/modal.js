import $ from '../core';

$.prototype.modalOpen = function() {
	for (let i = 0; i < this.length; i++) {
		const id = this[i].getAttribute('data-showmodal-id');

		$(this[i]).click((event) => {
			event.preventDefault();
			$(`#${id}`).fadeToggle(300);
			document.body.style.overflow = 'hidden';
		});
	}

	
};

$.prototype.modalClose = function() {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).click(() => {
			$(this[i]).closest('.modal').fadeToggle(300);
			document.body.style.overflow = '';
		});
	}
	
	$('.modal').click((e) => {
		if (e.target.classList.contains('modal')) {
			$('.modal').fadeOut(300);
			document.body.style.overflow = '';
		}
	});
};