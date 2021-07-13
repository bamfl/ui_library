import $ from '../core';

$.prototype.modalOpen = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute('data-showmodal-id');

    $(this[i]).click((event) => {
      event.preventDefault();
      $(`#${id}`).fadeToggle(300);
      document.body.style.overflow = 'hidden';
    });
  }
};

$.prototype.modalClose = function () {
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

$.prototype.createModal = function ({ text, btns } = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-showmodal-id'));

    modal.innerHTML = `
				<div class="modal-dialog">
					<div class="modal-content">
						<button class="close" data-close><span>&times;</span></button>
						<div class="modal-header">
							<div class="modal-title">${text.title}</div>
							<div class="modal-body">${text.body}</div>
							<div class="modal-footer"></div>
						</div>
					</div>
				</div>
			`;

    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...btns.settings[j][1]);
      btn.innerHTML = btns.settings[j][0];

      if (btns.settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
        btn.addEventListener('click', btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.querySelector('.modal-footer').append(...buttons);

    document.body.append(modal);
    const id = this[i].getAttribute('data-showmodal-id');
    $(`#${id}`).fadeIn(500);
    $(this[i]).modalOpen();
  }
};
