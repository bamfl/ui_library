import './lib/lib';

$('#first').click(() => {
	$('div').eq(2).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
	$('div').eq(3).fadeToggle(800);
});

$('.btn').eq(2).on('click', () => {
	$('.w-500').fadeToggle(800);
});