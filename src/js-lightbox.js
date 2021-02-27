const refs = {
    tagsRef: document.querySelector('ul.js-gallery'),
    openModalRef: document.querySelector('.lightbox'),
    modalImgRef: document.querySelector('.lightbox__image'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
    backdrop: document.querySelector('.lightbox__overlay'),
};

refs.tagsRef.addEventListener('click', onTagClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onTagClick(event) {
    window.addEventListener('keydown', onEscKeyPress);

    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        return;
    }

    const imageRef = event.target;
    const originalImageURL = imageRef.dataset.source;
    console.log(originalImageURL);

    refs.openModalRef.classList.add('is-open');

    showOriginalImg(originalImageURL);
}

function showOriginalImg(url) {
    refs.modalImgRef.src = url;
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);

    refs.openModalRef.classList.remove('is-open');
    refs.modalImgRef.src = "";
    // refs.modalImgRef.removeAttribute('src');
    // console.log(refs.modalImgRef.removeAttribute('url'));
}

function onBackdropClick(event) {
    if(event.currentTarget === event.target) {
        onCloseModal();
    }
}

function onEscKeyPress(event) {
    // console.log(event.code);
    if(event.code === 'Escape') {
        onCloseModal();
    }
}
