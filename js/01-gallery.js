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
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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
            
        const originImage = event.target.getAttribute("data-source");   
        const instance = basicLightbox.create(`
           <img src="${originImage}">
         `)

    instance.show()
 
}

// createGalleryItems();

// gallery.addEventListener("click", (event) => {
//     event.preventDefault();
//     event.stopPropagation();
    
//     const instance = basicLightbox.create(`
//         <div class="modal">
//             ${event.target.outerHTML}
//         </div>
//     `);

//     instance.show();
// });

// function createGalleryItems() {
// const pictures = galleryItems
//   .map((item) => `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}" ">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="large-image.jpg"
//       alt="${item.description}"
//     />
//   </a>
// </div>`)
//   .join("");
//   gallery.insertAdjacentHTML("beforeend", pictures);
// }

