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

$('.wrap').html(`
	<div class="dropdown m20">
	<button class="btn btn-success dropdown-toggle" id="dropdownMenuButton3">Открыть dropdown меню</button>

	<ul class="dropdown-menu" data-toggle-id="dropdownMenuButton3">
		<li><a href="#" class="dropdown-item">Пункт 1</a></li>
		<li><a href="#" class="dropdown-item">Пункт 2</a></li>
		<li><a href="#" class="dropdown-item">Пункт 3</a></li>
	</ul>
	</div>
`);

$('.dropdown-toggle').dropdown();
$('[data-showmodal-id]').modalOpen();
$('[data-close]').modalClose();
