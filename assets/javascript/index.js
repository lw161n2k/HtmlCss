
const openBtns = document.querySelectorAll('.js-open-modal');
const modal = document.querySelector('.js-modal');
const closeBtn = document.querySelector('.js-close-modal');
const modalContainer = document.querySelector('.js-modal-container');
function openModal () {
    modal.classList.add('open-modal');
}

function closeModal () {
    modal.classList.remove('open-modal');
}
for(const openBtn of openBtns) {
    openBtn.addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})
