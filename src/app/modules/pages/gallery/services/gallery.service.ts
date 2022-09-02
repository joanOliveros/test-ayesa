import { Injectable } from '@angular/core';
import { InGalleryImage } from '../models/in-management-gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleryImage: InGalleryImage[] = [];
  constructor() { }


  getGalleryImages(): any {
    this.galleryImage = [
      {id: 0, src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
      {id: 1, src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp'},
      {id: 2, src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp'},
      {id: 3, src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp'},
      {id: 4, src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp'},
      {id: 6, src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp'},
    ];
    return this.galleryImage;
  }

  removeImage(id: number): any {
    const index = this.galleryImage.findIndex(d => d.id === id);
    this.galleryImage.splice(index, 1);
    return this.galleryImage;
  }
}
