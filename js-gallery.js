import images from "/gallery-items.js"

const ulRef = document.querySelector('ul.gallery');

images.forEach((image) => {
    const liRef = document.createElement('li');
    const linkRef = document.createElement('a');
    const imgRef = document.createElement('img');

    liRef.classList.add('gallery__item');
    linkRef.classList.add('gallery__link');
    linkRef.href = image['original'];
    imgRef.classList.add('gallery__image')
    imgRef.src = image['preview'];
    imgRef.setAttribute('data-source', image.original);
    imgRef.alt = image['description'];
    
    ulRef.appendChild(liRef);
    liRef.appendChild(linkRef);
    linkRef.appendChild(imgRef);
    
    // ulRef.append(liRef, linkRef, imgRef);
});