import { Component, OnInit } from '@angular/core';


import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-management-gallery',
  templateUrl: './management-gallery.component.html',
  styleUrls: ['./management-gallery.component.scss']
})
export class ManagementGalleryComponent implements OnInit {
  constructor(private gelleryService: GalleryService) { }

  gallery !: any;
  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.gallery = this.gelleryService.getGalleryImages();
  }

  removeImage(id: number): void {
    this.gallery = this.gelleryService.removeImage(Number(id));
  }
}
