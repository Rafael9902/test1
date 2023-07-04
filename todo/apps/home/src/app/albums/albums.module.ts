import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';
import { albumsRoutes } from './albums.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(albumsRoutes)],
})
export class AlbumsModule {}
