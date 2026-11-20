const gallery = document.querySelector('#gallery');
const modal = document.querySelector('#art-modal');
const modalArt = modal.querySelector('.modal-art');
const title = document.querySelector('#modal-title');
const meta = document.querySelector('#modal-meta');
const size = document.querySelector('#modal-size');
const index = document.querySelector('#modal-index');

gallery.addEventListener('click', (event) => {
  const card = event.target.closest('.art-card');
  if (!card) return;
  title.textContent = card.dataset.title;
  meta.textContent = card.dataset.meta;
  size.textContent = card.dataset.size;
  index.textContent = card.querySelector('.card-number').textContent;
  modalArt.className = 'modal-art image-art';
  modalArt.style.backgroundImage = `url("${card.dataset.image || card.style.backgroundImage.slice(5, -2)}")`;
  modalArt.innerHTML = '';
  modal.showModal();
});

modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
