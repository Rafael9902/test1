import { Component } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'todo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent {

  gallery: any[] = [];

  constructor(private readonly galleryService: GalleryService) {
    const album = JSON.parse(localStorage.getItem('album') as string);
    const {id} = album;
    galleryService.getJSON().subscribe(res => this.gallery = res.filter(x => x.albumId === id))
  }

}
