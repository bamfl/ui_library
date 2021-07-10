import './lib/lib';

$('.active').show().hide().toggleDisplay();
$('.active').addClass('red', 'big').removeClass('active').toggleClass('active');

const clicked = () => {
	$('.active').toggleClass('clicked');
};

$('.active').on('click', clicked);
$('.active').off('click', clicked);
$('.active').click(clicked);

$('.btn').on('click', function() {
	$(this).toggleClass('active');
});

$('.btn').setAttr('myattr', 10);
$('.btn').removeAttr('myattr', 10);
