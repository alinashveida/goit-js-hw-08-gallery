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

const imageOverlay = document.querySelector('.lightbox__image');
console.log(imageOverlay);



function onGalleryClick (event) {
  event.preventDefault();

  const target = event.target
  if(target.nodeName !== 'IMG'){
    return
  }
   lightbox.classList.add("is-open");

   imageOverlay.src = target.dataset.source;
   imageOverlay.alt = target.alt;


  // console.log(event.target.nodeName);
  // const target = event.currentTarget;
  // console.log(target);
};

//-------закриття модалки---------------------------------//
const buttonClose = document.querySelector('.lightbox__button');
console.log(buttonClose);

buttonClose.addEventListener('click', onButtonClose);

function onButtonClose (event){
  lightbox.classList.remove("is-open");
  imageOverlay.src = "";
  imageOverlay.alt = "";

};

//----------overlay-------
const overlay = document.querySelector('.lightbox__overlay');

overlay.addEventListener('click', onClickOverlay);

function onClickOverlay(event){
    lightbox.classList.remove("is-open");
    imageOverlay.src = "";
    imageOverlay.alt = "";
};

//----escape----
window.addEventListener('keydown', onEscClose);

function onEscClose(event){
    if(event.key !== "Escape"){
        return
    }
    if(lightbox.classList.contains("is-open")){
        lightbox.classList.remove("is-open");
        imageOverlay.src = "";
        imageOverlay.alt = "";
    }
    
};



//------------

window.addEventListener('keydown', onKeyDownGallery);

let currentIndex = 1
function onKeyDownGallery(event){
    // if(event.code !=="ArrowRight" || event.code !== "ArrowLeft" ){
    //     return
    // }
    if(event.code === "ArrowRight"){
        console.log(currentIndex);
        currentIndex +=1;
    }

    if(event.code === "ArrowLeft"){
        currentIndex -=1;
        console.log(currentIndex)
    }

    if(currentIndex < 0 || currentIndex > galleryItems.length){
        currentIndex = 0
    }
    setModalImage(currentIndex);
}

function setModalImage(index){
    console.log(galleryItems[index]);
}