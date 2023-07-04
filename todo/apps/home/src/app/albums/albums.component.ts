import { Component } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumsService]
})
export class AlbumsComponent {

  // complete incomplete void pending
  // red blue green yellow 
  albums: any[] = [];

  constructor(private readonly albumService: AlbumsService,
    private readonly router: Router) {
      this.albumService.getJSON().subscribe(
        res => this.albums = res as any[]
      )
  }

  show(album: any) {
    localStorage.setItem('album', JSON.stringify(album))
    this.router.navigate(['gallery'])
  }

}
