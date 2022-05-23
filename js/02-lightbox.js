import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItem (items){

 return items.map((item) => {
  const {preview, original, description} = item;
   return `
   <div class="gallery__item">
    <a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
   </div>`;
 }).join("");

}

galleryBox.addEventListener("click", onImageClick);

function onImageClick (event){
    event.preventDefault();    
    if(!event.target.classList.contains("gallery__image")){
        return;        
    }            
        
var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt" });

}


console.log(galleryItems);
