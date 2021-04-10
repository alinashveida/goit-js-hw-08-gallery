import galleryItems from "./gallery-items.js";
console.log(galleryItems);

const galleryList = document.querySelector('.js-gallery');
console.log(galleryList);

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems
       .map(({preview, original, description}) =>{
           return`
           <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
       }).join('');

}

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);




const galleryItem = document.querySelectorAll('.gallery__item');
console.log(galleryItem);

const lightbox = document.querySelector('.lightbox');
console.log(lightbox);

galleryList.addEventListener('click', onGalleryClick);

const images = document.querySelectorAll('.gallery__image');



function onGalleryClick (event) {
  event.preventDefault();

  const target = event.target
  if(target.nodeName !== 'IMG'){
    return
  }
   lightbox.classList.add("is-open");

//    const imageSource = target.dataset.source;
//    console.log(imageSource);

   
//    console.log(target.src);

   target.src = target.dataset.source;

//    target.src = imageSource;
  

  

   

  // console.log(event.target.nodeName);
  // const target = event.currentTarget;
  // console.log(target);
};


const buttonClose = document.querySelector('.lightbox__button');
console.log(buttonClose);

buttonClose.addEventListener('click', onButtonClose);

function onButtonClose (event){
  lightbox.classList.remove("is-open");
  
}
