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

// console.log($('.btn').html()); // Нажми на меня!
$('.btn').eq(0).html(`<h1>Hi</h1>`);

$('.btn').eq(1).click(function() {
	$(this).hide();
});

$('.btn').eq(2).click(function() {
	console.log($(this).index());
});

// console.log($('div').eq(0).find('.some'));
// console.log($('.some').closest('.findme'));

$('.btn').fadeOut(2000);
// $('.btn').fadeIn(2000);
